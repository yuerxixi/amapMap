module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100,
      propWhiteList: [],
      minPixelValue: 2
    },
    "postcss-px2rem-exclude": {
      "remUnit": 32,
      "exclude": /node_modules/i

}
  }
}
