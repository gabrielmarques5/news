import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import './styles.css';

import { Header } from '../../components/Header';

export default function SeeNews() {
    const [data, setData] = useState(null);

    const params = useParams();

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente excluir essa noticia?");
    
        if (confirm) {
            await api.delete(`/news/$${params.id}`);
        }
    }

    useEffect(() => {
        async function fetchNews() {
            const response = await api.get(`/news/${params.id}`);
            setData(response.data);
        }

        fetchNews();
    }, []);

    return (
        <>
            <Header />

            <div className="container">
                <h6>Informativos</h6>
                <div className="line"></div>

                {
                    data &&
                    <div className="news">
                        <h3 className="news-title">{data.title}</h3>

                        <p className="data-news">4 de maio de 2023</p>

                        {/* <div className="cards">
                        <div className="card1"><img src="../../image/Compartilhar.svg" alt="" /></div>
                        <div className="card"><img src="../../image/Google+.svg" alt="" /></div>
                        <div className="card"><img src="../../image/Facebook.svg" alt="" /></div>
                        <div className="card"><img src="../../image/Twitter.svg" alt="" /></div>
                        <div className="card"><img src="../../image/whats.svg" alt="" /></div>
                    </div> */}

                        <main>

                            <p className="resume-news">{data.content}</p>
                        </main>
                    </div>
                }
            </div>
        </>
    )
}