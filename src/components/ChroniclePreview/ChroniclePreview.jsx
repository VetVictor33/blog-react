import './ChroniclePreview.css';

export default function ChroniclePreview({ title, date, preview }) {
    return (
        <div className="ChroniclePreview">
            <p>{title}</p>
            <p>{date}</p>
            <p>{preview}</p>
        </div>
    )
}