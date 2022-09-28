import React, { useEffect, useState } from 'react';
import './SideCard.css';
import profile from '../images/profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideCard = ({ times }) => {
   const [durations, setDurations] = useState([]);
   const [breaksTime, setBreaksTime] = useState(0);
   useEffect(() => {
      fetch('break.json')
         .then(res => res.json())
         .then(data => setDurations(data))
   }, [])
   let time = 0;
   for (const card of times) {
      const currentTime = parseInt(card.duration);
      time += currentTime;
   }
   const handleBreak = (breakTimeCard) => {
      let demo = 0;
      const getBreakTime = localStorage.getItem('breaktime');
      if (getBreakTime) {
         demo = getBreakTime;
         setBreaksTime(demo);
      }
         const newBreakTime = breakTimeCard.duration;
         setBreaksTime(newBreakTime);
         localStorage.setItem('breaktime', newBreakTime);

   }

   const toastHandle = () => {
      toast("Activity Completed");
   }
   return (
      <div className='sticky top-0'>
         <ToastContainer></ToastContainer>
         <div className='flex gap-4 bg-stone-200 rounded-md p-2 mb-10'>
            <div>
               <img className='w-14 h-14 rounded-full border-' src={profile} alt="" />
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
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-10 px-5 justify-between items-center'>
            {
               durations.map(timeDuration => <buttton onClick={() => handleBreak(timeDuration)} className='text-gray-500 bg-white rounded-full w-12 h-12 text-center pt-3 cursor-pointer'>{timeDuration.duration}m</buttton>)
            }
         </div>
         <h1 className='text-2xl font-bold text-slate-600 mb-5'>Daily Routine Details</h1>
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-7 pr-10 pl-5 justify-between'>
            <div>
               <span className='text-gray-500 font-bold'>Daily work Time</span>
            </div>
            <div>
               <span className='text-gray-500'>{time}</span>m
            </div>
         </div>
         <div className='flex gap-4 bg-stone-200 rounded-md py-2 mb-10 pr-10 pl-5 justify-between'>
            <div>
               <span className='text-gray-500 font-bold'>Break Time</span>
            </div>
            <div>
               <span className='text-gray-500'>{breaksTime}</span>m
            </div>
         </div>
         <button onClick={toastHandle} className='text-center text-2xl w-[85%] px-auto py-2 bg-green-700 hover:bg-green-900 text-white m-4 rounded-md'>Activity Completed</button>
      </div>
   );
};

export default SideCard;