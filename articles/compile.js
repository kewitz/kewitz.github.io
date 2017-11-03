const fs = require('fs')
const glob = require('glob')
const md = require('markdown-it')({
  html: true,
  linkify: true,
})

const kebabCase = string =>
  string
    .replace(/[^\w\d\s\-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()

const parseHeaders = header =>
  header
    .split('\n')
    .reduce((acc, field) => {
      const [key, ...values] = field.split(':')
      return Object.assign(acc, { [key]: values.join('').trim() })
    }, {})

const parse = options => path => {
  const article = fs.readFileSync(path, { encoding: 'UTF-8' })
  const [header, ...text] = article.split('\n\n')
  const body = md.render(text.join('\n\n'))
  const fields = parseHeaders(header)
  const id = kebabCase(fields.title)

  return Object.assign({}, options.defaults, fields, { body, id, path })
}

const byDate = (a, b) => (a.date > b.date ? -1 : 1)

const read = ({ dir = './articles/**/*.md', defaults }) =>
  glob
    .sync(dir)
    .map(parse({ defaults }))
    .sort(byDate)

module.exports = read
