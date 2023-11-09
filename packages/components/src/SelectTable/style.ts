import { genStyleHook } from './../__builtins__'

export default genStyleHook('Select-table', (token) => {
  const { componentCls } = token
  return {
    [componentCls]: {
      [`${componentCls}-search`]: {
        marginBottom: 8,
      },
    },
  }
})
