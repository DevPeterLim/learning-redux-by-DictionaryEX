// import logo from './logo.svg';
import './App.css';
import TopNav from './TopNav';
import Card from './Card';
import AddBtn from './AddBtn';
import {Routes, Route, Link} from "react-router-dom";
import AddWord from './AddWord';
import Home from './Home';
import { useState, useEffect, useId } from 'react';
import {db} from './firebase-config';
import {collection, getDocs} from "firebase/firestore";
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux';



function App() {
  // const [WordPost, setWords] = useState([]);
  // const wordCollectionRef = collection(db, "WordPost");
  // const uniqueId = useId();
  // console.log(uniqueId)
  // 
  // useEffect(()=>{
  //   const getWords = async ()=>{
  //     const data = await getDocs(wordCollectionRef);
  //     setWords(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  //   }
  //   getWords();
  // }, [])
  // const showWords = WordPost.map((value)=>(<div key={uniqueId}>{value.wordtitle}</div>))

  return (
    <div className="App">
        <Link to="/" style={{textDecoration: "none"}}>
          <TopNav/>
        </Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='add' element={<AddWord></AddWord>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
