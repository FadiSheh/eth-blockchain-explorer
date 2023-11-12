import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './style.css'

function Footer () {
  return (
    <footer>
      <p>© 2023 Alchemy Project</p>
      <div className='footer-right'>
        <span>Created by FadiSheh</span>
        <a
          href='https://github.com/fadisheh'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
