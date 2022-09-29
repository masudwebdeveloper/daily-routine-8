import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Home></Home>
      <div className='my-10'>
        <h1 className='ml-7 text-3xl font-bold mb-5'>Answare and Questions</h1>
        <Blog></Blog>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
