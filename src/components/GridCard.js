import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import StarRatings from 'react-star-ratings';
export const GridCard = (props) => {
  const { id,name, description, price, image, isVeg, rating, size, toppings } = props;
  const topping = toppings[0];
  const  sizeVariants = size[0];
  const sizes = [];
  const toppingsList = [];
  const { addItem } = useCart();
  for(let prop in sizeVariants){
    if(prop === 'items'){
      sizes.push(...sizeVariants[prop]);
    }
  }
  for(let prop in topping){
    if(prop === 'items'){
      toppingsList.push(...topping[prop]);
    }
  }
  const [foodsize,setfoodSize] = useState('');
  const [foodtopping,setfoodTopping] = useState('');
  const [nofItem, setnofItem] = useState(1);
  const handlesizeChange = (e) => {
    setfoodSize(e.target.value);
  }
  const handletoppingChange = e => {
    setfoodTopping(e.target.value);
  }
  const handlenofChange = e => {
    setnofItem(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id,
      name,
      description,
      price,
      image,
      isVeg,
      rating,
      nofItem,
      size:foodsize,
      toppings:foodtopping
    }
    addItem(item);
  }
  
  return (
      <>
        <div class="flex font-sans shadow-lg shadow-cyan-500/50 rounded-3xl">
          <div class="flex-none w-60 relative">
            <img src={image} alt="" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <form class="flex-auto p-6" onSubmit={handleSubmit}>
            <div class="flex flex-wrap">
              <h1 class="flex-auto text-lg font-semibold text-slate-900">
                {name}
              </h1>
              <div class="text-lg font-semibold text-slate-500">
                ₹{price}
              </div>
              <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                {isVeg ? <span className='text-green-600'>Vegetarian</span> : <span className='text-red-600'>Nonvegetarian</span>}
              </div>
            </div>
            <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-sm">
                <p className='text-blue-600 font-medium'>Choose size</p>
                {sizes.map(size => (
                  <label>
                    <input class="sr-only peer" name="size" type="radio" value={size.size} onChange={handlesizeChange} />
                    <div class="w-17 h-9 mx-4 rounded-lg hover:bg-slate-200 flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      {size.size}
                    </div>
                  </label>
                ))}
                  
              </div>
            </div>
            <div className='flex items-baseline mt-4 mb-6 border-b border-slate-200'>
              <div className='space-x-2 flex text-sm'>
                <p className='text-blue-600 font-medium'>
                  Choose toppings:
                </p>
                {toppingsList.map(toppin => (
                  <label>
                    <input class="sr-only peer" name="topping" type="radio" value={toppin.name}  onChange={handletoppingChange} />
                    <div class="w-17 h-9 mx-4 rounded-lg hover:bg-slate-200 flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      {toppin.name}
                    </div>
                  </label>
                ))}
                

              </div> 

            </div>
            <div class="flex space-x-4 mb-6 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
              <div className="mb-3 pt-0">
                <label for='nof'></label>
                <input type="text" placeholder="no of items" name="nof" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-20" onChange={handlenofChange}/>
              </div>
                <button
                class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type='submit'>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className='flex space-x-20'>
              <p class="text-sm text-slate-700">
                {description}
              </p>
              <p><StarRatings
                rating={rating}
                starDimension="30px"
                starRatedColor='#FFD700'
                starSpacing="15px"
              /></p>
              
            </div>
            
          </form>
        </div>
      </>
  )
}
