import React from 'react'

import SocialButton from 'components/SocialButton.jsx'

const App = () => (
  <header>
    <div className="content">
      <h1>
        {"Hello, I'm Leo!"}
      </h1>
      <div className="summary">
        {"I'm a Software Engineer who advocates for simplicity and readability, I strive for elegant solutions leveraging different languages and paradigms."}
      </div>
      <div className="social">
        <SocialButton
          name="github-alt"
          text="GitHub"
          url="https://github.com/kewitz"
        />
        <SocialButton
          name="angellist"
          text="Angel List"
          url="https://angel.co/leokewitz"
        />
        <SocialButton
          name="linkedin"
          text="LinkedIn"
          url="https://www.linkedin.com/in/kewitz/?locale=en_US"
        />
        <SocialButton
          name="envelope"
          text="E-Mail"
          url="mailto:leokewitz@gmail.com"
        />
      </div>
    </div>
  </header>
)

export default App
