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
          className="flex bg-slate-100 font-bold text-xl  items-center justify-center h-12 w-12 rounded-md shadow-md shadow-slate-500 m-2 select-none"
        >
          {element}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-full ">
      {/* <p>{props.words.join(" ,")}</p> */}
      <div className=" flex flex-row flex-wrap w-96  bg-slate-200  justify-center">
        <p className="flex bg-red-600 font-bold text-xl  items-center justify-center w-full h-1/6 rounded-md shadow-md shadow-slate-500 m-2 text-white">
          {props.userInputText}
        </p>
        <div className="flex flex-row flex-wrap bg-blue-300 font-bold text-xl items-center justify-center w-full ">
          {displyResultCards()}
        </div>
        <button className=" bg-orange-600 w-52" onClick={props.onReturn}>
          back
        </button>
      </div>
    </div>
  );
};

export default Results;
