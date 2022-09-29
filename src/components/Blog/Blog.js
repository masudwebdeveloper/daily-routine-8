import React from 'react';
import Post from '../Post/Post';
import './Blog.css';


const Blog = () => {
   const blogPosts = [
      {
         title: "How does React Works",
         body: `React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes`,
         img: "https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-and-why-reactjs/Images/image005.jpg"
      },
      {
         title: "what is difference between props and state in react",
         body: `Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component`,
         img: "https://miro.medium.com/max/1400/0*wGaUQvXc4HymloHn.jpg"
      },
      {
         title: "What is done except loading use effect data",
         body: `With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you'll eventually learn everything makes a lot of sense`,
         img: "https://daveceddia.com/images/useEffect-hook.png"
      },
   ]
   return (
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-5'>
         {
            blogPosts.map((post, index) => (
               <Post key={index} index={index} post={post}></Post>
            ))
         }
      </div>
   );
};

export default Blog;