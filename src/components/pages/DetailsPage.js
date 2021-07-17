import React from "react";
import Details from "../common/Details";
import {
    useParams, useHistory
  } from "react-router-dom";
/** @jsx jsx */
import {css, jsx} from '@emotion/react';

function DetailsPage() {

    let {id} = useParams();
    let history = useHistory();
    return(
        <div>
            <h1 css={css`
            background: rgba(185, 144, 218, 0.3);
            position: absolute;
            top: 5%;
            left: 35%;
            `}>Détails de la todo</h1>
            <button css={css`
            background: rgba(241, 7, 38, 0.3);
            font-size: 1.5em;
            position: absolute;
            top: 24%;
            left: 42%;
            
            `} onClick={()=>history.goBack()}>Accuil</button>
            <Details todoId={id}/>
        </div>
    )
    
}

export default DetailsPage;