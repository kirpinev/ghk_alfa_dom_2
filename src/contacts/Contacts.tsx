import { useState } from "react";

import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Input } from "@alfalab/core-components/input";
import { Gap } from "@alfalab/core-components/gap";
import { MaskedInput } from "@alfalab/core-components/masked-input";
import { sendDataToGAServicesWithContacts } from "../utils/events.ts";

import cool from "../assets/cool.png";

import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

import { preparePayload } from "../utils/payload.ts";
import { Service } from "../types.ts";
import { LS, LSKeys } from "../ls";

interface ThxLayoutProps {
  selectedItems: Array<Service | null>;
  handleThx: () => void;
}

export const Contacts = ({ selectedItems, handleThx }: ThxLayoutProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (name && phone) {
      const servicesObj = preparePayload(selectedItems);

      setLoading(true);
      sendDataToGAServicesWithContacts({
        ...servicesObj,
        contacts: `${name}, ${phone}`,
      }).then(() => {
        setLoading(false);
        LS.setItem(LSKeys.ShowThx, true);
        handleThx();
      });
    }
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка смайлика"
          src={cool}
          width={200}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="medium"
          defaultMargins={false}
          weight="bold"
          className={thxSt.title}
        >
          Уже разрабатываем
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          {`Хотите протестировать новый сервис и\u00A0повлиять на его развитие?
          Напишите имя и\u00A0последние 4 цифры вашего номера телефона — расскажем,
          как принять участие.`}
        </Typography.Text>

        <Gap size={32} />

        <Input
          block={true}
          placeholder="Имя"
          labelView="outer"
          size={48}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Gap size={8} />

        <MaskedInput
          value={phone}
          onChange={(_, payload) => setPhone(payload.value)}
          mask={[/\d/, /\d/, /\d/, /\d/]}
          placeholder="4 последние цифры номера телефона"
          labelView="outer"
          size={48}
          block={true}
        />
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          disabled={name.length < 1 || phone.length < 4}
          loading={loading}
          onClick={submit}
          view="primary"
          href=""
        >
          Отправить
        </ButtonMobile>
      </div>
    </>
  );
};
