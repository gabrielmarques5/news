import './styles.css';

export function NewsBlock({ data, ...rest }) {
    return (
            <button className="news" {...rest}>
                <h3 className="news-title">{data.title}</h3>

                <div className="news-division"></div>

                <p className="data-news">{data.created_at}</p>

                <p className="resume-news">{data.content}</p>
            </button>
        )
}