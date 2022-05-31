import App from "./App";
import Card from "./Card";
import AddBtn from "./AddBtn";
import { Link } from "react-router-dom";


const Home = ()=>{
    return (
        <>
        <Card />
        <Link to="add">
            <AddBtn/>
        </Link>
    </>
    )
}

export default Home;