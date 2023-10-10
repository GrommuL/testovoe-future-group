import { FC, InputHTMLAttributes, ReactNode } from 'react'

import style from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
}

export const Input: FC<InputProps> = ({
  leftIcon,
  type = 'text',
  ...otherProps
}) => {
  return (
    <div className={style.box}>
      {leftIcon}
      <input className={style.input} type={type} {...otherProps} />
    </div>
  )
}
