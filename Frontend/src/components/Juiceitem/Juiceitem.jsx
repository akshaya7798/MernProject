import React, { useContext } from 'react'
import './Juiceitem.css'
import { assets } from '../../assets/assets'
import { Store } from '../../context/Store'

const Juiceitem = ({ id, name, price, description, image }) => {
    const url = "http://localhost:4000"
    const { cartItems, addToCart, removeFromCart } = useContext(Store)

    return (
        <div className='juice-item'>
            <div className="juice-item-img-container">
                <img className='juice-item-image' src={url + "/images/" + image} alt={name} />
            </div>
            <div className="juice-item-info">
                <div className="juice-item-name-rating">
                    <p>{name}</p>
                    {
                        !cartItems[id]
                            ? <img className='add' onClick={() => addToCart(id)} src={assets.bas2} alt="Add to cart" />
                            : <div className='juice-counter'>
                                <img onClick={() => removeFromCart(id)} src={assets.red} alt="Remove one" />
                                <p>{cartItems[id]}</p>
                                <img onClick={() => addToCart(id)} src={assets.green} alt="Add one more" />
                            </div>
                    }
                </div>
                <p className="juice-item-desc">
                    {description}
                </p>
                <p className="juice-item-price">
                    $ {price}
                </p>
            </div>
        </div>
    )
}

export default Juiceitem
