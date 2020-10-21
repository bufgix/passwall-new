import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import styles from './index.module.scss'
import * as Icons from 'heroicons-react'

import Text from '../text'
import Button from '../button'

export function TextInput({
  label,
  name,
  register,
  className,
  placeholder,
  errors,
  ...props
}) {
  return (
    <div className={cn(styles.input, className)}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        ref={register}
        className={cn({ error: errors })}
        {...props}
      />
      {errors && (
        <Text tag="span" theme="small">
          {errors.message}
        </Text>
      )}
    </div>
  )
}

export default function Form() {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
      <Icons.ArrowLeft onClick={() => router.back()} />
      <Text tag="h3" theme="heromd" fancy>
        Create a PRO account
      </Text>
      <TextInput
        label="Full Name"
        name="name"
        placeholder="John Doe"
        register={register({
          required: {
            value: true,
            message: 'Name is required'
          }
        })}
        errors={errors.name}
      />
      <Button type="submit" value="Submit">
        <Text tag="p">go</Text>
      </Button>
    </form>
  )
}
