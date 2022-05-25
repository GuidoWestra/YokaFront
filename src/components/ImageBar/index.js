import React from 'react'
import dog from "../../images/SunnyDogCopy.jpg"

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


                {/* <img src={dog} alt="NO DOG" width="25%" />
                <img src={dog} alt="NO DOG" width="25%" />
                <img src={dog} alt="NO DOG" width="25%" />
                <img src={dog} alt="NO DOG" width="25%" /> */}

            </div>
        </div>
    )
}
