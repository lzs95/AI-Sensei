import React from "react";

interface FormProps {
  userInput: string;
  setUserInput: any;
  handleSubmit: any;
  loading: boolean;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div className="flex flex-col">
      <h2>Please Input a word to translate to japanese.</h2>
      <input
        onChange={(e) => props.setUserInput(e.currentTarget.value)}
        value={props.userInput}
        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="text"
        placeholder="Car"
        required
      />
      <button
        // !props.userInput
        disabled={!props.userInput || props.loading}
        className=" bg-orange-400 disabled:opacity-75 "
        onClick={props.handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
