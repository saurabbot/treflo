import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { useCart } from 'react-use-cart';
const CartPage = (props) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    console.log(items);
    if(isEmpty) return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-3xl font-bold text-gray-700'>Cart is Empty.</h1>
            </div>
        </>
    ); 
  return (
    <>
        <Navbar />
        <div className='flex flex-row justify-between'>
            <h1 className='text-black font-bold mx-10 text-4xl mb-8' >My Cart</h1>
            <button 
                className='inline-block h-10 p-2 bg-gradient-to-bl from-red-400 to-blue-400 font-medium rounded-3xl text-slate-50 mr-8 mt-3'
                onClick={emptyCart}
            >
                Empty Cart
            </button>
        </div>
        
        <div className='border-b border-slate-400  mx-20'>
            <h1 className='font-sans font-semibold'>
                {totalUniqueItems} items in cart.
            </h1>
        </div>
        {items.map((item,index)=> (
            <div key={index} className='flex h-32 mt-5 mx-20 font-sans shadow-md rounded-lg border-2'>
                <div className='flex-none w-40 m-2 relative'>
                    <img src={item.image} class="absolute inset-0 w-full h-full object-cover" alt='pizzaImage' />
                </div>
                <div className='flex flex-row justify-between'>
                    <h2 className=' text-lg font-medium text-slate-700'>
                        {item.name}
                    </h2>
                    <h2 className='ml-10 text-lg font-medium text-slate-700'>
                        <span className='text-red-500 font-extrabold'>X</span> {item.nofItem-1+item.quantity}
                    </h2>      
                </div>
                <div className='flex flex-row justify-around ml-10'>
                    <ol className='font-medium text-lg text-cyan-700'>
                        <li>Size: {item.size}</li>
                        <li>Addon: {item.toppings}</li>
                    </ol>
                </div>
                <div className='flex flex-wrap justify-items-stretch'>
                    <div class="inline-flex">
                        <button 
                            class="bg-gray-300 h-9 hover:bg-gray-400 ml-1 text-gray-800 font-bold py-2 px-4 rounded-l"
                            onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                        >
                            -
                        </button>
                        <button 
                            class="bg-gray-300 h-9 hover:bg-gray-400  text-gray-800 font-bold py-2 px-4 rounded-r"
                            onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className='flex flex-row justify-between ml-4'>
                        <h2 className='text-lg font-medium  text-slate-700'>
                            Price:
                        </h2>
                        <h2 className='text-md font-medium text-slate-700'>
                        ₹{item.nofItem-1+item.quantity*item.price}
                        </h2>
                        <button className='inline-block h-10 p-2 bg-gradient-to-bl from-green-400 to-blue-400 font-medium rounded-3xl text-white ml-72'
                            onClick={() => removeItem(item.id)}
                        >
                            Remove
                        </button> 
                </div>
            </div>
        ))}
        <div >
        <h3 className='text-black font-semibold text-xl mx-3 mt-6'>Total Items: {totalItems}</h3>
            <h3 className='text-black font-semibold text-2xl mx-3 mt-1'>Total Amount: ₹{cartTotal}</h3>
        </div>
    </>
    
  )
}

export default CartPage;