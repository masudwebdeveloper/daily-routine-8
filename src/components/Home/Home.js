import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideCard from '../SideCard/SideCard';
import './Home.css';

const Home = () => {
   const [cards, setCards] = useState([]);
   const [times, setTimes] = useState([]);
   const [buttontext, setButtontext] = useState('Add to selected');
   useEffect(() => {
      fetch("products.json")
         .then(res => res.json())
         .then(data => setCards(data))
   }, [])
   const handleAddToTime = (card) => {
      const oldCard = [...times,card];
      setTimes(oldCard);
      setButtontext('Added');

   }
   return (
      <div>
         <div className='pl-7 text-center lg:text-left bg-stone-200 mb-5 py-4'>
            <h1 className="text-4xl text-gray-600 font-bold">Daily Routine</h1>
            <h2 className="text-3xl text-gray-500 font-semibold">Selected daily works</h2>
         </div>
         <div className='grid grid-cols-6 lg:grid-cols-12 gap-5 px-5'>
            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-4 p-2">
               {
                  cards.map(card => <Card
                     card={card}
                     key={card.id}
                     handleAddToTime={handleAddToTime}
                     buttontext={buttontext}
                  ></Card>)
               }
            </div>
            <div className="col-span-12 lg:col-span-3">
               <SideCard times={times}></SideCard>
            </div>
         </div>
      </div>

   );
};

export default Home;