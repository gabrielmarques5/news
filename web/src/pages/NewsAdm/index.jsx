import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { NewsBlock } from '../../components/NewsBlock';

export default function NewsAdm() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const response = await api.get(`/news`);
            setNews(response.data);
        }

        fetchNews();
    }, []);

    return (
        <>

            <main>

                <div className="container">
                    <h6>Últimas notícias</h6>
                    <div className="line"></div>
                    <Link className='addnews' to='/addnews'>Adicionar Notícia</Link>

                    <div className='start'>
                        {
                            news.map(news => (
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