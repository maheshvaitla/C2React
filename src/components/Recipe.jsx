import { useState,useEffect } from "react";
import "../styles/Recipe.css";



const initstate={
    title:"",
    ingredients:"",
    time:"",
    instructions:""
}

export const Recipe =()=>{
    const [recipe,setRecipe]=useState(initstate);
    const [details,setDetails]=useState([])
    const [show,setShow]=useState([])
    

    useEffect(()=>{
        getDetails();

    },[])

    const handleclick =(e)=>{
        let {name,value} =e.target
        setRecipe((prev)=>({...prev,[name]:value}));
    }

    const postData=()=>{
        const payload={
            title:recipe.title,
            ingredients:recipe.ingredients,
            timetocook:recipe.timetocook,
            instructions:recipe.instructions,
            status:false,
        };
        fetch("http://localhost:3001/recipe",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json",
            },
        }).then(()=>{
            getDetails();
            setRecipe("")
        })
    }

    const getDetails =()=>{
         fetch("http://localhost:3001/recipe")
    .then(d=>d.json())
    .then((res)=>{
        setDetails(res)});
    }




const handlesubmit =(e)=>{
    e.preventDefault()
}
const getData1 =()=>{
    fetch("http://localhost:3001/recipe")
    .then(d=>d.json())
    .then((res)=>{
        setShow(res)});
}



const {title,ingredients,timetocook,instructions}=recipe;


    return (
        <div id="formdiv">
            <h1 style={{color:"red"}}>Add Recipe</h1>
            <div id="flex">

            
        <form>
            <label onSubmit={handlesubmit}>Title</label>
            <br />
            <input type="text" value={title} name="title" placeholder="Title" onChange={handleclick} />
            <br />
            <br />
            <label>Ingredients</label>
            <br />
            <input type="text" value={ingredients} name="ingredients" placeholder="Ingredients" onChange={handleclick}/>
            <br />
            <br />
            <label>Time to Cook</label>
            <br />
            <input type="number" value={timetocook} name="timetocook" placeholder="Time to cook" onChange={handleclick} />
            <br />
            <br />
            <label>Instructions</label>
            <br />
            <input type="text" value={instructions} name="instructions" placeholder="instructions" onChange={handleclick}/>
            <br />
            <br />
            <input  onClick={postData} id="submit" type="submit"  />
        </form>
        <div>
            
            {details.map((e,i)=>
                <div  id="card" key={i}>
                    <div id="insidecard">
                       <h2>Title :{e.title}</h2>
                        <h3> Time to cook: {e.timetocook}</h3> 
                        <button  onClick={getData1} style={{backgroundColor:"yellow"}}>CLICK FOR MORE INFO</button>
                    </div>
                </div>
            )}

        </div>

       
        </div>
        <div id="moreinfo">
            {show.map((e,i)=>
            <div key={i}>
               Title : {e.title}, Time to cook :{e.timetocook} , Ingredients : {e.ingredients}, Instructions : {e.instructions}
            </div>
            )}
        </div>
        </div>
    )
}