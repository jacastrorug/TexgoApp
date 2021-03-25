const API_FUNCTIONS = "/.netlify/functions";

export const sendContactMail = (user) => {
  return fetch(`${API_FUNCTIONS}/send-contact-mail`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ user: user }),
  });
};

export const sendQuoteMail = (quote) => {
  return fetch(`${API_FUNCTIONS}/send-quote-mail`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ quote: quote }),
  });
};
