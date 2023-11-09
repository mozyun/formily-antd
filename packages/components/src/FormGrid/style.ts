import { genStyleHook } from './../__builtins__'
export default genStyleHook('Form-grid', (token) => {
  const { componentCls } = token
  return {
    [`${componentCls}-layout`]: {
      display: 'grid',
    },
  }
})
