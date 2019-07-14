/* eslint-disable */
const path = require('path');

module.exports = ({ file, options }) => {
  const production = options.mode === 'production';
  return {
    map: !production && 'inline',
    plugins: [
      require('postcss-import')({
        root: file.dirname,
      }),
      require('postcss-nesting')(),
      require('postcss-base64')({
        extensions: ['.png', '.gif'],
        root: 'src/assets/images',
      }),
      require('postcss-cssnext')({ features: { nesting: false } }),
    ].concat(production && [
      require('cssnano')({
        safe: true,
        autoprefixer: false,
        discardComments: { removeAll: true },
      }),
    ]),
  };
};
