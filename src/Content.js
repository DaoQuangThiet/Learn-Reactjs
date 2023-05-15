import React, { useRef } from "react";
import { useReducer } from "react";

// cach dung usereducer
const initialState = {
  job: "",
  jobs: [],
};
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

//3 tao reducer
const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;

    default:
      throw new Error("invalid action");
  }
  return newState;
};

const Content = () => {
  //dung memo tranh re-render component k can thiet , dùng memo thi component phải dung useCallback
  // console.log("re-render");
  const [state, dispatch] = useReducer(reducer, initialState);
  // duoi nay dung destructering
  const { job, jobs } = state;

  //xu ly de khi add tu dong focus vao input
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
// export default React.memo(Content);
export default Content;
