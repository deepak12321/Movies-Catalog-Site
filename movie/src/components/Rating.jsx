import React from 'react'
import "../style/rating.css";

const Rating = (props) => {
    return <>
        <div className="main-rating-div">
            <div className="span">
                <h5>{props.data.Source}</h5>
                <p>{props.data.Value}</p>
            </div>
        </div>
    </>
}

export default Rating