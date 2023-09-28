import React, { useReducer } from "react";
import bgimage from "../assets/download.jpeg";
export enum ACTIONS {
  ADD_DIGIT = "add-digit",
  CHOOSE_OPERATION = "choose-operation",
  CLEAR = "clear",
  DELETE_DIGIT = "delete-digit",
  EVALUATE = "evaluate",
}

interface State {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}

interface Action {
  type: ACTIONS;
  payload?: string;
}

const initialState: State = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        operation: payload || "",
        previousOperand: state.currentOperand,
        currentOperand: "",
      };
    case ACTIONS.CLEAR:
      return initialState;
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      const prev = parseFloat(state.previousOperand);
      const current = parseFloat(state.currentOperand);
      let result = 0;
      switch (state.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "÷":
          result = prev / current;
          break;
        default:
          result = current;
      }
      return {
        ...state,
        currentOperand: result.toString(),
        previousOperand: "",
        operation: "",
      };
    default:
      return state;
  }
};

export const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentOperand, previousOperand, operation } = state;

  const handleDigitClick = (digit: string) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: digit });
  };

  const handleOperationClick = (op: string) => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: op });
  };

  const handleClearClick = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const handleDeleteClick = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  };

  const handleEvaluateClick = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="w-screen h-screen flex items-center justify-center text-white">
        <div className="w-4/5 md:w-1/2 lg:w-1/3 h-2/3  flex flex-col gap-1">
          <div className="flex items-center justify-end px-2 py-5 text-lg">
            {previousOperand} {operation}
          </div>
          <div className="flex items-center justify-end px-2 py-9 text-6xl font-bold">
            {currentOperand}
          </div>
          <div className="h-full grid grid-cols-4 gap-1">
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl  col-span-2 justify-center"
              onClick={handleClearClick}
            >
              AC
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={handleDeleteClick}
            >
              DEL
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleOperationClick("÷")}
            >
              ÷
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("1")}
            >
              1
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("2")}
            >
              2
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("3")}
            >
              3
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleOperationClick("*")}
            >
              *
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("4")}
            >
              4
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("5")}
            >
              5
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("6")}
            >
              6
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleOperationClick("+")}
            >
              +
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("7")}
            >
              7
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("8")}
            >
              8
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("9")}
            >
              9
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleOperationClick("-")}
            >
              -
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick(".")}
            >
              .
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl justify-center"
              onClick={() => handleDigitClick("0")}
            >
              0
            </div>
            <div
              className="flex bg-black bg-opacity-50 items-center font-bold text-xl col-span-2 justify-center"
              onClick={handleEvaluateClick}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
