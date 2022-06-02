import React from "react";
import "./Card.css"
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useEffect, useState, useId } from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from './firebase-config';





const Card = (props) => {
    const wordData = useSelector((state)=>state.wordReducer.list);
    console.log(wordData)
    const [WordPost, setWords] = useState([]);
  const wordCollectionRef = collection(db, "WordPost");
  const uniqueId = useId();
  // 
    useEffect(()=>{
      const getWords = async ()=>{
        const data = await getDocs(wordCollectionRef);
        setWords(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      }
      getWords();
    }, [])
    const showWords = WordPost.map((value, idx)=>(<WordGrid key={uniqueId} id={idx} >

    {/* // const wordCard = wordData.map((value, idx) => (<WordGrid id = {idx} key={value.id}> */}
        <WordPost>
            <div id="cardItem">
                <h2 className="word">{value.wordTitle}</h2>
                <button className="checkbtn">check</button>
                <a href="#">edit</a>
                <button className="delbtn">❌</button><br/>
                <span className="pronunciation">[{value.wordPron}]</span>
            <div className="meaning">{value.wordMean}</div>
            <div className="examples">{value.wordExample}</div>
            <div className="exMeaning">{value.wordKorEx}</div>
            </div>
        </WordPost>
    </WordGrid>))

    return (    
        <>
        {/* {wordCard}     */}
        {/* {showWords} */}
        {console.log({showWords})}
        </>
        )
}

const WordGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const WordPost = styled.div`
  box-sizing: border-box;
  width : 90%;
  height : 90%;
  border-radius: 30px;
  background-color: #f4f4f4;
  padding : 0px 20px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'DotFont';
  font-size: 15px;
`

export default Card;