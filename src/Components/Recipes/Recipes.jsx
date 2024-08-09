import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleAddToPeparaing }) => {


const [recipes,setRepices]=useState([]);

useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setRepices(data))
},[])
    return (
        <div className="md:w-2/3 p-4">
            
           
         {/* map in recipes */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            
          {
        
        recipes.map(recipe => <Recipe 
            key={recipe.id} 
            recipe = {recipe}
            handleAddToPeparaing ={handleAddToPeparaing }
            ></Recipe>)

            }
          </div>

            
        </div>
    );
};

Recipes.propTypes = {
    handleAddToPeparaing :PropTypes.func.isRequired
}

export default Recipes;