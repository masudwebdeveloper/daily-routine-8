import React, { useState } from 'react';
import './SideCard.css';

const SideCard = () => {

   return (
      <div className='sticky top-0'>
         <div className='flex gap-4 bg-stone-200 rounded-md p-2 mb-10'>
            <div>
               img
            </div>
            <div>
               <h2 className='text-2xl font-bold'>Masud Rana</h2>
               <p>Natore, Bangladesh</p>
            </div>
         </div>
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-10 px-5 justify-between'>
            <div>
               <p className='font-semibold text-2xl'>70<small>kg</small></p>
               <p className='text-gray-500'>Weight</p>
            </div>
            <div>
               <p className='font-semibold text-2xl'>5.6"</p>
               <p className='text-gray-500'>Height</p>
            </div>
            <div>
               <p className='font-semibold text-2xl'>23<small>Yr</small></p>
               <p className='text-gray-500'>Age</p>
            </div>
         </div>
         <h1 className='text-2xl font-bold text-slate-600 mb-5'>Add a Break</h1>
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-10 px-5 justify-between'>
            <button className='text-gray-500 bg-white rounded-full w-12 h-12'>10m</button>
            <button className='text-gray-500 bg-white rounded-full w-12 h-12'>20m</button>
            <button className='text-gray-500 bg-white rounded-full w-12 h-12'>30m</button>
            <button className='text-gray-500 bg-white rounded-full w-12 h-12'>40m</button>
            <button className='text-gray-500 bg-white rounded-full w-12 h-12'>50m</button>
         </div>
         <h1 className='text-2xl font-bold text-slate-600 mb-5'>Daily Routine Details</h1>
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-7 pr-10 pl-5 justify-between'>
            <div>
               <span className='text-gray-500 font-bold'>Daily work Time</span>
            </div>
            <div>
               <span className='text-gray-500'>00</span>m
            </div>
         </div>
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-10 pr-10 pl-5 justify-between'>
            <div>
               <span className='text-gray-500 font-bold'>Break Time</span>
            </div>
            <div>
               <span className='text-gray-500'>00</span>m
            </div>
         </div>
         <button className='text-center text-2xl w-[85%] px-auto py-2 bg-green-700 hover:bg-green-900 text-white m-4 rounded-md'>Activity Completed</button>
      </div>
   );
};

export default SideCard;