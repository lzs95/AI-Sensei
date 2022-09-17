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
    <div className="flex h-screen  bg-slate-50">
      <div className="max-w-md w-96 m-auto">
        <div className="flex flex-col bg-rose-700 shadow-lg shadow-slate-400 rounded-lg  h-96 p-4">
          <h1 className="text-center bg-slate-100 w-36 h-24">
            This is a logo placeholder
          </h1>
          <h1 className="text-center text-3xl text-white font-bold  mt-2 mb-8">
            AI-SenSei
          </h1>

          <div className="flex justify-center flex-col mt-9">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
