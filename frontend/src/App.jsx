import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/Navbar';

function App() {
    return (
        <>
        <MovieProvider>
            <NavBar />
            <main className='main-content'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/favorites' element={<Favorites />}></Route>
                    <Route path='*' element={<PageNotFound />}></Route>
                </Routes>
            </main>
        </MovieProvider>
        </>
    );
}

export default App;
