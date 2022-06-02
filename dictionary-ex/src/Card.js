import React from "react";
import "./Card.css"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useId } from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from './firebase-config';
import { loadWordFB } from "./redux/modules/wordReducer";

const Card = (props) => {
    const wordData = useSelector((state)=>state.wordReducer.list);
    console.log(wordData)
    const [WordPost, setWords] = useState([]);
    const dispatch = useDispatch();
    // const uniqueId = useId();
  // 
    useEffect(()=>{
        dispatch(loadWordFB())
    }, [dispatch]);

    // wordData.map((value, index)=>(
    //     return <WordPost
    //     key = {value.id}
    //     wordIdx = {value.wordIdx}
    //     wordTitle = {value.wordTitle}
    //     wordPron = {value.wordPron}
    //     wordMean = {value.wordMean}
    //     wordExample = {value.wordExample}
    //     wordKorEx = {value.wordKorEx}
    //     idx = {index}
    //     id = {value.id}/>
    //         {<div id="cardItem">
    //             <h2 className="word">{value.wordTitle}</h2>
    //             <button className="checkbtn">check</button>
    //             <a href="#">edit</a>
    //             <button className="delbtn">❌</button><br/>
    //             <span className="pronunciation">[{value.wordPron}]</span>
    //         <div className="meaning">{value.wordMean}</div>
    //         <div className="examples">{value.wordExample}</div>
    //         <div className="exMeaning">{value.wordKorEx}</div>
    //         </div>/>));}
    return ( 
        null   
        // <>
        //     {wordData.map((value, index)=>{
        //     return <WordPost
        //     key = {value.id}
        //     wordIdx = {value.wordIdx}
        //     wordTitle = {value.wordTitle}
        //     wordPron = {value.wordPron}
        //     wordMean = {value.wordMean}
        //     wordExample = {value.wordExample}
        //     wordKorEx = {value.wordKorEx}
        //     idx = {index}
        //     id = {value.id}/>})}
        // </>
    )
// const WordGrid = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// const WordPost = styled.div`
//   box-sizing: border-box;
//   width : 90%;
//   height : 90%;
//   border-radius: 30px;
//   background-color: #f4f4f4;
//   padding : 0px 20px;
//   display : flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   font-family: 'DotFont';
//   font-size: 15px;
// `

export default Card;