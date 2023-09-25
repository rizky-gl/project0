"use client";

//todo: pakai tailwind css
// todo: ambil API dari open quizes!

import React from "react";
import Button from "./components/button";
import TextPlaceholder from "./components/text_placeholder";
import SideBar from "./components/side_bar";
import Example from "./components/PopOver";

export default function Home() {
  return (
    <main>
      <SideBar />
      <Example />
      <TextPlaceholder />
      <Button />
    </main>
  );
}
