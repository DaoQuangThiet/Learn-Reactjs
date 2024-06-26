{
  /*Xem cac state truoc do */
}
function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("prev state:", prevState);
    console.log("action", action);
    const nextState = reducer(prevState, action);
    console.log("next state:", nextState);
    console.groupEnd();
    return nextState;
  };
}
export default logger;
