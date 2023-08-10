import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 0) setStep((cur) => cur - 1);
  }

  function handleNext() {
    if (step < 2) setStep((cur) => cur + 1);
  }

  function handleToggle() {
    setIsOpen((cur) => !cur);
  }

  return (
    <>
      <button className="close" onClick={handleToggle}>
        {isOpen ? "✕ close" : "✓ open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            step {step}: {messages[step]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
