"use client";
import { useState } from "react";

export default function Maze() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <main className="prose py-10">
      <h1>Hello!</h1>
      <p>
        Hi!<br />Enter the answer you guess!<br />Lions are barking!<br />Lords! Hurry up!!<br />Or you will lose your life!<br />↓
      </p>

      <div className="mt-6">
        <label htmlFor="answer" className="block mb-2 font-medium">
          答えを入力してください
        </label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="ここに入力"
          className="border rounded px-3 py-2 w-full max-w-md"
        />

        <div className="mt-3">
          <button
            type="button"
            onClick={() => setSubmitted(answer)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            送信
          </button>
        </div>

        {submitted !== null && (
          <p className="mt-4">
            入力された答え: <strong>{submitted}</strong>
          </p>
        )}
      </div>
    </main>
  );
}