export const CHRONICLES_QUERY = `query MyQuery {
  allChronicles {
    id
    originalPublishingDate
    description {
      description
    }
    slug
    title
    structuredText {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image {
            alt
            responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
              alt
              aspectRatio
              base64
              bgColor
              height
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
        }
      }
    }
    coverImage {
      responsiveImage(fallbackLocales: en, locale: en, sizes: "") {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
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