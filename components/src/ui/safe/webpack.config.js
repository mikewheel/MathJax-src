const PACKAGE = require('../../../webpack.common.js');

module.exports = PACKAGE(
  'ui/safe',                          // the package to build
  '../../../../js',                   // location of the MathJax js library
  ['components/src/core/lib'],        // packages to link to
  __dirname                           // our directory
);
