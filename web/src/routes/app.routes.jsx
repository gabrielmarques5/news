import { Routes, Route } from 'react-router-dom';

import News from '../pages/News/Index';
import Login from '../pages/Login/Index';
import SeeNews from '../pages/SeeNews/index';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<News />} />
            <Route path='/login' element={<Login />} />
            <Route path='/seenews/:id' element={<SeeNews />} />
        </Routes>
    )
}