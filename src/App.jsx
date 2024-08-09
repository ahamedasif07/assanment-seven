
import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import Cookings from './Components/Cookings/Cookings'
import Header from './Components/Header/Header'
import NavBar from './Components/Header/NavBar'
import OurRecipes from './Components/OurRecipes/OurRecipes'
import Recipes from './Components/Recipes/Recipes'


function App() {

  const [cookingPreparing,setCookingPeparaing]=useState([]);
  const [onCoking,setOnCoking]=useState([]);


  const handleAddToPeparaing =(recipe)=>{

    const {recipe_image,short_description,recipe_name,preparing_time,calories,ingredients,id}=recipe;
    
    // const isExsist = cookingPreparing.find((procesing) => procesing.id === recipe.id)
    //  if(isExsist){
    //   alert('alrady exsist')
    //  }
    //  else{
    //   const newPanding = [...cookingPreparing,recipe]
    //   setCookingPeparaing(newPanding)
    //  }

    const newPanding = [...cookingPreparing,recipe]
    setCookingPeparaing(newPanding)
   
  }  


  const handleCooking = (panding) =>{
    console.log('go for cook',panding)
    const adToCooking = [...onCoking,panding]
    setOnCoking(adToCooking)
    
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
       handleCooking={handleCooking}
       onCoking={onCoking}
       ></Cookings>
       </div>
      </div>

    
    </>
  )
}

export default App
