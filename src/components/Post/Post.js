import React from 'react';

const Post = ({post:{title,body,img},index}) => {
   return (
      <div className='p-5 bg-slate-200 rounded-md hover:bg-slate-300 hover:shadow-lg'>
         <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
         <img className='h-50 rounded-md hover:scale-105 duration-1000 pb-5' src={img} alt="blog post" />
         <p className='text-justify font-gray font-medium'>{ body}</p>
         
      </div>
   );
};

export default Post;