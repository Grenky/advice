import React from "react";
import '../styles/first.css';

const First = () => {
    return (
        <div className="imgs_main wrapper">
            <div className="imgs">
                <div className="skinny"></div>
                <div className="sporty"></div>
                <div className="fat"></div>

            </div>
            <div className="texts">
                <p className="text__skinny">skinny</p>
                <p className="text__sporty">sporty</p>
                <p className="text__fat">fat</p>
            </div>
        </div>
    )
}



export default First;