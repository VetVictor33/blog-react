import { StructuredText } from 'react-datocms/structured-text';
import './Content.css'
import { Image } from 'react-datocms/image';

export default function Content({ currentContent }) {
    const { coverImage, title, structuredText } = currentContent.data;
    return (
        <div className="Content">
            <h1>{title}</h1>
            <div className='img-div'>
                <Image data={coverImage.responsiveImage} />
            </div>
            <StructuredText
                data={structuredText}
                renderBlock={({ record }) => {
                    switch (record.__typename) {
                        case "ImageRecord":
                            return < Image data={record.image.responsiveImage} />
                        default:
                            return null;
                    }
                }} />
        </div >
    )
}