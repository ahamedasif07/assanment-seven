import PropTypes from 'prop-types';
import Panding from '../Panding/Panding';
import Cooked from '../Cooked/Cooked';

const Cookings = ({ cookingPreparing,handleCooking,onCoking }) => {
    console.log(cookingPreparing);

    // Example: Destructuring if needed, uncomment if using.
    // const { recipe_image, short_description, recipe_name, preparing_time, calories, ingredients } = cookingPreparing;

    return (
        <div className="w-1/3 shadow-lg rounded-md">
            <div className="px-4">
                <h2 className="text-2xl font-bold grid p-2 border-gray-400 justify-center">
                    Went-to-cook :
                </h2>
                <hr />
             <div className='my-4'>
             {
                cookingPreparing.map(panding => <Panding 
                   key={panding.id}
                   handleCooking={handleCooking}
                   onCoking={onCoking}
                   panding={panding}></Panding>)
              }
             </div>

            </div>
            <hr />

            <div className="text-2xl font-bold grid p-2 border-gray-400 justify-center">
                <h2 className='text-2xl my-2 text-center'>cooking now</h2>
                {
                  onCoking.map(cooked => <Cooked key={cooked.id} cooked={cooked}></Cooked>)
                }

             </div>

            <div className="flex justify-between">
                <div>
                    {/* Content can go here */}
                </div>
            </div>
        </div>
    );
};

Cookings.propTypes = {
    cookingPreparing: PropTypes.object,  // Adjust based on the actual shape of the object
    cookingTime: PropTypes.string,
    cooKcalories: PropTypes.number,
    handleCooking: PropTypes.func.isRequired,
    onCoking :PropTypes.object.isRequired
};

export default Cookings;
