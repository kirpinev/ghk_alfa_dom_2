import { Services } from "./types.ts";

import urist from "./assets/urist.png";
import clining from "./assets/clining.png";
import himka from "./assets/himka.png";
import products from "./assets/products.png";
import remont from "./assets/remont.png";
import creditRemont from "./assets/credit-remont.png";
import designProject from "./assets/design-project.png";
import remont1 from "./assets/remont1.png";
import pokupki from "./assets/pokupki.png";
import rent1 from "./assets/rent-1.png";
import rent2 from "./assets/rent-2.png";
import rent3 from "./assets/rent-3.png";
import rent4 from "./assets/rent-4.png";
import rent5 from "./assets/rent-5.png";
import rent6 from "./assets/rent-6.png";
import kabala1 from "./assets/kabala-1.png";
import kabala3 from "./assets/kabala-3.png";
import kabala4 from "./assets/kabala-4.png";
import kabala5 from "./assets/kabala-5.png";
import kabala6 from "./assets/kabala-6.png";
import kabala7 from "./assets/kabala-7.png";
import consult1 from "./assets/consult-1.png";
import consult2 from "./assets/consult-2.png";
import consult3 from "./assets/consult-3.png";
import consult4 from "./assets/consult-4.png";
import buySell1 from "./assets/buy-sell-1.png";
import buySell2 from "./assets/buy-sell-2.png";
import buySell3 from "./assets/buy-sell-3.png";
import buySell4 from "./assets/buy-sell-4.png";
import buySell5 from "./assets/buy-sell-5.png";
import buySell6 from "./assets/buy-sell-6.png";
import buySell7 from "./assets/buy-sell-7.png";
import pereezd from "./assets/pereezd.png";
import sesyriti1 from "./assets/sesyriti-1.png";
import sesyriti2 from "./assets/sesyriti-2.png";
import sesyriti3 from "./assets/sesyriti-3.png";
import sesyriti4 from "./assets/sesyriti-4.png";
import sesyriti5 from "./assets/sesyriti-5.png";
import sesyriti6 from "./assets/sesyriti-6.png";

