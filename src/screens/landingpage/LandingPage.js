import React,{useEffect,useState}from 'react';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import { GridCard } from '../../components/GridCard';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Navbar from '../../components/Navbar/Navbar';

const LandingPage = () => {
    const [pizzas,setPizzas] = useState([]);
    const [loading,setLoading] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(true);
    const [isSort,setIsSort] = useState(false);
    const [isSortRating,setisSortRating] = useState(false);
    useEffect(() => {
        const url = 'https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68';
        fetchPizzas(url);
    },);
    const fetchPizzas = (path) => {
        fetch(path)
        .then(res => res.json())
        .then(res => {
            if(isSort){
                setPizzas(res.sort((a,b) => a.price - b.price));
            } else if(isSortRating){
                setPizzas(res.sort((a,b) => b.rating - a.rating));
            } else if(isSort && isSortRating){
                setPizzas(res.sort((a,b) => a.price - b.price).sort((a,b) => b.rating - a.rating));
            } else {
                setPizzas(res);
            }
            setLoading(true);
        });
    }
    //sort price and render again
    const antIcon = <LoadingOutlined  style={{ fontSize: 50 }} spin />;
  return (
    <>
        <Navbar />
        <HeroSection />
        {isVegetarian ? (
            <button onClick={() => isVegetarian ? setIsVegetarian(false) : setIsVegetarian(true)} className='hover:-translate-y-0.5 mx-6 font-bold bg-green-500 text-slate-100 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none rounded-2xl'>
                Vegetarian
            </button>
        ) : (
            <button onClick={() => isVegetarian ? setIsVegetarian(false) : setIsVegetarian(true)} className='hover:-translate-y-0.5 mx-6 font-bold bg-red-500 text-slate-100 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none rounded-2xl'>
                Nonvegetarian
            </button>
        )}
        <button onClick={() => isSort?setIsSort(false):setIsSort(true)} className='hover:-translate-y-2 mx-6 font-bold bg-purple-500 text-slate-100 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none rounded-2xl'>
            Sort by Price
        </button>
        <button onClick={() => isSortRating? setisSortRating(false):setisSortRating(true)} className='hover:-translate-y-2 mx-6 font-bold bg-purple-500 text-slate-100 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none rounded-2xl'>
            Sort by Rating
        </button>
        {loading ? (
            pizzas.map((pizza,idx) => (
                <div className="grid grid-flow-col grid-rows-1 grid-cols-1 gap-9 m-6">
                {pizza.isVeg && isVegetarian ? (
                    <React.Fragment key={idx}>
                            <GridCard
                                id={pizza.id}
                                name={pizza.name}
                                description={pizza.description}
                                price={pizza.price}
                                image={pizza.img_url}
                                isVeg={pizza.isVeg}
                                rating={pizza.rating}
                                size={pizza.size}
                                toppings={pizza.toppings}
                            />
                    </React.Fragment>
                ):(
                    null
                )}
                {!pizza.isVeg && !isVegetarian ? (
                    <React.Fragment key={idx}>
                            <GridCard
                                id={pizza.id}
                                name={pizza.name}
                                description={pizza.description}
                                price={pizza.price}
                                image={pizza.img_url}
                                isVeg={pizza.isVeg}
                                rating={pizza.rating}
                                size={pizza.size}
                                toppings={pizza.toppings}
                            />
                    </React.Fragment>
                ):(
                    null
                )}
                
                </div>
            ))
        ) : (
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <Spin indicator={antIcon} />
            </div>
        )}
        <Footer />
    </>
  );
}

export default LandingPage