import { ButtonHTMLAttributes, FC } from 'react'

import style from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  ...otherProps
}) => {
  return (
    <button className={style.button} type={type} {...otherProps}>
      {children}
    </button>
  )
}
