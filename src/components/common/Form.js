import React, {useState, useContext, useEffect} from "react";
import TodoContext from "../../context/TodoContext";
/** @jsx jsx */
import {css, jsx} from '@emotion/react';
const ts = ["RH", "Tech", "Marketing", "Communication"];

const Form = function() {
    const { setTodo} = useContext(TodoContext);
    

    const [types, setTypes] = useState();
    const [isDone, setIsDone] = useState();
    const [order, setOrder] = useState();
    const [filters, setFilters] = useState(new Array(4).fill(false));
    const [checkBiz, setCheckBiz] = useState(false);

    
    const handleOrder= e=>{
        if(e.target.value === ""){
            setOrder(undefined);
        }else{
            setOrder(e.target.value);
        }  
        
    }

    const handleDone = e=>{
        if (e.target.value === "true") setIsDone(true);
        if (e.target.value === "false") setIsDone(false);
        if(e.target.value === "") setIsDone(undefined);
    }

    const handlefilter = (pos)=>{
        setCheckBiz(false);
        const updated = filters.map((item, index)=>{return index === pos? !item : item});
        setFilters(updated);
        const newTypes = [];
        updated.map((item, index)=>{if(item === true){newTypes.push(ts[index])}});
        if (newTypes.length === 0){
            setTypes(undefined)
        }else{
            setTypes(newTypes);
        }
        
    }

    const handleBiz = ()=>{
        setFilters(new Array(4).fill(false))
        checkBiz? setTypes(undefined) : setTypes(["Marketing","Communication"]);
        setCheckBiz(!checkBiz);
    }
    useEffect(()=>{setTodo({isDone, order, types}); console.log(isDone, order, types)},[isDone, order, types] )
    return(
        <form css={css`
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        `}>
                <div key='orderByDate' css={css`
                        margin:10px;
                        border: outset rgba(0, 128, 0, 0.3);
                    `}>
                    <label>Trier par date: </label>
                    <select name="order" value={order} onChange={(event)=>{handleOrder(event)}}>
                        <option value="">Choisissez l'ordre</option>
                        <option value="DATE_ASC">Croissante</option>
                        <option value="DATE_DESC">Décroisante</option>
                    </select>
                </div>

                <div key='filter' css={css`
                        margin:10px;
                        border: outset rgba(0, 128, 0, 0.3);
                    `}>
                    <div>Choisir uniquement: </div>
                    <label>RH</label>
                    <input type="checkbox"  checked={filters[0]} onChange={(event)=>{handlefilter(0)}}/>

                    <label>Tech</label> 
                    <input type="checkbox"  checked={filters[1]} onChange={(event)=>{handlefilter(1)}}/>

                    <label>Marketting</label>
                    <input type="checkbox"  checked={filters[2]} onChange={(event)=>{handlefilter(2)}}/>
                    
                    <label>Communication</label>
                    <input type="checkbox"  checked={filters[3]} onChange={(event)=>{handlefilter(3)}}/>
                </div>

                <div key='status' css={css`
                        margin:10px;
                        border: outset rgba(0, 128, 0, 0.3);
                    `}>
                    <label>Choisir le statut: </label>
                    <select name="status" value={isDone} onChange={(event)=>{handleDone(event)}}>
                        <option value="">Choisissez un statut</option>
                        <option value={true}>Done</option>
                        <option value={false}>Not yet</option>
                    </select>
                </div>  

                <div css={css`
                        margin:10px;
                        border: outset rgba(0, 128, 0, 0.3);
                    `}>
                    <label>Uniquement les todos business </label>
                    <input type="checkbox" name="biz" checked={checkBiz} onChange={()=>{handleBiz()}}/>
                </div>
                <button type="reset" name="submit" onClick={()=>{setIsDone(undefined); setOrder(undefined); setTypes(undefined)}}>Réinitialiser</button>
            </form>
    )
    
}

export default Form;