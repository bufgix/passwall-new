import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import cn from 'classnames'
import styles from './index.module.scss'
import * as Icons from 'heroicons-react'

import Text from '../text'
import Button from '../button'

export const FORM_TYPES = {
  FREE: 'FREE',
  PRO: 'PRO'
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required()
})

export function TextInput({
  label,
  name,
  register,
  className,
  placeholder,
  errors,
  type = 'text',
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
        type={type}
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

export default function Form({ formType = FORM_TYPES.FREE }) {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors)
  const onSubmit = (data) => {
    console.log(errors)
    console.log(data)
  }

  return (
    <form
      className={styles.Form}
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >
      <Icons.ArrowLeft onClick={() => router.back()} />
      <Text tag="h3" theme="heromd" fancy={formType === FORM_TYPES.PRO}>
        {formType === FORM_TYPES.PRO
          ? 'Create a PRO account'
          : 'Create a free account'}
      </Text>
      <TextInput
        label="Full Name"
        name="name"
        placeholder="John Doe"
        register={register()}
        errors={errors.name}
      />
      <TextInput
        label="E-Mail"
        name="email"
        placeholder="hello@passwall.io"
        type="email"
        register={register()}
        errors={errors.email}
      />
      <TextInput
        label="Master Password"
        name="password"
        type="password"
        register={register()}
        errors={errors.password}
      />
      <TextInput
        label="Master Password Verify"
        name="passwordConfirm"
        type="password"
        register={register()}
        errors={errors.passwordConfirm}
      />
      <Button type="submit" value="Submit">
        <Text tag="p" theme="regular" className={styles.btn}>
          {formType === FORM_TYPES.PRO
            ? 'Continue to Payment'
            : 'Create My Account'}
        </Text>
      </Button>
    </form>
  )
}
