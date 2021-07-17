import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BY_ID } from "../../graphql/queries";
/** @jsx jsx */
import {css, jsx} from '@emotion/react';


function Details(todoId){
    const id = todoId.todoId;
    
    const {loading, error, data} = useQuery(GET_BY_ID, {variables:{"id":id}});

    if(loading) return <div>Loading .....</div>
    if(error) return <div>Error</div>

    if (data) {
        const todo = data.getTodoById;
        console.log(todo)
        return(
            <div css={css`
            align-items: center;
            width:400px;
            height:150px;
            background: rgba(0, 128, 0, 0.3);
            paddin: -25px 0 0 -25px;
            position: absolute;
            top: 30%;
            left: 30%;
            
            `}>
                <ul>
                    <li>Title: {todo.title}</li>
                    <li>Type: {todo.type}</li>
                    <li>Created at: {todo.createdAt}</li>
                    <li>Is Done: {todo.isDone}</li>
                    <li>Text: {todo.text}</li>
                </ul>
            </div>
        )
    }
    
}

export default Details;