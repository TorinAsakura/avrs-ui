export const attrsToProps = attrs =>
  (attrs || []).reduce((result, pairs) => {
    if (pairs[0] && pairs[1]) {
      return {
        ...result,
        [pairs[0]]: pairs[1],
      }
    }

    return result
  }, {})
