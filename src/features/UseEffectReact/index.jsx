import React, { useEffect, useRef, useState } from "react";

// use useEffect () with fake chat app
const lessons = [
  {
    id: 1,
    name: "Reactjs la gi? tai sao nen hoc reactjs",
  },
  {
    id: 2,
    name: "SPA/MPA La gi ?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];
// const UseEffectReact = () => {
//   const [lessonId, setLessonId] = useState(1);

//   useEffect(() => {
//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     };
//     window.addEventListener(`lesson-${lessonId}`, handleComment);

//     // use clean function
//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     };
//   }, [lessonId]);
//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li
//             key={lesson.id}
//             style={{ color: lessonId === lesson.id ? "red" : "#333" }}
//             onClick={() => setLessonId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default UseEffectReact;

// *********useRef*********
const UseRefReact = () => {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log("start=>", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop->", timerId.current);
  };
  console.log(count, prevCount.current);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};
export default UseRefReact;
