import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article, author }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const seo = {
    title: title,
    description: description,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    author: author,
  }

  return (
      //primary meta tags
    <Helmet>
      <title content={seo.title}></title>
      <meta name="title" content={seo.title}/>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author}/>

      <meta name="og:title" content={seo.title}/>
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="website" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <meta name="google-site-verification" content="Ikq1f_qqi7yyulY4SvLERDjTKFMOj0pogf5p9ny-L_w"></meta>
      <link rel="preload" href="/static/chainbridge-8a69c245463eb89c4018f84547cf903a.jpg"/>
      <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  siteAuthor: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  author: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        siteAuthor: author
      }
    }
  }
`