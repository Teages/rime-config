import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ignores => [...ignores, './skills/**'],
  rules: {
    curly: ['error', 'all'],
  },
})
