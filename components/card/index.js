import React from 'react'
import cn from 'classnames'
import * as Icons from 'heroicons-react'
import styles from './index.module.scss'

import Text from '../text'

export function FreeCard() {
  return (
    <>
      <div className={cn(styles.cardHeader)}>
        <Text tag="H2" theme="heromd">
          Free
        </Text>
      </div>
      <ul className={cn(styles.cardBody)}>
        <li>
          <Icons.Users/>
          <Text tag="p" theme="medium">
            Logins
          </Text>
        </li>
        <li>
          <Text tag="p" theme="medium">
            Logins
          </Text>
        </li>
        <li>
          <Text tag="p" theme="medium">
            Logins
          </Text>
        </li>
      </ul>
    </>
  )
}

export default function Card({ border = 'normal', children, ...props }) {
  return (
    <div className={cn(styles.cardWrapper, border)} {...props}>
      {children}
    </div>
  )
}
