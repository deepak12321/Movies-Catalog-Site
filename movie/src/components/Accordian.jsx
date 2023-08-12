import React, { useState } from 'react'
import "../style/accordian.css";
import Details from './Details';

const Accordian = (props) => {
    // const [active, setActive] = useState(false);
    const [c, setC] = useState("");

    const toggle = () => {
        c === "" ? setC("active") : setC("");
    }


    return <>
        <div className="accordian-div" onClick={toggle}>
            <div className="question-div">
                <h5 className='question'>{props.name}</h5>
                <span className={`down-arrow ${c}`} onClick={toggle}>▲</span>

            </div>
            <div className={`answer-div ${c}`}>
                {
                    props.data.map((details) => {
                        return <div className="main-rating-div" key={details.Source}>
                            <div className="rating-div">
                                <h5>{details.Source}</h5>
                                <p>{details.Value}</p>
                            </div>
                        </div>
                    })

                }
            </div>
        </div>
        <Details />
    </>
}

export default Accordian