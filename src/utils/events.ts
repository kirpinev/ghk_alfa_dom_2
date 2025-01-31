declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

interface Payload {
  [key: string]: string;
}

export const sendDataToGAServices = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbwaH-p5vCt36lIyEOZPOPm9lliyW3LN-xPcoduAOJlIVg_m8bP-O8_o4nCwWy8KLstSVg/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          ...payload,
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};

export const sendDataToGAServicesWithContacts = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      "https://script.google.com/macros/s/AKfycbzVOyE5prKXsH101lYfdWuaSWqBdSaAaFggi1_ni9STNTqFUe8j2V7SVWT_RZW3Dnk2hw/exec",
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify({
          date,
          ...payload,
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      },
    );
  } catch (error) {
    console.error("Error!", error);
  }
};
