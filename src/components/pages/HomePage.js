import React, {useState} from "react";
import TodosComponent from "../common/TodosComponent";
import TodoContext from "../../context/TodoContext";
import Form from "../common/Form";


function HomePage(){
const [todo, setTodo] = useState({});
  return (
     <div>
        <TodoContext.Provider value={{todo, setTodo}}>
            <Form />
            <TodosComponent {...todo}/>
        </TodoContext.Provider>
      </div>
  );
}

export default HomePage;