module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
          '@validators': './src/validators/*',
          '@errors': './src/errors/*',
          '@methods/*': './src/methods/*'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
