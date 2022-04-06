import fetchFunction from "./fetchFunction";

//curently not working, using this service method instad the api call


class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  sendMail(emailData) {
    return fetchFunction(`${this._baseUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData)
    });
  }
}
const mailApi = new Api({
  baseUrl: "https://api.emailjs.com/api/v1.0/email/send"
});

export default mailApi




