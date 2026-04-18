import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ignores => [...ignores, './skills/**', '.kilo/**'],
  rules: {
    curly: ['error', 'all'],
  },
})
