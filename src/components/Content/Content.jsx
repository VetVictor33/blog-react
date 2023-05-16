import './Content.css'

export default function Content({ currentContent }) {
    const { title, content } = currentContent;
    return (
        <div className="Content">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}