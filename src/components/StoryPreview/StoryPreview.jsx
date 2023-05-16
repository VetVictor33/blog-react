import './StoryPreview.css';

export default function StoryPreview({ title, date, preview }) {
    return (
        <div className="StoryPreview">
            <p>{title}</p>
            <p>{date}</p>
            <p>{preview}</p>
        </div>
    )
}