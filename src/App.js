import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ReactQueryPage from './ReactQueryPage';
import HomePage from './HomePage';
import NormalPage from './NormalPage';

function App() {
   return (
      <div className='App'>
         <nav style={{ backgroundColor: 'beige', padding: '20px' }}>
            <Link to='/' style={{ marginRight: '10px' }}>
               HomePage
            </Link>
            <Link to='/normalpage' style={{ marginRight: '10px' }}>
               Normal Page
            </Link>
            <Link to='/react-query'>React Query</Link>
         </nav>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/react-query' element={<ReactQueryPage />} />
            <Route path='/normalpage' element={<NormalPage />} />
         </Routes>
      </div>
   );
}

export default App;
