const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.APIKEY,
  domain: process.env.DOMAIN,
});

const mailData = {
  from:
    "Texgo Transport Quote <postmaster@sandbox5d61013d7fcd40d1a684457ccdd0a29b.mailgun.org>",
  to: "juliancastroruge@gmail.com",
  subject: "New quote message from Texgo Transport",
  template: "quote_message",
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
  } catch (error) {
    return {
      statusCode: 409,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
