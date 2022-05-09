import React from 'react'
import item from '../../../images/Bowl.webp';

export default function index() {
    const styledItem = {
        width: "20%",
        marginLeft: "2%",
        marginTop: "5%"
    }

    return (
        <div className='InfoBox2'>
            <h3>
                NEW IN <br />
                <img src={item} alt="product1" style={styledItem} />
                <img src={item} alt="product2" style={styledItem} />
                <img src={item} alt="product3" style={styledItem} />
            </h3>
        </div>
    )
}
