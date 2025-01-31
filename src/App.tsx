import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useEffect, useRef, useState } from "react";

import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { Contacts } from "./contacts/Contacts.tsx";
import { LS, LSKeys } from "./ls";
import { sendDataToGAServices } from "./utils/events.ts";
import { Services, Service } from "./types.ts";
import { preparePayload } from "./utils/payload.ts";
import { shortServices, longServices } from "./constants.ts";
import { getRandomServices } from "./utils/get-random-services.ts";
import { ThankYou } from "./thx/ThankYou.tsx";

const randomServices = [
  ...getRandomServices(shortServices),
  ...getRandomServices(longServices),
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [serviceType, setServiceType] = useState(randomServices[0].swiperText);
  const [serviceProducts, setServiceProducts] = useState<Services>(
    randomServices[0],
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedItems, setSelectedItems] = useState<Array<Service | null>>([]);
  const [isContactsFormVisible, setIsContactsFormVisible] = useState(false);

  const swiperRef = useRef<SwiperRef | null>(null);

  const submit = () => {
    const servicesObj = preparePayload(selectedItems);

    setLoading(true);
    sendDataToGAServices({ ...servicesObj }).then(() => {
      setIsContactsFormVisible(true);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, [selectedItems]);

  if (thxShow) {
    return <ThankYou />;
  }

  if (isContactsFormVisible) {
    return (
      <Contacts selectedItems={selectedItems} handleThx={() => setThx(true)} />
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={16} />
        <div className={appSt.box}>
          <Typography.TitleResponsive
            tag="h1"
            view="large"
            font="system"
            weight="bold"
          >
            Альфа-Дом
          </Typography.TitleResponsive>
          <Gap size={4} />
          <Typography.Text
            view="primary-medium"
            color="secondary"
            style={{ textAlign: "center" }}
          >
            Полезные сервисы для дома
          </Typography.Text>
          <Gap size={16} />
          <Typography.Text
            view="primary-medium"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Выберите услуги, которыми хотите воспользоваться на выгодных
            условиях следующие 6 месяцев
          </Typography.Text>
        </div>

        <Gap size={24} />

        <div>
          <Swiper ref={swiperRef} slidesPerView="auto">
            {randomServices.map((service) => {
              const tabCount = selectedItems.filter(
                (selectedItem) =>
                  selectedItem?.swiperText === service.swiperText,
              ).length;

              return (
                <SwiperSlide
                  key={service.swiperText}
                  onClick={() => {
                    setServiceType(service.swiperText);
                    setServiceProducts(service);
                  }}
                  className={appSt.swSlide({
                    selected: serviceType === service.swiperText,
                  })}
                >
                  {service.swiperText}
                  {tabCount > 0 && ` (${tabCount})`}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Gap size={32} />

        {serviceProducts && (
          <div className={appSt.products}>
            {serviceProducts.items.map((item, index) => {
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    setSelectedService(item);
                    setIsModalVisible(true);
                  }}
                  className={appSt.product}
                  style={{
                    ...(index >= serviceProducts.halfWithCount && {
                      maxWidth: "100%",
                      flex: "1 1 100%",
                    }),
                    ...(selectedItems.find(
                      (selectedItem) => selectedItem?.title === item.title,
                    ) && { border: "2px solid #2083D8" }),
                  }}
                >
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                    className={appSt.productTitle}
                  >
                    {item.title}
                  </Typography.Text>
                  <img
                    className={appSt.productIcon}
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
              );
            })}
          </div>
        )}

        <BottomSheet
          trimTitle={false}
          open={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          title={
            <Typography.TitleResponsive
              tag="h1"
              view="large"
              font="system"
              weight="bold"
            >
              {selectedService?.modalTitle}
            </Typography.TitleResponsive>
          }
        >
          {selectedService && (
            <div className={appSt.serviceContainer}>
              {selectedService.modalText.map((text, index) => (
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  key={index}
                >
                  {text}
                </Typography.Text>
              ))}
            </div>
          )}

          <Gap size={24} />

          {selectedItems.length > 0 &&
            selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <>
                <Typography.Text
                  view="primary-medium"
                  color="secondary"
                  weight="bold"
                  style={{
                    height: "56px",
                    textAlign: "center",
                    alignContent: "center",
                  }}
                >
                  Уже выбрано
                </Typography.Text>
              </>
            )}

          {selectedItems.length < 6 &&
            !selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <>
                <ButtonMobile
                  block
                  view="primary"
                  onClick={() => {
                    setSelectedItems([...selectedItems, selectedService]);
                    setIsModalVisible(false);
                  }}
                >
                  Выбрать
                </ButtonMobile>
              </>
            )}

          {selectedItems.length > 0 && (
            <>
              {selectedItems.find(
                (selectedItem) =>
                  selectedItem?.title === selectedService?.title,
              ) && (
                <ButtonMobile
                  block
                  view="primary"
                  onClick={() => {
                    setSelectedItems([
                      ...selectedItems.filter(
                        (item) => item?.title !== selectedService?.title,
                      ),
                    ]);
                    setIsModalVisible(false);
                  }}
                >
                  Отменить выбор
                </ButtonMobile>
              )}
              {selectedItems.length >= 6 &&
                !selectedItems.find(
                  (selectedItem) =>
                    selectedItem?.title === selectedService?.title,
                ) && (
                  <Typography.Text
                    view="primary-medium"
                    color="secondary"
                    weight="bold"
                    style={{
                      height: "56px",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  >
                    Выбрано максимум услуг
                  </Typography.Text>
                )}
            </>
          )}

          {selectedItems.length < 6 &&
            !selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <ButtonMobile
                block
                view="transparent"
                size={56}
                onClick={() => setIsModalVisible(false)}
              >
                Назад
              </ButtonMobile>
            )}
        </BottomSheet>
      </div>

      <Gap size={128} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          disabled={selectedItems.length === 0}
          block
          view="primary"
          size="xl"
          hint={
            selectedItems.length === 0
              ? "Выберите до 6 любых сервисов"
              : "Продолжить"
          }
          onClick={submit}
        >
          {selectedItems.length} из 6 выбрано
          <br />
        </ButtonMobile>
      </div>
    </>
  );
};
