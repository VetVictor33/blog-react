import { useQuery } from 'graphql-hooks';
import './App.css'
import { StructuredText } from 'react-datocms/structured-text';

const HOMEPAGE_QUERY = `query Article($limit: IntType) {
  allStories(first: $limit) {
    id
    title
    preview
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10
    }
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <>
      <div className="App">
        {data.allStories.map(article => (
          <article>
            <h6>{article.title}</h6>
            <p>{article.preview}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default App
