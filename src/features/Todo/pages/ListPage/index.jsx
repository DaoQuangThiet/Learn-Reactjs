import React from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";
import { useState } from "react";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = React.useState(initTodoList);
  const handleTodoClick = (todo, index) => {
    // clone current array to the new one(khi lamf viec vs object, array thi can clone ra moojt mang moi)
    const newToDoList = [...todoList]; //current toDoList
    //toggle state
    newToDoList[index] = {
      ...newToDoList[index],
      status: newToDoList[index].status === "new" ? "completed" : "new",
    };
    // update to list
    setTodoList(newToDoList);
  };
  const [filterStatus, setFilterStatus] = useState("all");
  const handleShowAll = () => {
    setFilterStatus("all");
  };
  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };
  const handleShowNew = () => {
    setFilterStatus("new");
  };
  const renderToDoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  return (
    <div>
      <h3>Todo Form</h3>
      <h3>Component TodoList</h3>
      <TodoList todoList={renderToDoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
