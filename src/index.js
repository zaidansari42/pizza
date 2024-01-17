import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <ShopName />
      <Main />
      <Footer />
    </div>
  );
}

function ShopName() {
  return (
    <header className="header">
      <h1>Fast Reactive Pizza & CO</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.length > 0 &&
          pizzaData.map((pizza, index) => <Menu {...pizza} key={index} />)}
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <p>We are open 24 x 7. Hit the button below to place an order.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Menu({ photoName, name, ingredients, price }) {
  return (
    <li className="pizza">
      <img
        src={photoName}
        alt={name}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{"$" + price}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
