import './StoryPreview.css';

export default function StoryPreview({ title, date, preview, content, currentContent, setCurrentContent }) {
    return (
        <div className="StoryPreview"
            onClick={() => setCurrentContent((currentContent && currentContent.title) === title ? null : { title, content })}
        >
            <p>{title}</p>
            <p>{date}</p>
            <p>{preview}</p>
        </div>
    )
}