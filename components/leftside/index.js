import React from 'react'
import styles from './index.module.css'

import Header from '../nav'
import { DownloadButton } from '../button'

export default function LeftSide() {
  return (
    <div className={styles.leftSide}>
      <Header />
      <img
        className={styles.bgImage}
        src="/images/bg-image.png"
        alt="bg-image"
      />
      <img className={styles.logo} src="/images/passwall-logo.png" alt="logo" />
      <div className={styles.dowloadSection}>
        <DownloadButton>
          <a href="#">MacOS</a>
        </DownloadButton>
      </div>
    </div>
  )
}
