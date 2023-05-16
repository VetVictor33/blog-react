export const CHRONICLES_QUERY = `query Chronicles($limit: IntType) {
    allStories(first: $limit) {
      id
      title
      originalPublishingDate
      preview
      keywords
      content
    }
  }`;
export const STORIES_QUERY = `query Stories($limit: IntType) {
    allStories(first: $limit) {
      id
      title
      originalPublishingDate
      preview
      keywords
      content
    }
  }`;