import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast'

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const  removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.error("item removed ")
    }
    return (
        <div>
            <div>
                <div>
                    <img src={item.img} />
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                        <div
                        onClick={removeFromCart}>
                            <MdDeleteOutline /> 
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default CartItem
