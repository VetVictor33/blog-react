import { useQuery } from "graphql-hooks";
import ContentPreview from "../../components/ContentPreview/ContentPreview"
import { STORIES_QUERY } from "../../services/cms";
import { useState } from "react";
import Content from "../../components/Content/Content";

export default function Stories() {
    const [currentContent, setCurrentContent] = useState(null);
    const { loading, error, data } = useQuery(STORIES_QUERY, {
        variables: {
            limit: 10
        }
    });
    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";
    return (
        <main className="Stories">
            <>
                {data.allStories.map(story => {
                    return (
                        <ContentPreview key={story.id}
                            title={story.title}
                            date={story.originalPublishingDate}
                            preview={story.preview}
                            content={story.content}
                            currentContent={currentContent}
                            setCurrentContent={setCurrentContent}
                        />
                    )
                })}
                {!!currentContent && <Content currentContent={currentContent} />}

            </>
        </main>
    )
}