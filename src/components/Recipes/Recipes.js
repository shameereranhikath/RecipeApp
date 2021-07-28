import React from 'react'
import '../Recipes/Recipes.css'

function Recipes({dietLabels,calories,img,ingredients}) {
    console.log(ingredients);
    return (
        <div className="recipe-container">
            <h2>{dietLabels}</h2>
            <p>Calories- {calories}</p>
          <img src={img}></img>
          <ol>
          {ingredients.map((data,index)=>(
              <li key={index}>{data.text}</li>
          )

          )
          
          
          }

          </ol>
            
        </div>
    )
}

export default Recipes
