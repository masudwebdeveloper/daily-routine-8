import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideCard from '../SideCard/SideCard';
import './Home.css';

const Home = () => {
   const [cards, setCards] = useState([]);
   const []
   useEffect(() => {
      fetch("products.json")
         .then(res => res.json())
         .then(data => setCards(data))
   }, [])
   return (
      <div>
         <div className='pl-5'>
            <h1 className="text-4xl text-green-500 font-bold">Daily Routine</h1>
            <h2 className="text-3xl text-green-400 font-semibold">Selected daily works</h2>
         </div>
         <div className='grid grid-cols-12 gap-5 px-5'>
            <div className="col-span-9 grid grid-cols-3 gap-4 p-2">
               {
                  cards.map(card => <Card card={card} key={card.id}></Card>)
               }
            </div>
            <div className="col-span-3">
               <SideCard></SideCard>
            </div>
         </div>
      </div>

   );
};

export default Home;