import React from 'react'

const SocialButton = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
  >
    <i className={`fa fa-${name}`} />
  </a>
)

export default SocialButton
