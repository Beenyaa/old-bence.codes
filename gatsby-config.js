/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Bence Gadanyi",
    description: "Hello World, my name is Bence Gadányi. I am a final year Undergraduate Computer Science Student and aspiring Full-Stack Developer. Check out my website! ✌️😁",
    author: "@Bence Gadányi",
    siteUrl: "https://bence.codes",
    image: "./src/images/bence_animoji.png"
},

  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "bence.codes",
      short_name: "bence",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "src/images/bence_animoji.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    },
  },
],
}