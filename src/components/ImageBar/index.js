import React from 'react'
import dog from "../../images/SunnyDogCopy.JPG"

export default function index() {
    const styledPic = {
        width: "50%",
        marginLeft: "25%",
        marginTop: "-10%"
    }

    return (
        <div>
            <div>
                <img src={dog} alt="NO DOG" style={styledPic} />
            </div>
        </div>
    )
}
