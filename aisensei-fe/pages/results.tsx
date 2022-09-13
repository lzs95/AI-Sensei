import React from "react";

interface ResultProps {
  words: string[];
  userInputText: string;
  onReturn: any;
}

export const Results: React.FC<ResultProps> = (props) => {
  console.log(props.userInputText);
  console.log(props.words);

  return (
    <div className="flex flex-col items-center">
      <p>{props.userInputText}:</p>
      <p>{props.words.join(" ,")}</p>
      <button className=" bg-orange-600 w-52" onClick={props.onReturn}>
        back
      </button>
    </div>
  );
};
