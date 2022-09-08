import React from "react";

interface ResultProps {
  words: string[];
  userInputText: string;
}

export const Results: React.FC<ResultProps> = (props) => {
  console.log(props.userInputText);
  console.log(props.words);
  return (
    <div className="flex flex-col items-center">
      <p>{props.userInputText}:</p>
      <p>{props.words.join(" ,")}</p>
    </div>
  );
};
