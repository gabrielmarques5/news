import { Routes, Route } from 'react-router-dom';

import NewsAdm from '../pages/NewsAdm';
import AddNews from '../pages/AddNews';
import SeeNews from '../pages/SeeNews';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<NewsAdm />} />
            <Route path='/addNews' element={<AddNews />} />
            <Route path='/seenews/:id' element={<SeeNews />} />
        </Routes>
    )
}