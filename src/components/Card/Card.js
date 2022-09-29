import React from 'react';

const Card = ({ card, handleAddToTime, buttontext }) => {

   const { id, name, img, description, duration, age } = card;
   return (
      <div className='p-3 bg-stone-200 rounded-md text-center'>
         <img className='rounded-md mb-2' src={img}></img>
         <h2 className='text-2xl'>{name}</h2>
         <p className='text-sm'>{description}</p>
         <p className='font-semibold mb-2'>Age: {age}</p>
         <p className='font-semibold'>Duration: {duration}m</p>
         <button onClick={() => handleAddToTime(card)} className='text-center text-2xl w-[60%] px-auto my-4 py-2 bg-green-700 hover:bg-green-900 text-white rounded-md'>{ buttontext}</button>
      </div>
   );
};

export default Card;