import React from "react";

interface ResultProps {
  words: string[];
  userInputText: string;
  onReturn: any;
}

const Results: React.FC<ResultProps> = (props) => {
  console.log(props.userInputText);
  console.log(props.words);

  const displyResultCards = () => {
    return props.words?.map((element, index) => {
      return (
        <span
          key={index}
          className="flex bg-slate-50 font-bold text-xl  items-center justify-center h-28 w-2/5 rounded-md shadow-md shadow-slate-500 m-3 select-none"
        >
          {element}
        </span>
      );
    });
  };

  return (
    <>
      <p className="flex bg-red-600 font-bold text-xl  justify-center w-full h-1/6 rounded-md shadow-md shadow-slate-500 m-2 text-white">
        {props.userInputText}
      </p>
      <div className="flex flex-row flex-wrap bg-blue-300 font-bold text-xl items-center justify-center w-full mt-5">
        {displyResultCards()}
      </div>
      <div className="flex flex-col items-center  w-full   mt-10">
        <button className=" bg-slate-50 opacity-60 font-bold text-xl  w-full h-1/6 rounded-md shadow-md shadow-slate-500 m-2 ">
          Example Sentence (comming soon)
        </button>
        <button
          className=" bg-slate-50 font-bold text-xl  w-full h-1/6 rounded-md shadow-md shadow-slate-500 m-2 "
          onClick={props.onReturn}
        >
          Return
        </button>
      </div>
    </>
  );
};

export default Results;
