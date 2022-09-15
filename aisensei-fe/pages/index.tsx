import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import Form from "./form";
import Results from "./results";

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState("");
  const [words, setWords] = useState([]);
  const [userInputText, setUserInputText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(`Value = ${userInput}`);

    if (!userInput || userInput.length > 20) {
      return setErr(true);
    } else {
      fetch(
        // AWS API
        `https://0sox7ioyk4.execute-api.us-east-1.amazonaws.com/prod/generate_response?prompt=${userInput}`
      )
        .then((res) => res.json())
        .then((res) => {
          setUserInputText(userInput);
          setWords(res[`${userInput}`]);
          setShowResult(true);
          setLoading(false);
        });
      setErr(false);
    }
  };

  const onReturn = () => {
    setShowResult(false);
    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <h1 className="text-3xl font-bold underline">AiSensei</h1>
      {!showResult ? (
        <Form
          userInput={userInput}
          setUserInput={setUserInput}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      ) : (
        <Results
          words={words}
          userInputText={userInputText}
          onReturn={onReturn}
        />
      )}
      {err && <p>Error</p>}
    </div>
  );
};

export default Home;
