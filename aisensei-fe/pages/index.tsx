import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState("");
  const [words, setWords] = useState([]);
  const [userInputText, setUserInputText] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Value = ${userInput}`);
    fetch(
      `https://0sox7ioyk4.execute-api.us-east-1.amazonaws.com/prod/generate_response?prompt=${userInput}`
    )
      .then((res) => res.json())
      .then((res) => {
        setUserInputText(userInput);
        setWords(res[`${userInput}`]);
      });
  };

  return (
    <div className="flex flex-col items-center w-screen">
      <h1 className="text-3xl font-bold underline">AiSensei</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <h2>Please Input a word to translate to japanese.</h2>
        <input
          onChange={(e) => setUserInput(e.currentTarget.value)}
          value={userInput}
          className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type="text"
          required
          placeholder="Car"
        />
        <button className=" bg-orange-400">Submit</button>
      </form>
      <p>
        {userInputText}: {words.join(" ,")}
      </p>
    </div>
  );
};

export default Home;
