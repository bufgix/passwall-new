import React from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

export default function Card({ border = 'normal', children, ...props }) {
  return (
    <div className={cn(styles.cardWrapper, border)} {...props}>
      {children}
    </div>
  )
}
