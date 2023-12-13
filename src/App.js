import "./index.css";
import DollarIconSVG from "./iconDollar.svg";
import IconPerson from "./icon-person.svg";

export default function App() {
  return (
    <main className="container">
      <CustomTip />
      <AmountPay />
    </main>
  );
}

function CustomTip() {
  return (
    <section className="billInformation">
      <Bill />
    </section>
  );
}

function Bill() {
  return (
    <>
      <div>
        <h5>Bill</h5>
        <span className="icon-wrapper">
          {" "}
          <img src={DollarIconSVG} alt="Dollar Icon" />
        </span>

        <input type="text" className="bill_inputs" />
      </div>

      <div>
        <h5>Select tip %</h5>
        <ul>
          {["5%", "10%", "15%", "20%", "25%"].map((value) => (
            <li className="buttons_percentages">{value}</li>
          ))}
          <input type="text" className="buttons_percentages" />
        </ul>
      </div>
      <div>
        <h5>Number of people</h5>
        <span className="icon-wrapper">
          {" "}
          <img src={IconPerson} alt="Dollar Icon" />
        </span>
        <input type="text" className="bill_inputs" />
      </div>
    </>
  );
}

function AmountPay() {
  return (
    <section className="totalInformation">
      <TotalAmount />
    </section>
  );
}

function TotalAmount() {
  return (
    <>
      <div className="pay_information">
        <h6>Tip Amount</h6>
        <span className="price">$ 30.6</span>
      </div>
      <div className="pay_information">
        <h6>Total</h6>
        <span className="price">$ 30</span>
      </div>

      <button className="reset_button">Reset</button>
    </>
  );
}
