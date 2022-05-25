import React from 'react'
import ImageBar from "../../components/ImageBar"
import ItemBar from "../../components/Items/ItemBar"
import Sharpei from '../../images/Sharpei.jpg'
import "../../App.css";


export default function Homepage() {
    const SharpeiFormat = {
        width: "25%",
        marginTop: "-6.5%",
        marginLeft: "-70%",
        borderRadius: "10%",
        border: "10",
        borderColor: "",
    }

    return (
        <div>

            <ImageBar />

            <ItemBar />

            <div className='InfoBox'>
                <br />
                <h3>
                    About Yoka For Dogs <br />
                </h3>
                <br />


                We spend a quarter of our life in bed. <br />
                We believe a bed should be the highlight of your bedroom.<br />
                A reflection of taste and personality with the comfort <br />
                Of a crisp and fresh made bed.<br />

                <a color='black' href="/about">more about us</a><br />
                <img src={Sharpei} alt='Sharpei' style={SharpeiFormat} /><br />
            </div>

        </div>
    )
}
