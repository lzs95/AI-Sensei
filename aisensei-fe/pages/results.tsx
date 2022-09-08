import React from "react";

interface ResultProps {
  [words: string]: any;
  userInputText: string;
}

export const Results: React.FC<ResultProps> = (props) => {
  console.log(props.userInputText);
  console.log(props.words);
  return (
    <div>
      {props.userInputText} {props.words.join(" ,")}
    </div>
  );
};
