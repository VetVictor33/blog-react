import './ContentPreview.css';

export default function ContentPreview({ currentContent, setCurrentContent, data }) {
    const { title, originalPublishingDate, description } = data;
    const date = originalPublishingDate;
    const preview = description.description

    return (
        <div className="ContentPreview"
            onClick={() => setCurrentContent((currentContent && currentContent.data.title) === title ? null : { data })}
        >
            <p>{title}</p>
            <p>{date}</p>
            <p>{preview}</p>
        </div>
    )
}