import React, { useState, useEffect } from "react";
import axios from "axios";

function decodeHTMLEntities(text: any) {
  const parser = new DOMParser();
  const decodedHTML = parser.parseFromString(
    `<!doctype html><body>${text}`,
    "text/html"
  ).body.textContent;
  return decodedHTML;
}

const TextPlaceholder = () => {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=boolean")
      .then((response) => {
        const data = response.data;
        // Mengambil nilai "question" dari data respons API
        const questionFromAPI = data.results[0].question;
        setQuestion(decodeHTMLEntities(questionFromAPI));
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data dari API:", error);
      });
  }, []);

  return (
    <article className="ring-4 ring-white bg-slate-100 absolute top-20 start-1/4 box-border h-72 w-2/4 shadow-lg shadow-green-800 rounded-2xl">
      <br />
      <h1 className="text-center text-xl font-bold text-slate-950">Soal</h1>
      <br />
      <p className="px-2 text-lg font-sans font-semibold text-center text-slate-950">
        {question}
      </p>
    </article>
  );
};

export default TextPlaceholder;
