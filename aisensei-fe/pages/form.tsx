import React from "react";

interface FormProps {
  userInput: string;
  setUserInput: any;
  handleSubmit: any;
  loading: boolean;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <>
      <h2 className="text-white text-center text-lg ">
        Enter a word for translation
      </h2>

      <div className="flex justify-center flex-row mt-4 shadow-md shadow-red-900 rounded-md">
        <input
          onChange={(e) => props.setUserInput(e.currentTarget.value)}
          value={props.userInput}
          className=" px-2 py-2 w-4/5 h-auto  bg-white border border-slate-300  text-sm  placeholder-slate-400
    focus:outline-none focus:border-rose-200 focus:ring-2 focus:ring-rose-500 rounded-l-md"
          type="text"
          placeholder="Train"
          required
        />
        <button
          disabled={!props.userInput || props.loading}
          className=" w-1/5 h-auto bg-slate-50 disabled:opacity-75 rounded-r-md"
          onClick={props.handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
