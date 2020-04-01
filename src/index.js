import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import faker from "faker";
import * as serviceWorker from "./serviceWorker";

const generateUsers = () => {
  return Array(10)
    .fill(null)
    .map(() => ({
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
      country: faker.address.country(),
      countryCode: faker.address.countryCode()
    }));
};

ReactDOM.render(
  <React.StrictMode>
    <App users={generateUsers()} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
