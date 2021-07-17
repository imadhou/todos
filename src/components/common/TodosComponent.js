import React, { useContext } from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL} from '../../graphql/queries';
import TodoComponent from './TodoComponent';
import TodoContext from '../../context/TodoContext';
/** @jsx jsx */
import {css, jsx} from '@emotion/react';

function TodosComponent(){

    const todo = useContext(TodoContext);
    const {loading, error, data} = useQuery(GET_ALL, {variables:{
        
        types: todo.todo.types, 
        order: todo.todo.order, 
        isDone: todo.todo.isDone
    }});
    

    if (loading) return (<div>Loading ....</div>); 

    if(error) return (<div>Error</div>); 
    
    if (data){
        return(
            <div css={css`display: grid;
                        grid-template-columns: 1fr 1fr 1fr; 
                        border: outset pink;
                        outline: solid skyblue;
                        margin: 1em`}>
                {data.getTodoList.map(todo=>{ return<TodoComponent key={todo.id} {...todo}/>})} 
            </div>
        )
    }
}

export default TodosComponent;