const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require('markdown-it-anchor');
const markdownItToc = require('markdown-it-toc-done-right');
const sortBy = require('./_source/_filters/sortBy.js');
const where = require('./_source/_filters/where.js');

module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  plugins & custom filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);

  /* --------------------------------------------------------------------------
  BrowserSync settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    logPrefix: false,
    files: [ // watch the files generated elsewhere
      '_public/assets/*.css',
      '_public/assets/*.js',
      '_public/assets',
      '!_public/assets/**/**.map'
    ],
    server: { // make URLs work without a .html extension
      baseDir: "_public",
      serveStaticOptions: {
          extensions: ["html"]
      }
    },
    snippetOptions: {
      rule: { // put the snippet in the head for Turbo happiness
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    },
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true, // allow HTML markup
    typographer: true // fancy quotes
  };
  const markdownLib = markdownIt(markdownItOptions);
  markdownLib.use(markdownItAnchor, { // add anchors to headings
    level: '2',
    permalink: 'true',
    permalinkClass: 'anchor',
    permalinkSymbol: '﹟',
    permalinkBefore: 'true'
  });
  markdownLib.use(markdownItToc, { // make a TOC with ${toc}
    level: '2',
    listType: 'ul'
  });

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.setLibrary('md', markdownLib);
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
    templateFormats: ['html', 'md', 'liquid', 'njk'],
    htmlTemplateEngine: 'liquid'
  };
};