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
  const api = process.env.AWS_API;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!userInput || userInput.length > 20) {
      return setErr(true);
    } else if (words.length <= 1 && words[0] === "Null") {
      return setErr(true);
    } else {
      await fetch(
        // AWS API
        `https://0sox7ioyk4.execute-api.us-east-1.amazonaws.com/prod/generate_response?prompt=${userInput}`
      )
        .then((res) => res.json())
        .then((res) => {
          setUserInputText(userInput);
          setWords(res[`${userInput}`]);
          setShowResult(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setErr(false);
        });
      setErr(false);
    }
  };

  const onReturn = () => {
    setShowResult(false);
    setUserInput("");
  };

  return (
    <div className="flex h-screen   bg-slate-50 h">
      <div className="max-w-md w-96 m-auto">
        <div className="flex flex-col bg-rose-700 shadow-lg shadow-slate-400 rounded-lg h-full p-4 ">
          <div className="flex flex-col my-5 items-center  w-full ">
            <h1 className=" w-36 h-24 mb-6 -mt-5">
              <svg
                className=" fill-white filter drop-shadow-lg"
                version="1.1"
                viewBox="0 0 700 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m390.25 273c3.8672 2.8984 4.6484 8.3828 1.75 12.25-9.9141 13.219-25.477 21-42 21s-32.086-7.7812-42-21c-2.8984-3.8672-2.1172-9.3516 1.75-12.25s9.3516-2.1172 12.25 1.75c6.6094 8.8125 16.984 14 28 14s21.391-5.1875 28-14c2.9492-3.7773 8.3594-4.5508 12.25-1.75zm-92.75-71.75c-4.832 0-8.75 3.918-8.75 8.75v17.5c0 4.832 3.918 8.75 8.75 8.75s8.75-3.918 8.75-8.75v-17.5c0-2.3203-0.92188-4.5469-2.5625-6.1875s-3.8672-2.5625-6.1875-2.5625zm105 0c-4.832 0-8.75 3.918-8.75 8.75v17.5c0 4.832 3.918 8.75 8.75 8.75s8.75-3.918 8.75-8.75v-17.5c0-2.3203-0.92188-4.5469-2.5625-6.1875s-3.8672-2.5625-6.1875-2.5625zm183.75 8.75v52.5c0 11.602-4.6094 22.73-12.812 30.938-8.207 8.2031-19.336 12.812-30.938 12.812h-26.25v26.25c0 11.602-4.6094 22.73-12.812 30.938-8.207 8.2031-19.336 12.812-30.938 12.812h-38.676v23.625h38.676c11.59 0.046875 22.691 4.6719 30.887 12.863 8.1914 8.1953 12.816 19.297 12.863 30.887v63.875c0 4.832-3.918 8.75-8.75 8.75s-8.75-3.918-8.75-8.75v-63.875c0-6.9609-2.7656-13.641-7.6875-18.562s-11.602-7.6875-18.562-7.6875h-245c-6.9609 0-13.641 2.7656-18.562 7.6875s-7.6875 11.602-7.6875 18.562v63.875c0 4.832-3.918 8.75-8.75 8.75s-8.75-3.918-8.75-8.75v-63.875c0.046875-11.59 4.6719-22.691 12.863-30.887 8.1953-8.1914 19.297-12.816 30.887-12.863h38.676v-23.625h-38.676c-11.602 0-22.73-4.6094-30.938-12.812-8.2031-8.207-12.812-19.336-12.812-30.938v-26.25h-26.25c-11.602 0-22.73-4.6094-30.938-12.812-8.2031-8.207-12.812-19.336-12.812-30.938v-52.5c-0.003906-10.086 3.4805-19.863 9.8594-27.676s15.258-13.184 25.141-15.199v-112.88c0-4.832 3.918-8.75 8.75-8.75s8.75 3.918 8.75 8.75v112h17.5v-8.75c0-11.602 4.6094-22.73 12.812-30.938 8.207-8.2031 19.336-12.812 30.938-12.812h245c11.602 0 22.73 4.6094 30.938 12.812 8.2031 8.207 12.812 19.336 12.812 30.938v8.75h17.5v-112c0-4.832 3.918-8.75 8.75-8.75s8.75 3.918 8.75 8.75v112.88c9.8828 2.0156 18.762 7.3867 25.141 15.199s9.8633 17.59 9.8594 27.676zm-402.5 78.75v-105h-26.25c-6.9609 0-13.641 2.7656-18.562 7.6875s-7.6875 11.602-7.6875 18.562v52.5c0 6.9609 2.7656 13.641 7.6875 18.562s11.602 7.6875 18.562 7.6875zm232.57 87.5h-132.65v23.625h132.65zm82.426-78.75v-140c0-6.9609-2.7656-13.641-7.6875-18.562s-11.602-7.6875-18.562-7.6875h-217v193.55c0 2.3203-0.92188 4.5469-2.5625 6.1875s-3.8672 2.5625-6.1875 2.5625c-4.832 0-8.75-3.918-8.75-8.75v-193.55h-10.5c-6.9609 0-13.641 2.7656-18.562 7.6875s-7.6875 11.602-7.6875 18.562v175c0 6.9609 2.7656 13.641 7.6875 18.562s11.602 7.6875 18.562 7.6875h217v-197.75c0-4.832 3.918-8.75 8.75-8.75 2.3203 0 4.5469 0.92188 6.1875 2.5625s2.5625 3.8672 2.5625 6.1875v197.75h10.5c6.9609 0 13.641-2.7656 18.562-7.6875s7.6875-11.602 7.6875-18.562zm70-87.5c0-6.9609-2.7656-13.641-7.6875-18.562s-11.602-7.6875-18.562-7.6875h-26.25v105h26.25c6.9609 0 13.641-2.7656 18.562-7.6875s7.6875-11.602 7.6875-18.562zm-311.15 256.9h64.051-0.003906c4.7969-0.089844 8.6602-3.9531 8.75-8.75 0-2.3203-0.92188-4.543-2.5625-6.1875-1.6406-1.6406-3.8672-2.5625-6.1875-2.5625h-64.047c-4.8359 0-8.75 3.918-8.75 8.75 0 2.3203 0.92188 4.5469 2.5625 6.1875 1.6406 1.6406 3.8672 2.5625 6.1875 2.5625zm129.32 31.852h-129.32c-4.8359 0-8.75 3.918-8.75 8.75s3.9141 8.75 8.75 8.75h129.32c4.832 0 8.75-3.918 8.75-8.75s-3.918-8.75-8.75-8.75z" />
              </svg>
            </h1>
            <h1 className="text-center text-3xl text-white font-bold">
              AI-SenSei
            </h1>
          </div>

          <div className="flex justify-center flex-col -mt-5 ">
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
