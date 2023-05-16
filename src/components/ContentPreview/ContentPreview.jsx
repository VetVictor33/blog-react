import './ContentPreview.css';

export default function ContentPreview({ title, date, preview, content, currentContent, setCurrentContent }) {
    return (
        <div className="ContentPreview"
            onClick={() => setCurrentContent((currentContent && currentContent.title) === title ? null : { title, content })}
        >
            <p>{title}</p>
            <p>{date}</p>
            <p>{preview}</p>
        </div>
    )
}