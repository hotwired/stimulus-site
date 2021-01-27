const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownify = require('./_source/_filters/markdownify.js');
const sortBy = require('./_source/_filters/sortBy.js');
const where = require('./_source/_filters/where.js');

module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  plugins
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(syntaxHighlight);

  /* --------------------------------------------------------------------------
  filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addFilter('markdownify', markdownify);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);

  /* --------------------------------------------------------------------------
  BrowserSync settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setBrowserSyncConfig({
    files: [ // watch the files generated elsewhere
      '_public/assets/*.css',
      '_public/assets/*.js',
      '_public/assets',
      '!_public/assets/**/**.map'
    ],
    ui: false,
    logPrefix: false,
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  let markdownIt = require('markdown-it');
  let markdownItOptions = {
    html: true, // allow HTML markup
    typographer: true // fancy quotes
  };

  /* --------------------------------------------------------------------------
  Liquid settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ '_source/_assets/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ '_source/_assets/images': 'assets' });

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes'
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid'
  };
};