import Axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Cards";

//https://dummyjson.com/products
export function Home()
{
    const [data,setData] = useState([]);

    useEffect(()=>{
/*HTTP Request which should be placed inside a lifecycle methods but as we use function component instead of using lifecycle methods we are using useEffect method*/
        Axios.get("https://dummyjson.com/products")
        .then((res)=>{
            if(res.status === 200)
            {
/*The object which is fetched is stored inside a function component with the help of useState*/
                setData(res.data.products);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err);})
    },[])
   
    const ListCards = () => {
        return data.map((val)=>{
            return <Cards obj={val} />
        })
    }

    return (
    <div>
        <h1>Home components</h1>
        <div class="row">
            {ListCards()}
        </div>
        {console.log(data)}
    </div>
    );
}


export function Contact()
{
    return <h1>Contact components</h1>
}

export function Blog()
{
    return <h1>Blog components</h1>
}

export function Projects()
{
    return <h1>Projects components</h1>
}
