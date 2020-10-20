import React from 'react'
import { PAGES } from '../../constants'

import styles from './index.module.css'

import Wlink from "../wlink"

function Nav() {
  return (
    <nav className={styles.nav}>
      {Object.keys(PAGES).map((key) => {
        const PAGE = PAGES[key]
        return (
          <Wlink href={PAGE.path} key={`link-${key}`}>
            {PAGE.name}
          </Wlink>
        )
      })}
    </nav>
  )
}

export default Nav
