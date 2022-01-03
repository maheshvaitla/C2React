import "../styles/Recipe.css";


export const Recipe =()=>{
    return (
        <div id="formdiv">
            <h1 style={{color:"red"}}>Add Recipe</h1>
        <form>
            <label>Title</label>
            <br />
            <input type="text" name="title" placeholder="Title"  />
            <br />
            <br />
            <label>Ingredients</label>
            <br />
            <input type="text" name="ingredients" placeholder="Ingredients" />
            <br />
            <br />
            <label>Time to Cook</label>
            <br />
            <input type="number" name="timetocook" placeholder="Time to cook" />
            <br />
            <br />
            <label>Instructions</label>
            <br />
            <input type="text" name="instructions" placeholder="instructions"/>
            <br />
            <br />
            <input  id="submit" type="submit"  />
        </form>
        </div>
    )
}