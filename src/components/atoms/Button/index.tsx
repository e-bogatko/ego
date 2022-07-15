import { FC, ReactNode } from 'react'
import stlye from './style.module.scss'

interface Props {
  onClick: () => void
  children?: ReactNode
}

const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button className={stlye.button} onClick={() => onClick()}>
      {children}
    </button>
  )
}

export default Button
