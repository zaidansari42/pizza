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
      {pizzaData.map((pizza, index) => (
        <Menu data={pizza} key={index} />
      ))}
    </main>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}

function Menu({ data }) {
  return (
    <>
      <img src="pizzas/margherita.jpg" alt="pizza" />
      <h3>{data.name}</h3>
      <p>{data.ingredients}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
