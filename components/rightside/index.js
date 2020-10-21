import React from 'react'
import styles from './index.module.scss'

export default function RightSide({ children }) {
  return <div className={styles.content}>
    {children}
  </div>
}
