import { useRef } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { createWordFB } from "./redux/modules/wordReducer";
import { useNavigate } from "react-router-dom";

const AddWord = ()=>{
    const wordRef = useRef(null);
    const pronRef = useRef(null);
    const meanRef = useRef(null);
    const exRef = useRef(null);
    const korExRef = useRef(null);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addWord = ()=>{
        dispatch(createWordFB({
            wordTitle : wordRef.current.value,
            wordPron : pronRef.current.value,
            wordMean : meanRef.current.value,
            wordExample : exRef.current.value,
            wordKorEx : korExRef.current.value 
        }));
    navigate('/')
    }

    return (
        <>
            <h2>단어 추가하기</h2>
            <div>
            <label>단어<input type="text" ref={wordRef} required/></label>
            <label>병음<input type="text" ref={pronRef}/></label>
            <label>의미<input type="text" ref={meanRef}/></label>
            <label>예문<input type="text" ref={exRef}/></label>
            <label>해석<input type="text" ref={korExRef}/></label>
            <button onClick={addWord}>저장하기</button>
            </div>
        </>
    )
}

export default AddWord;