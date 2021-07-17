import React, { useState } from "react";
import {
    Route,
    Link
  } from "react-router-dom";
/** @jsx jsx */
import {css, jsx} from '@emotion/react';
import { UPDATE_TODO } from "../../graphql/queries";
import { useMutation } from "@apollo/client";
function TodoComponent(properties){ 

    const [ischecked, setIsChecked] = useState(properties.isDone);
    const [updateTodo] = useMutation(UPDATE_TODO)

    const handleCheck = async (id)=>{
        await updateTodo({variables:{"id":id, "isDone":!ischecked}});
        setIsChecked(!ischecked);
    }

    

    return (
         <div css={css`display: inline;
                background: rgba(0, 128, 0, 0.3);
                margin: 1em
            }`}>
            <div>
                <label> set Done</label>
                <input type="checkbox"  checked={ischecked} onChange={(event)=>{handleCheck(properties.id)}}/>
            </div>

            <ul 
            key={properties.id}>
                <li>Titre: {properties.title}</li>
                <li>Type: {properties.type}</li>
                <li>Date: {properties.createdAt}</li>

            </ul>
            <Route>
                <Link to={"/"+properties.id}>Détails</Link>
            </Route>
        </div>
    )
}

export default TodoComponent;