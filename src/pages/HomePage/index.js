import React from 'react'
import ImageBar from "../../components/ImageBar"
import ItemBar from "../../components/Items/ItemBar"

import "../../App.css";


export default function Homepage() {
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

                <a color='black' href="/about">more about us</a>
            </div>

        </div>
    )
}
