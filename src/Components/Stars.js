import React, { useState } from "react";
import { FaStar} from 'react-icons/fa'

const Stars = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You rated this service: ${rating} stars`);
};
    return(
        <div >
           <label className="my-3"/> Your Rating <br></br>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return <label key={i}>
                    <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                    />
                    <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || rating) ? "gold" : "lightgray"} 
                    size={20}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                    </label>;
            })}
            <p className='text-secondary'>I rate this service {rating + " stars"}</p>
        </div>
        );
};

export default Stars;