import React from "react";

interface FormProps {
  userInput: string;
  setUserInput: any;
  handleSubmit: any;
  loading: boolean;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-white flex justify-center ">
        Please Input a word to translate to japanese.
      </h2>
      <div className="flex justify-center flex-row mt-4 shadow-lg shadow-red-700 rounded-md">
        <input
          onChange={(e) => props.setUserInput(e.currentTarget.value)}
          value={props.userInput}
          className=" px-3 py-2 w-4/5  bg-white border border-slate-300  text-sm  placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-l-md"
          type="text"
          placeholder="Car"
          required
        />
        <button
          // !props.userInput
          disabled={!props.userInput || props.loading}
          className=" w-1/5 h-auto bg-slate-50 disabled:opacity-75 rounded-r-md"
          onClick={props.handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
