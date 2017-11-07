import fs from 'fs'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import renderTemplate from 'template'
import App from 'components/App.jsx'

const flow = (...fns) => arg => fns.reduce((pipe, fn) => fn(pipe), arg)
const writeFile = data => fs.writeFileSync('index.html', data)

flow(renderToStaticMarkup, renderTemplate, writeFile)(<App />)
