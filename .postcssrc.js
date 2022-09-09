module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 160,
      propList: ['*'],
      unitPrecision: 5,
      replace: true
    }
  }
}
