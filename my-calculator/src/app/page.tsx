"use client";
import React from "react";
import dynamic from "next/dynamic";
import css from "./components/Calculator.module.css";

// Dynamically import the Calculator component with SSR disabled
const Calculator = dynamic(() => import("./components/Calculator"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className={css.page}>
      <header className={css.header}>My Calculator - 1010</header>
      <Calculator />
    </div>
  );
};

export default Page;
