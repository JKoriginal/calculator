"use client";
import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleInput = (value: string) => {
    if (/[+\-*/]$/g.test(input) && /[+\-*/]/g.test(value)) {
      setInput(input.replace(/[+\-*/]$/g, value));
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{result || input || "0"}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => clearInput()}>
          AC
        </button>
        <button className={styles.button} onClick={() => handleInput("/")}>
          /
        </button>
        <button className={styles.button} onClick={() => handleInput("*")}>
          *
        </button>
        <button className={styles.button} onClick={() => handleInput("-")}>
          -
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
        <button className={styles.button} onClick={() => handleInput("+")}>
          +
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
        <button className={styles.button} onClick={() => handleInput("1")}>
          1
        </button>
        <button className={styles.button} onClick={() => handleInput("2")}>
          2
        </button>
        <button className={styles.button} onClick={() => handleInput("3")}>
          3
        </button>
        <button className={styles.button} onClick={calculateResult}>
          =
        </button>
        <button className={styles.button} onClick={() => handleInput("0")}>
          0
        </button>
        <button className={styles.button} onClick={() => handleInput(".")}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
