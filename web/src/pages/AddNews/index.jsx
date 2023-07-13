import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

import { api } from '../../services/api';

export default function AddNews() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    async function handleAddNews() {
        await api.post("/news", {
            title,
            content
        })
        
        navigate(-1)
    }

    function cancel() {
        navigate(-1)
    }

    return (
        <>
            <form method="POST">
                <div className="title">

                    <label className='news-label' for="title">
                        <h1>Escolha um titulo para sua publicação:</h1>
                    </label>
                    <input className='input-news' type="text" name="title" placeholder="Título:" required onChange={e => setTitle(e.target.value)} />

                </div>

                <div className="content">

                    <label className='news-label'>
                        <h1 className='content-title'>Adicione o conteúdo da publicação:</h1>
                    </label>

                    <textarea name="content" id="content" cols="30" rows="10" placeholder="Conteúdo:" required onChange={e => setContent(e.target.value)}></textarea>

                </div>

                <button className="cancel" type="submit" onClick={cancel}>Cancelar</button>
                <button className="send" type="submit" onClick={handleAddNews}>Enviar</button>
            </form>
        </>
    )
}
