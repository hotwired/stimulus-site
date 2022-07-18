/* ----------------------------------------------------------------------------
https://github.com/hotwired/stimulus-site backs the site living at: https://stimulus.hotwired.dev/

The problem is that the documentation lives here: https://github.com/hotwired/stimulus/tree/master/docs
(which is the documentation site.). We want to make it easy for people to make PRs to the documentation site.

So we need to passage the page.inputPath URL
---------------------------------------------------------------------------- */

module.exports = {
  githubDocsLink: (value) => {
    return value.replace("_source/", "")
  }
};
