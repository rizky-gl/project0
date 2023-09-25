"use client";

import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button>{count}</button>
    </>
  );
}

export default Button;
