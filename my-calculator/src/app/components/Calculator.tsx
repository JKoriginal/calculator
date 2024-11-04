import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value: string) => {
    // If there's a result and the user inputs an operator, start from that result
    if (result && /[\+\-\*\/]/.test(value)) {
      setInput(result + value);
      setResult(""); // Clear result to avoid confusion on the next operation
    } else if (result && /[\d\.]/.test(value)) {
      // If user starts a new number input after result, reset input
      setInput(value);
      setResult("");
    } else {
      // Regular input continuation
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input).toString();
      setResult(calculatedResult);
      setInput(calculatedResult); // Allow chaining further calculations
    } catch (error) {
      setResult("Error");
      setInput(""); // Reset input if there's an error
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const handleUndo = () => {
    if (input.length > 0) {
      setInput(input.slice(0, -1));
    } else if (result) {
      setInput(result.slice(0, -1));
      setResult("");
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{input || result || "0"}</div>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={clearInput}
        >
          AC
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={() => handleInput("(")}
        >
          (
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={() => handleInput(")")}
        >
          )
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={() => handleInput("/")}
        >
          /
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={() => handleInput("*")}
        >
          *
        </button>
        <button className={styles.button} onClick={() => handleInput("7")}>
          7
        </button>
        <button className={styles.button} onClick={() => handleInput("8")}>
          8
        </button>
        <button className={styles.button} onClick={() => handleInput("9")}>
          9
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={() => handleInput("-")}
        >
          -
        </button>
        <button className={styles.button} onClick={() => handleInput("4")}>
          4
        </button>
        <button className={styles.button} onClick={() => handleInput("5")}>
          5
        </button>
        <button className={styles.button} onClick={() => handleInput("6")}>
          6
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={() => handleInput("+")}
        >
          +
        </button>
        <button className={styles.button} onClick={() => handleInput("1")}>
          1
        </button>
        <button className={styles.button} onClick={() => handleInput("2")}>
          2
        </button>
        <button className={styles.button} onClick={() => handleInput("3")}>
          3
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={calculateResult}
        >
          =
        </button>
        <button className={styles.button} onClick={() => handleInput(".")}>
          .
        </button>
        <button className={styles.button} onClick={() => handleInput("0")}>
          0
        </button>
        <button
          className={`${styles.button} ${styles.functionButton}`}
          onClick={handleUndo}
        >
          <span className={styles.undoIcon}></span>
        </button>
      </div>
    </div>
  );
};

export default Calculator;
