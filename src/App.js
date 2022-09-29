import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Home></Home>
      <div className='my-10'>
        <h1>Answare and Questions</h1>
        <Blog></Blog>
      </div>

    </div>
  );
}

export default App;
