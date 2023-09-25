import React from "react";
import SmallBox from "./components/small_box";
import BigBox from "./components/big_box";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />

      {/* <Date></Date> */}
      <div>
        <p className="text text-center text-blue-500">Halooo</p>
      </div>
      <div>
        <BigBox brand={"Halooo"} />
      </div>
      <div>
        <SmallBox brand={"True"} />
        <SmallBox brand={"False"} />
      </div>
    </main>
  );
}
