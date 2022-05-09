import React from 'react'
import dog from "../../images/SunnyDogCopy.JPG"

export default function index() {
    const styledPic = {
        width: "100%",
        marginLeft: "0%",
        marginTop: "-30%"
    }

    return (
        <div>
            <div>
                <img src={dog} alt="NO DOG" style={styledPic} />
            </div>
        </div>
    )
}
