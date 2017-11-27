import React, { createElement } from 'react'
import md from 'markdown-it'
import mdDecorate from 'markdown-it-decorate'
import mdTraverse from 'markdown-it-traverse'
import * as components from './markdown/index'

const parser = md({ breaks: true, html: true, typographer: true }).use(mdDecorate)

const getTokenName = ({ type }) =>
  type.split('_').map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join('')

const traverse = (tokens = [], level = 0) =>
  tokens.reduce((result, token, index) => {
    const component = components[getTokenName(token)]
    const children = token.children ? traverse(token.children, level + 1) : null

    if (!component) {
      return result
    }

    return [
      ...result,
      createElement(component, { ...token, index, key: `${level}.${index}` }, children),
    ]
  }, [])

const render = (content) => {
  const tokens = mdTraverse(parser.parse(content || ''))

  return traverse(tokens)
}

const Markdown = ({ children }) => (
  <div>
    {render(children)}
  </div>
)

export default Markdown
