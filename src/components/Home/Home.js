import React,{useEffect,useState} from 'react'
import Recipes from '../Recipes/Recipes';
import '../Home/Home.css'

function Home() {
    const APP_ID="26f8e5fd"
    const APP_KEY="8962a862392f26bce3febbcf96699300"
    // const exampleRequest=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
     const [recipes,setRecipes]=useState([]);
     const [search,setSearch]=useState();
     const [query,setQuery]=useState('chicken');
    useEffect(() => {
        getRecipe();
       
    }, [query])

    const getRecipe=async ()=>
    {
        const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data=await response.json();
        setRecipes(data.hits);
        // console.log(data.hits);

    }

    const getSearch=(event)=>
    {
        event.preventDefault();
        setQuery(search)
        setSearch('')

    }
    return (
        <div className="home-container">
            <form className="search-form" onSubmit={getSearch}>
                <input type="text" className="search-bar" value={search} onChange={(event)=>setSearch(event.target.value)}/>
                <button type="submit" className="search-button">Search</button>
                </form>  
                <div className="recipes">
                {
                    recipes.map((data,index)=>(
                        <Recipes dietLabels={data.recipe.label} calories={data.recipe.calories} img={data.recipe.image} ingredients={data.recipe.ingredients} />  
                    ))
                }   

                </div>
              
              
        </div>
    )
}

export default Home
