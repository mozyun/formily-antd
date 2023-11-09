import { genStyleHook } from '../__builtins__'

export default genStyleHook('ArrayCards', (token) => {
  const { componentCls, antCls } = token
  const arrayBase = `${antCls}-formily-array-base`
  return {
    [componentCls]: {
      '&-item': {
        marginBottom: '10px !important',
      },

      [`${arrayBase}-copy`]: {
        marginInlineStart: 6,
      },
    },
  }
})
