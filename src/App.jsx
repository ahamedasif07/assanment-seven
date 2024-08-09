
import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import Cookings from './Components/Cookings/Cookings'
import Header from './Components/Header/Header'
import NavBar from './Components/Header/NavBar'
import OurRecipes from './Components/OurRecipes/OurRecipes'
import Recipes from './Components/Recipes/Recipes'
import { RiEyeCloseLine } from 'react-icons/ri'

function App() {

  const [cookingPreparing,setCookingPeparaing]=useState([]);


  const handleAddToPeparaing =(recipe)=>{

    const {recipe_image,short_description,recipe_name,preparing_time,calories,ingredients}=recipe;


    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="#">Why do I have this issue?</a>'
    // });
    const isExsist = cookingPreparing.find(preparing => preparing.id === recipe.id)
    if(isExsist){
      Swal.fire({
      icon: "error",
      title: "Alrady Available",
      text: "!!!!",
      
    });
    }
    else{
      const newCookingPanding = [...cookingPreparing,recipe]
    setCookingPeparaing(newCookingPanding)
    }

    
    
  }  
  

  return (
    <>
     
      <div className='max-w-screen-2xl mx-auto'>
        <NavBar></NavBar>
        <Header></Header>
        <OurRecipes></OurRecipes>
       <div className='md:flex gap-10 '>
       <Recipes handleAddToPeparaing ={handleAddToPeparaing }></Recipes>
       <Cookings 
       cookingPreparing={cookingPreparing}
       ></Cookings>
       </div>
      </div>

    
    </>
  )
}

export default App
