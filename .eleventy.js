module.exports = function (eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/public");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  // Add a filter for sorting palettes (descending by date)
  eleventyConfig.addCollection("palettes", function (collectionApi) {
    return collectionApi.getFilteredByTag("palettes").sort(function (a, b) {
      return b.date - a.date;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
    // Set Liquid as the default template engine
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
