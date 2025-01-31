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
      "https://script.google.com/macros/s/AKfycbzW7A-CC5oVgu-jOs6uuS2S4L0ZZcjKYI-CxOPVAeQzbzePCAnqjL66rXiwzIALAo6LVQ/exec",
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
      "https://script.google.com/macros/s/AKfycbxo--Iy6OIzylBc-p5dvP3evVvu6fZDrY1zBKK6x9oC2LKpVK47CwOrbFmyD1R0jrg_/exec",
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
