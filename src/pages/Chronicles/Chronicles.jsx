import { useQuery } from "graphql-hooks";
import { useState } from "react";
import ChroniclePreview from "../../components/ChroniclePreview/ChroniclePreview";
import Content from '../../components/Content/Content';
import { CHRONICLES_QUERY } from "../../services/cms";
import './Chronicles.css';

export default function Chronicles() {
    const [currentContent, setCurrentContent] = useState(null);
    const { loading, error, data } = useQuery(CHRONICLES_QUERY, {
        variables: {
            limit: 10
        }
    });
    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";
    return (
        <div className="Chronicles">
            <div className="chronicles-wrapper">
                {data.allChronicles.map(story => {
                    return (
                        <>
                            <ChroniclePreview key={story.id}
                                title={story.title}
                                date={story.originalPublishingDate}
                                preview={story.preview}
                                content={story.content}
                                currentContent={currentContent}
                                setCurrentContent={setCurrentContent}
                            />
                        </>
                    )
                })}
            </div>
            {!!currentContent && <Content currentContent={currentContent} />}
        </div>
    )
}