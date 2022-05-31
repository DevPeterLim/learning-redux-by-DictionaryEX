// import logo from './logo.svg';
import './App.css';
import TopNav from './TopNav';
import Card from './Card';
import AddBtn from './AddBtn';
import {Routes, Route, Link} from "react-router-dom";
import AddWord from './AddWord';
import Home from './Home';



function App() {
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
