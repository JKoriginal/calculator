import Head from "next/head";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculator App</title>
      </Head>
      <Calculator />
    </div>
  );
}
