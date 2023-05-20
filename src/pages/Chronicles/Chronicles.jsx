import { useQuery } from "graphql-hooks";
import { useEffect, useState } from "react";
import ContentPreview from "../../components/ContentPreview/ContentPreview";
import Content from '../../components/Content/Content';
import { CHRONICLES_QUERY } from "../../services/cms";
import './Chronicles.css';

export default function Chronicles() {
    const [currentContent, setCurrentContent] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { loading, error, data } = useQuery(CHRONICLES_QUERY, {
        variables: {
            limit: 10
        }
    });

    if (loading) return "Carregando...";
    if (error) return "Aconteceu algo de errado";

    const { allChronicles } = data;

    const newPage = (change) => {
        if (change === '+' && activeIndex < 0) {
            setActiveIndex(activeIndex + 1)
        } else if (change === '-' && activeIndex > ((allChronicles.length - 3) * -1)) {
            setActiveIndex(activeIndex - 1)
        }
    }

    const needCarrousel = allChronicles.length > 3 ? true : false

    return (
        <main className="Chronicles">
            <div className="chronicles-wrapper">
                <div className="carrousel">
                    <div className="carrousel-wrapper"
                        style={{ transform: `translateX(${activeIndex * 33}%)` }}
                    >
                        {allChronicles.map(data => {
                            return (
                                <ContentPreview key={data.id}
                                    data={data}
                                    currentContent={currentContent}
                                    setCurrentContent={setCurrentContent}
                                />
                            )
                        })}
                    </div>
                    {needCarrousel && <> <button onClick={() => { newPage('+') }} >{'<'}</button>
                        <button onClick={() => { newPage('-') }} >{'>'}</button></>}
                </div>
            </div>
            {!!currentContent && <Content currentContent={currentContent} />}
        </main>
    )
}