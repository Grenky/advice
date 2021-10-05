import React from "react";
import '../styles/second.css';
import Arrow from '../images/pngtree-vector-down-arrow-icon-png-image_956681.jpg';

const Second = (props) => {
    return (
        <div className="seconMain">
            <p className="advice">{props.result}.</p>
            <p className="text__advice">Advice you</p>
            <img className="arrow" src={Arrow} alt="img"></img>
            <div className="activity">{props.activity}</div>
        </div>
    )
}

export default Second;