import React from 'react'
import styles from './index.module.css'

import Header from '../nav'

export default function LeftSide() {
  return (
    <div className={styles.leftSide}>
      <Header />
      <img className={styles.bgImage} src="/images/bg-image.png" alt="bg-image" />
    </div>
  )
}
