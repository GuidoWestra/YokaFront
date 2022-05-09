import React from 'react'
import item from '../../../images/Bowl.webp';

export default function index() {

    const styledPicture = {
        width: "20%",
        marginLeft: "2%",
        marginTop: "3%"
    }

    return (
        <div className='InfoBox2'>
            <h3>
                NEW IN <br />
            </h3>
            <div>
                <div>
                    <img src={item} alt="product1" style={styledPicture} />
                </div>
                <img src={item} alt="product2" style={styledPicture} />
                <img src={item} alt="product3" style={styledPicture} />
            </div>

        </div>
    )
}
