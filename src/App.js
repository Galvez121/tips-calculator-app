import "./index.css";
import DollarIconSVG from "./iconDollar.svg";
import IconPerson from "./icon-person.svg";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  // Tip
  const [tip, setTip] = useState(0);

  // Total
  let totalPayment = tip + inputValue;

  const handleInputValue = (e) => {
    const value = e.target.value;

    // Allow only numeric values and an optional dot
    const sanitizedValue = value.replace(/[^0-9.]/g, "");

    setInputValue(Number(sanitizedValue));
  };

  function handleTip(percentage) {
    setTip((inputValue * percentage) / 100);
  }

  return (
    <main className="container">
      <CustomTip
        inputValue={inputValue}
        onInputValue={handleInputValue}
        onTip={handleTip}
      />
      <AmountPay tipAmount={tip} totalPayment={totalPayment} />
    </main>
  );
}

function CustomTip({ inputValue, onInputValue, onTip }) {
  return (
    <section className="billInformation">
      <Bill inputValue={inputValue} onInputValue={onInputValue} onTip={onTip} />
    </section>
  );
}

function Bill({ inputValue, onInputValue, onTip }) {
  return (
    <>
      <div>
        <h5>Bill</h5>
        <span className="icon-wrapper">
          {" "}
          <img src={DollarIconSVG} alt="Dollar Icon" />
        </span>

        <input
          type="text"
          value={inputValue}
          onChange={onInputValue}
          className="bill_inputs"
        />
      </div>

      <div>
        <h5>Select tip %</h5>
        <ul>
          {[5, 10, 15, 20, 25].map((value) => (
            <li className="buttons_percentages" onClick={() => onTip(value)}>
              {value}%
            </li>
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

function AmountPay({ tipAmount, totalPayment }) {
  return (
    <section className="totalInformation">
      <TotalAmount tipAmount={tipAmount} totalPayment={totalPayment} />
    </section>
  );
}

function TotalAmount({ tipAmount, totalPayment }) {
  return (
    <>
      <div className="pay_information">
        <h6>Tip Amount</h6>
        <span className="price">$ {tipAmount}</span>
      </div>
      <div className="pay_information">
        <h6>Total</h6>
        <span className="price">$ {totalPayment}</span>
      </div>

      <button className="reset_button">Reset</button>
    </>
  );
}
