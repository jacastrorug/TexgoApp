const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.APIKEY,
  domain: process.env.DOMAIN,
});

const mailData = {
  from:
    "Texgo Transport Contact <postmaster@sandbox5d61013d7fcd40d1a684457ccdd0a29b.mailgun.org>",
  to: "juliancastroruge@gmail.com",
  subject: "New contact message from Texgo Transport",
  template: "variable-2020-12-22.071132",
  //   "h:X-Mailgun-Variables": JSON.stringify({
  //     user: {
  //       name: "Julian",
  //       email: "julian@gmail.com",
  //       phone: "6843543",
  //       address: "CLL 79 A 79",
  //       message: "Hi i want to know about.....",
  //     },
  //   }),
};

exports.handler = async function (request) {
  const body = request.body;
  mailData["h:X-Mailgun-Variables"] = body;

  try {
    const response = await mg.messages().send(mailData);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    return {
      statusCode: 409,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
