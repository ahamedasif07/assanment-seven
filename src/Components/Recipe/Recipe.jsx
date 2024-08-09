
import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { IoBonfireOutline } from "react-icons/io5";
const Recipe = ({recipe,handleAddToPeparaing}) => {
    console.log(recipe)
    const {recipe_image,short_description,recipe_name,preparing_time,calories,ingredients}=recipe;
    return (
        <div>

<div className="card bg-base-100 h-[800px] shadow-xl">
  <figure>
    <img className=''
      src={recipe_image}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {recipe_name}
      
    </h2>
    <p>{short_description}</p>

    <hr />
    <h2 className='text-xl font-bold'>Ingredients : {ingredients.length}</h2>
    {
        ingredients.map((ingredent,idx) => <li key={idx}>{ingredent}</li>)
    }
    <hr />
    <div className=''>
      <h2 className='flex items-center gap-2'> <span ><IoMdTime /></span> {preparing_time} minutes</h2>
        <h3 className='flex items-center gap-2'><span><IoBonfireOutline /></span> {calories}calories</h3>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>-handleAddToPeparaing(recipe)} className='btn btn-success'>Want to Cook</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

Recipe.propTypes = {
    recipe : PropTypes.object.isRequired,
    handleAddToPeparaing:PropTypes.func.isRequired
}

export default Recipe;