export const services: Array<Services> = [
  {
    halfWithCount: 4,
    swiperText: "Бытовые сервисы",
    items: [
      {
        gaSwiperText: "domestic_services",
        gaServiceText: "master",
        swiperText: "Бытовые сервисы",
        title: "Мастер на час",
        image: urist,
        modalTitle: "Мастер на час",
        modalText: [
          "Оставляйте заявку на выполнение мелких бытовых задач через наш сервис. Мы подберем подходящего мастера, который сможет приехать в удобное для вас время.",
          "Все мастера проходят тщательную проверку, поэтому вы можете быть уверены в качестве работы.",
        ],
      },
      {
        gaSwiperText: "domestic_services",
        gaServiceText: "cleaning",
        swiperText: "Бытовые сервисы",
        title: "Клининг",
        image: clining,
        modalTitle: "Клининг",
        modalText: [
          "Выбирайте тип уборки, указать удобную дату и время. Команда профессионалов проведёт уборку согласно вашему запросу.",
        ],
      },
      {
        gaSwiperText: "domestic_services",
        gaServiceText: "himchistka",
        swiperText: "Бытовые сервисы",
        title: "Химчистка",
        image: himka,
        modalTitle: "Химчистка",
        modalText: [
          "Оставляйте заявку на услуги химчистки, оформляйте и отслеживайте заказ.",
        ],
      },
      {
        gaSwiperText: "domestic_services",
        gaServiceText: "products",
        swiperText: "Бытовые сервисы",
        title: "Заказ продуктов",
        image: products,
        modalTitle: "Заказ продуктов",
        modalText: [
          "Выбирайте и заказывайте продукты прямо в нашем приложении. Мы организуем весь процесс и доставим до вашей двери.",
        ],
      },
    ],
  },
  {
    halfWithCount: 4,
    swiperText: "Ремонт",
    items: [
      {
        gaSwiperText: "remont",
        gaServiceText: "nakopit",
        swiperText: "Ремонт",
        title: "Накопить на ремонт",
        image: remont,
        modalTitle: "Накопить на ремонт",
        modalText: [
          "Создайте цель накопления денег на ремонт. Мы поможем контролировать расходы и сбережения, а также предложим советы по оптимизации бюджета.",
        ],
      },
      {
        gaSwiperText: "remont",
        gaServiceText: "credit",
        swiperText: "Ремонт",
        title: "Кредит на ремонт",
        image: creditRemont,
        modalTitle: "Кредит на ремонт",
        modalText: [
          "Подайте заявку на кредит, мы поможем подобрать лучшие условия и оформим кредит максимально быстро.",
        ],
      },
      {
        gaSwiperText: "remont",
        gaServiceText: "design",
        swiperText: "Ремонт",
        title: "Дизайн-проект",
        image: designProject,
        modalTitle: "Дизайн-проект",
        modalText: [
          "Закажите дизайн-проект по вашим предпочтениям и бюджету. Это поможет избежать ошибок при ремонте и создать интерьер своей мечты.",
        ],
      },
      {
        gaSwiperText: "remont",
        gaServiceText: "remont",
        swiperText: "Ремонт",
        title: "Ремонт",
        image: remont1,
        modalTitle: "Ремонт",
        modalText: [
          "Выбирайте из проверенных ремонтных бригад, общайтесь с дизайнерами и специалистами по ремонту, отслеживайте ход выполняемых работ.",
        ],
      },
      {
        gaSwiperText: "remont",
        gaServiceText: "pokupki",
        swiperText: "Ремонт",
        title: "Покупки для ремонта и дома",
        image: pokupki,
        modalTitle: "Покупки для ремонта и дома",
        modalText: [
          "Широкий ассортимент товаров для ремонта и дома, включая строительные материалы, мебель, декор и многое другое. Всё это можно выгодно купить в одном месте с повышенным кэшбэком и скидками от партнёров.",
        ],
      },
    ],
  },
  {
    halfWithCount: 4,
    swiperText: "Аренда",
    items: [
      {
        gaSwiperText: "arenda",
        gaServiceText: "snyat_na_sutki",
        swiperText: "Аренда",
        title: "Снять посуточно",
        image: rent1,
        modalTitle: "Снять посуточно",
        modalText: [
          "Организуем быстрое и удобное решение вопроса временного проживания. Вы сможете выбрать подходящую квартиру или комнату, забронировать ее в разделе Альфа-Дом и заселиться в кратчайшие сроки.",
        ],
      },
      {
        gaSwiperText: "arenda",
        gaServiceText: "sdat_na_sutki",
        swiperText: "Аренда",
        title: "Сдать посуточно",
        image: rent2,
        modalTitle: "Сдать посуточно",
        modalText: [
          "Поможем привлечь клиентов, организуем бронирование и обеспечим безопасное заключение договоров. Вы сможете получать доход от сдачи без лишних забот.",
        ],
      },
      {
        gaSwiperText: "arenda",
        gaServiceText: "snyat_nadolgo",
        swiperText: "Аренда",
        title: "Снять надолго",
        image: rent3,
        modalTitle: "Снять надолго",
        modalText: [
          "У вас будет доступ к базе объявлений, где сможете выбрать подходящий вариант и связаться с владельцем. Мы поможем проверить владельца и составить договор аренды, чтобы защитить ваши права как арендатора.",
        ],
      },
      {
        gaSwiperText: "arenda",
        gaServiceText: "sdat_nadolgo",
        swiperText: "Аренда",
        title: "Сдать надолго",
        image: rent4,
        modalTitle: "Сдать надолго",
        modalText: [
          "Поможем легко и удобно найти надёжных арендаторов на длительный срок в разделе Альфа-Дом. Мы обеспечиваем безопасность сделок и помогаем заключить договор аренды, защищая ваши интересы.",
        ],
      },
      {
        gaSwiperText: "arenda",
        gaServiceText: "ocenka_nedvizhimosti",
        swiperText: "Аренда",
        title: "Оценка недвижимости: за сколько сдать и снять",
        image: rent5,
        modalTitle: "Оценка недвижимости",
        modalText: [
          "Оцените стоимость аренды или сдачи недвижимости онлайн. Это поможет вам избежать недополучения прибыли или переплаты.",
        ],
      },
      {
        gaSwiperText: "arenda",
        gaServiceText: "podgotovka_k_sdache",
        swiperText: "Аренда",
        title: "Подготовка квартиры к сдаче",
        image: rent6,
        modalTitle: "Подготовка квартиры к сдаче",
        modalText: [
          "Мы организуем уборку, мелкий ремонт, замену замков и другие необходимые работы, чтобы квартира была готова к приёму арендаторов: выглядела привлекательно и соответствовала стандартам.",
        ],
      },
    ],
  },
  {
    halfWithCount: 0,
    swiperText: "Ипотека",
    items: [
      {
        swiperText: "Ипотека",
        gaSwiperText: "ipoteka",
        gaServiceText: "strahovanie",
        title: "Страхование ипотеки",
        image: kabala1,
        modalTitle: "Страхование ипотеки",
        modalText: [
          "Спокойствие и защита от возможных рисков, связанных с невыплатой ипотеки. Страховой полис обеспечит финансовую поддержку в случае потери работы, болезни или других форс-мажорных обстоятельств.",
        ],
      },
      {
        gaSwiperText: "ipoteka",
        gaServiceText: "consultation",
        swiperText: "Ипотека",
        title: "Консультация по ипотеке",
        image: kabala3,
        modalTitle: "Консультация по ипотеке",
        modalText: [
          "Наш ипотечный специалист ответит на все вопросы, связанные с оформлением ипотеки, расчётом платежей и предложит оптимальное решение.",
        ],
      },
      {
        gaSwiperText: "ipoteka",
        gaServiceText: "obremenenie",
        swiperText: "Ипотека",
        title: "Снятие обременения",
        image: kabala4,
        modalTitle: "Снятие обременения",
        modalText: [
          "Быстрое и правильное снятие обременения с вашей недвижимости. Мы избавим вас от бюрократических процедур и гарантируем соблюдение всех юридических норм.",
        ],
      },
      {
        gaSwiperText: "ipoteka",
        gaServiceText: "zayavka",
        swiperText: "Ипотека",
        title: "Подача заявки на ипотеку или рефенансирование",
        image: kabala5,
        modalTitle: "Подача заявки на ипотеку",
        modalText: [
          "Упрощенный процесс подачи заявки на ипотеку или рефинансирование. Мы обработаем все документы и свяжемся с вами для уточнения деталей и согласования условий.",
        ],
      },
      {
        gaSwiperText: "ipoteka",
        gaServiceText: "gos_support",
        swiperText: "Ипотека",
        title: "Доступные меры гос. поддержки: информирование",
        image: kabala6,
        modalTitle: "Информирование о гос. поддержке",
        modalText: [
          "Узнавайте о существующих программах помощи и субсидий, которые могут существенно облегчить приобретение или улучшение жилищных условий.",
        ],
      },
      {
        gaSwiperText: "ipoteka",
        gaServiceText: "forum",
        swiperText: "Ипотека",
        title: "Форум: Сообщество пользователей и экспертов",
        image: kabala7,
        modalTitle: "Доступ к сообществу",
        modalText: [
          "Получите постоянный доступ к актуальной информации и поддержке. Вы сможете обсудить любые вопросы, касающиеся недвижимости, ремонта, строительства и многого другого.",
        ],
      },
    ],
  },
  {
    halfWithCount: 0,
    swiperText: "Консультации",
    items: [
      {
        gaSwiperText: "consultation",
        gaServiceText: "lawyer",
        swiperText: "Консультации",
        title: "Помощь юриста",
        image: consult1,
        modalTitle: "Консультация юриста",
        modalText: [
          "Профессиональная юридическая помощь, которая поможет вам избежать ошибок и защитить свои интересы в правовых спорах.",
        ],
      },
      {
        gaSwiperText: "consultation",
        gaServiceText: "rieltor",
        swiperText: "Консультации",
        title: "Консультации риелтора",
        image: consult2,
        modalTitle: "Консультация риелтора",
        modalText: [
          "Запишитесь на консультацию с риелтором. Он поможет вам разобраться в текущих тенденциях рынка, выбрать оптимальный вариант недвижимости и провести успешную сделку.",
        ],
      },
      {
        gaSwiperText: "consultation",
        gaServiceText: "social_site",
        swiperText: "Консультации",
        title: "Социальная сеть для общения на темы недвижимости",
        image: consult3,
        modalTitle: "Социальная сеть",
        modalText: [
          "Общение и доступ к полезной информации на специальном форуме. Вы сможете узнавать последние новости рынка недвижимости, обмениваться идеями и находить новые возможности для инвестиций.",
        ],
      },
      {
        gaSwiperText: "consultation",
        gaServiceText: "podpiska",
        swiperText: "Консультации",
        title: "Правовой помощник и риелтор по подписке",
        image: consult4,
        modalTitle: "Подписка на консультации",
        modalText: [
          "Подпишитесь на пакет услуг, который включает доступ к экспертам в области недвижимости. Специалисты будут готовы ответить на ваши вопросы и оказать необходимую поддержку в любое время.",
        ],
      },
    ],
  },
  {
    halfWithCount: 4,
    swiperText: "Покупка-продажа жилья",
    items: [
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "find_rieltor",
        swiperText: "Покупка-продажа жилья",
        title: "Найти риелтора",
        image: buySell1,
        modalTitle: "Найти риелтора",
        modalText: [
          "Вы сможете заполнить форму запроса на поиск риелтора, указав свои требования и цели. Мы подберём для вас проверенного эксперта с хорошей репутацией и большим опытом работы.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "ocenit_stoimost",
        swiperText: "Покупка-продажа жилья",
        title: "Оценить стоимость квартиры",
        image: buySell2,
        modalTitle: "Оценка стоимости жилья",
        modalText: [
          "Оцените стоимость недвижимости онлайн, основываясь на данных банка о сделках и интеграторах, анализе рынка и сравнении с аналогичными объектами.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "provesti_sdelku",
        swiperText: "Покупка-продажа жилья",
        title: "Провести сделку",
        image: buySell3,
        modalTitle: "Проведение сделки",
        modalText: [
          "Мы поможем вам провести сделку купли-продажи недвижимости безопасно и без риска, обеспечивая юридическое сопровождение, подготовку документов и контроль всех этапов процесса. Дополнительно мы поможем зарегистрировать собственность.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "tax_vychet",
        swiperText: "Покупка-продажа жилья",
        title: "Налоговый вычет",
        image: buySell4,
        modalTitle: "Налоговый вычет",
        modalText: [
          "Обратитесь к нам за консультацией по получению налогового вычета при покупке недвижимости.",
          "Наши специалисты помогут правильно заполнить документы, чтобы избежать ошибок.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "podobrat_object",
        swiperText: "Покупка-продажа жилья",
        title: "Подобрать объект недвижимости",
        image: buySell5,
        modalTitle: "Подбор объекта недвижимости",
        modalText: [
          "Мы подберём для вас подходящие варианты и предложим специальные условия на покупку. Вы можете просмотреть подробную информацию о каждом объекте и запланировать просмотры.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "buy_sale_ipoteka",
        swiperText: "Покупка-продажа жилья",
        title: "Купить, продать квартиру в ипотеке или продать из под залога",
        image: buySell6,
        modalTitle: "Покупка/продажа квартиры в ипотеке",
        modalText: [
          "Мы поможем купить или продать квартиру, находящуюся в ипотеке или залоге. Обеспечиваем юридическое сопровождение, все формальности будут соблюдены. Сделка состоится в соответствии с законодательством.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "priemka_kvartiry",
        swiperText: "Покупка-продажа жилья",
        title: "Приёмка квартиры",
        image: buySell7,
        modalTitle: "Приёмка квартиры",
        modalText: [
          "Закажите услугу приёмки квартиры после строительства или ремонта. Специалисты проведут тщательный осмотр, документально фиксируя все недочеты и дефекты.",
          "Это позволит требовать компенсацию или исправления дефектов от застройщика или подрядчика.",
        ],
      },
      {
        gaSwiperText: "buy_sale_aparts",
        gaServiceText: "pereezd",
        swiperText: "Покупка-продажа жилья",
        title: "Переезд",
        image: pereezd,
        modalTitle: "Переезд",
        modalText: [
          "Заказывайте услугу переезда. Мы предоставляем транспорт, упаковочные материалы и команду грузчиков, которые помогут аккуратно перевезти ваше имущество на новое место.",
        ],
      },
    ],
  },
  {
    halfWithCount: 0,
    swiperText: "Управление домом и безопасность",
    items: [
      {
        gaSwiperText: "aparts_management",
        gaServiceText: "golosovanie",
        swiperText: "Управление домом и безопасность",
        title: "Голосования собственников",
        image: sesyriti1,
        modalTitle: "Голосования собственников",
        modalText: [
          "Участвуйте в голосованиях собственников прямо в нашем приложении. Ваши голоса будут учтены, и вы сможете внести свой вклад в улучшение условий проживания в правовых спорах.",
        ],
      },
      {
        gaSwiperText: "aparts_management",
        gaServiceText: "uvedomleniya",
        swiperText: "Управление домом и безопасность",
        title: "Уведомления о доме: ремонты, кап.ремонты, отключения воды",
        image: sesyriti2,
        modalTitle: "Уведомления о доме",
        modalText: [
          "Получайте всегда актуальную информацию о состоянии вашего дома и предстоящих изменениях.",
          "Вы будете заранее знать об отключении воды, ремонтных работах и сможете планировать своё время.",
        ],
      },
      {
        gaSwiperText: "aparts_management",
        gaServiceText: "zayvka_uk",
        swiperText: "Управление домом и безопасность",
        title: "Заявка в управляющую компанию",
        image: sesyriti3,
        modalTitle: "Заявки в УК",
        modalText: [
          "Подавайте заявки через наш сервис без личного визита в офис управляющей компании.",
        ],
      },
      {
        gaSwiperText: "aparts_management",
        gaServiceText: "strahovaya_podpiska",
        swiperText: "Управление домом и безопасность",
        title: "Страховая подписка: пожары, наводнения",
        image: sesyriti4,
        modalTitle: "Страховая подписка",
        modalText: [
          "Подписка на страхование вашего имущества от непредвиденных обстоятельств. В случае наступления страхового случая вы получите компенсацию, которая поможет восстановить утраченное.",
        ],
      },
      {
        gaSwiperText: "aparts_management",
        gaServiceText: "strahovanie_nedvizhimosti",
        swiperText: "Управление домом и безопасность",
        title: "Страхование недвижимости",
        image: sesyriti5,
        modalTitle: "Страхование недвижимости",
        modalText: [
          "Спокойствие и уверенность в безопасности вашего имущества — с нашим страховым полисом. В случае повреждения или утраты недвижимости вы получите возмещение ущерба.",
        ],
      },
      {
        gaSwiperText: "aparts_management",
        gaServiceText: "zashita_ot_moshennikov",
        swiperText: "Управление домом и безопасность",
        title: "Защита от мошеннических действий с недвижимостью",
        image: sesyriti6,
        modalTitle: "Защита от мошенников",
        modalText: [
          "Предлагаем комплекс мер по защите вашей недвижимости от мошенников. В это входит юридическая проверка документов, мониторинг регистрационных действий и другие превентивные меры.",
        ],
      },
    ],
  },
];
