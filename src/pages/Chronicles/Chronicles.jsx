import { useQuery } from "graphql-hooks";
import { CHRONICLES_QUERY, STORIES_QUERY } from "../../services/cms"
import ChroniclePreview from "../../components/ChroniclePreview/ChroniclePreview";

export default function Chronicles() {
    const { loading, error, data } = useQuery(STORIES_QUERY, {
        variables: {
            limit: 10
        }
    });
    if (loading) return "Loading...";
    if (error) return "Something Bad Happened";

    console.log(data)
    return (
        <div className="Chronicles">
            {data.allStories.map(story => {
                return (
                    <ChroniclePreview key={story.id} title={story.title} date={story.originalPublishingDate} preview={story.preview} />
                )
            })}
        </div>
    )
}