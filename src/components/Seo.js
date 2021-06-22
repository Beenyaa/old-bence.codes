import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
return(
    //primary meta tags
    <Helmet>
      <title content="Bence Gadányi"></title>
      <meta name="title" content="Bence Gadányi's Portfolio"/>
      <meta name="description" content="Bence Gadányi - Aspiring full-stack software engineer, from Hungary based in the UK. • Bence Gadanyi • Bence Gadányi • Gadányi Bence" />
      <meta name="image" content="/static/bence_animoji.png" />
      <meta name="author" content="Bence Gadányi"/>

      <meta name="og:title" content="Bence Gadányi's Portfolio"/>
      <meta property="og:url" content="https://bence.codes" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bence Gadányi's Portfolio" />
      <meta property="og:description" content="Bence Gadányi - Aspiring full-stack software engineer, from Hungary based in the UK. • Bence Gadanyi • Bence Gadányi • Gadányi Bence" />
      <meta property="og:image" content="/static/bence_animoji.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bence Gadányi's Portfolio" />
      <meta name="twitter:description" content="Bence Gadányi - Aspiring full-stack software engineer, from Hungary based in the UK. • Bence Gadanyi • Bence Gadányi • Gadányi Bence" />
      <meta name="twitter:image" content="/static/bence_animoji.png" />

      <meta name="google-site-verification" content="Ikq1f_qqi7yyulY4SvLERDjTKFMOj0pogf5p9ny-L_w"></meta>
      <link rel="preload" href="/static/chainbridge-8a69c245463eb89c4018f84547cf903a.jpg"/>
      <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    </Helmet>)
    }

    export default SEO

