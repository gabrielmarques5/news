import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

import { api } from '../../services/api';

import { NewsBlock } from '../../components/NewsBlock';

export default function News() {
    const [news, setNews] = useState([]);

    const navigation = useNavigate();

    function handleDetails(id) {
        navigation(`/seenews/${id}`)
    }

    useEffect(() => {
        async function fetchNews() {
            const response = await api.get(`/news`);
            setNews(response.data);
            console.log(response);
        }

        fetchNews();
    }, []);

    return (
        <>
            <main>
                <div className="container">
                    <h6>Últimas notícias</h6>
                    <div className="line"></div>

                    <div className='start'>
                        {
                            news.map(news => (
                                console.log(news),

                                <NewsBlock 
                                    key={String(news.id)}
                                    data={news}
                                    onClick={() => handleDetails(news.id)} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}