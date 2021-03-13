import "./App.css";
import PaypalExpressBtn from "react-paypal-express-checkout";
import whaley from "./imgs/1.JPG";
import sandbox from "./imgs/2.JPG";
import nick from "./imgs/3.JPG";
import alice from "./imgs/4.JPG";
import bob from "./imgs/5.JPG";
import no6 from "./imgs/6.JPG";
import cig from "./imgs/7.jpg";
import color from "./imgs/10.jpg";
import mind from "./imgs/11.jpg";
import abstract from "./imgs/12.jpg";
import dark from "./imgs/13.jpg";
// import crazy from "./imgs/crazy.JPG";
import david from "./imgs/david.JPG";
import sit from "./imgs/sit.JPG";
import meh from "./imgs/meh.JPG";

function App() {
  const client = {
    sandbox:
      "ARLbt9djNfVY59oiM4V-ZlXwQAnOIaKAy9pyTo-1ADBeowVf6cQ48dGpu5E2FU2JpHasiixPUwl08Hp3",
    production: "YOUR-PRODUCTION-APP-ID",
  };

  const paintings = [
    // {
    //   title: "I'm crazy today.",
    //   year: 2021,
    //   price: 250.0,
    //   img: crazy,
    // },
    {
      title: "David.",
      year: 2020,
      price: 550.0,
      img: david,
    },
    {
      title: "Sit on it.",
      year: 2020,
      price: 150.0,
      img: sit,
    },
    {
      title: "Meh.",
      year: 2021,
      price: 50.0,
      img: meh,
    },
    {
      title: "Whaley.",
      year: 2019,
      price: 50.0,
      img: whaley,
    },
    {
      title: "Sandbox.",
      year: 2019,
      price: 90.0,
      img: sandbox,
    },
    {
      title: "Nick.",
      year: 2019,
      price: 150.0,
      img: nick,
    },
    {
      title: "Alice was here.",
      year: 2019,
      price: 350.0,
      img: alice,
    },
    {
      title: "Bob was here.",
      year: 2019,
      price: 550.0,
      img: bob,
    },
    {
      title: "No. 6",
      year: 2019,
      price: 75.0,
      img: no6,
    },
    {
      title: "Broken smoke.",
      year: 2019,
      price: 50.0,
      img: cig,
    },
    {
      title: "Color study.",
      year: 2019,
      price: 50.0,
      img: color,
    },
    {
      title: "From my mind.",
      year: 2019,
      price: 50.0,
      img: mind,
    },
    {
      title: "Face abstraction.",
      year: 2019,
      price: 50.0,
      img: abstract,
    },
    {
      title: "Dark forest.",
      year: 2019,
      price: 50.0,
      img: dark,
    },
  ];

  return (
    <div className="App">
      <h1>taNr leMn.</h1>
      <p>fine artist</p>
      {paintings.map((painting) => {
        return (
          <div>
            <div className="painting">
              <img alt={`${painting.title} painting`} src={painting.img} />
            </div>
            <PaypalExpressBtn
              env="sandbox"
              client={client}
              currency={"USD"}
              total={painting.price}
              shipping={2}
              style={{
                size: "responsive",
                shape: "rect",
                color: "black",
                label: "buynow",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
