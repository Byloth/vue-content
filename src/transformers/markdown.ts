// @ts-nocheck

import { parse } from '../markdown-parser'
import type { MarkdownOptions } from '../types'

const importPlugin = async (p: [string, any]) => ([
  await import(/* @vite-ignore */ p[0]).then(res => res.default || res),
  typeof p[1] === 'object' ? { ...p[1] } : p[1]
])

export default {
  name: 'markdown',
  extentions: ['.md'],
  parse: async (_id, content, options) => {
    const config: MarkdownOptions = { ...options.content?.markdown || {} }
    config.rehypePlugins = await Promise.all((config.rehypePlugins || []).map(importPlugin))
    config.remarkPlugins = await Promise.all((config.remarkPlugins || []).map(importPlugin))

    const parsed = await parse(content, config)

    return {
      ...parsed.meta,
      body: parsed.body,
      _type: 'markdown',
      _id
    }
  }
}
