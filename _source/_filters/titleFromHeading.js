
/* ----------------------------------------------------------------------------
grab the contents of the first element in a Markdown entry
---------------------------------------------------------------------------- */
module.exports = function titleFromHeading(value) {
  const lines = value.split('\n');
  const heading = lines[0].replace(/(<([^>]+)>)/gi, "");
  return heading;
};
