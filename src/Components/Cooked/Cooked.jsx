import { IoMdTime } from "react-icons/io";
import { IoBonfireOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Cooked = ({cooked}) => {
    console.log(cooked)
    const {recipe_image,short_description,recipe_name,preparing_time,calories,}=cooked;
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
      <button  className='btn btn-success'>Done</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

Cooked.propTypes={
    cooked : PropTypes.object.isRequired
}

export default Cooked;