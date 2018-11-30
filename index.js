/**
 * Simple extension and merge for the 'default' ReactJS-Application
 */

module.exports = () => ({
  presets: [require('@babel/preset-env'), require('@babel/preset-react')],
  plugins: [require('babel-plugin-styled-components')]
});
