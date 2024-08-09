
import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { IoBonfireOutline } from "react-icons/io5";

const Panding = ({panding,handleCooking,}) => {
    console.log(panding)
    const {recipe_image,short_description,recipe_name,preparing_time,calories}=panding;
    
    return (
        <div>
            
            <div className="card bg-base-100 my-4 shadow-xl">
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
    
    
    <hr />
    <div className=''>
      <h2 className='flex items-center gap-2'> <span ><IoMdTime /></span> {preparing_time} minutes</h2>
        <h3 className='flex items-center gap-2'><span><IoBonfireOutline /></span> {calories}calories</h3>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleCooking(panding)} className='btn btn-success'>Peparing..</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

Panding.propType={
    panding :PropTypes.object.isRequired,
    handleCooking : PropTypes.func.isRequired
}

export default Panding;