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

  function handleInputValue(e) {
    const value = e.target.value;

    // Allow only numeric values and an optional dot
    const sanitizedValue = value.replace(/[^0-9.]/g, "");

    setInputValue(Number(sanitizedValue));
  }

  function resetAllValues() {
    setInputValue(0);
    setTip(0);
  }

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
      <AmountPay
        resetAllValues={resetAllValues}
        tipAmount={tip}
        totalPayment={totalPayment}
      />
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
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  function handleNumberOfPeople(e) {
    const value = e.target.value;

    // Allow only numeric values and an optional dot
    const sanitizedValue = value.replace(/[^0-9.]/g, "");
    setNumberOfPeople(sanitizedValue);
  }

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
          <input
            type="text"
            className="buttons_percentages"
            onChange={(e) => onTip(e.target.value)}
            pattern="[0-9]*[.]?[0-9]*"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9.]/g, "");
            }}
          />
        </ul>
      </div>
      <div>
        <h5>Number of people</h5>
        <span className="icon-wrapper">
          {" "}
          <img src={IconPerson} alt="Dollar Icon" />
        </span>
        <input
          type="text"
          className="bill_inputs"
          value={numberOfPeople}
          onChange={handleNumberOfPeople}
        />
      </div>
    </>
  );
}

function AmountPay({ resetAllValues, totalPayment, tipAmount }) {
  return (
    <section className="totalInformation">
      <TotalAmount
        resetAllValues={resetAllValues}
        tipAmount={tipAmount}
        totalPayment={totalPayment}
      />
    </section>
  );
}

function TotalAmount({ resetAllValues, tipAmount, totalPayment }) {
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

      <button className="reset_button" onClick={resetAllValues}>
        Reset
      </button>
    </>
  );
}
