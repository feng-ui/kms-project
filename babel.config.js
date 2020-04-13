module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDircetory: 'es',
        style: true
      }
    ]
  ]
}
