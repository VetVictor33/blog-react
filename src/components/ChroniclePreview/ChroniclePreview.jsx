import './ChroniclePreview.css';

export default function ChroniclePreview({ title, date, preview, content, currentContent, setCurrentContent }) {
    return (
        <div className="ChroniclePreview"
            onClick={() => setCurrentContent((currentContent && currentContent.title) === title ? null : { title, content })}
        >
            <p>{title}</p>
            <p>{date}</p>
            <p>{preview}</p>
        </div>
    )
}