import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { useLocation } from 'react-router-dom'
import style from './style.module.scss'
interface Props {
  to: string
  text: string
}

const NavLink: FC<Props> = ({ to, text }) => {
  const location = useLocation()
  return (
    <Link
      to={to}
      className={cn(style.link, {
        [style.active]: location.pathname === to
      })}
    >
      {text}
    </Link>
  )
}

export default NavLink
