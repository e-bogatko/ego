import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './style.module.scss'

interface Props {
  to: string
  text: string
}

const LinkComponent: FC<Props> = ({ to, text }) => {
  const className = cn(style.link,{
    
  })
  return <Link to={to} className={className}>{text}</Link>
}

export default LinkComponent
