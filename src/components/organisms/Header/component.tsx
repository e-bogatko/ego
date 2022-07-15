import { FC } from 'react'
import style from './style.module.scss'
import NavLink from '../../atoms/NavLink'
interface link {
  to: string
  text: string
}

interface Props {
  links: link[]
}

const Header: FC<Props> = ({ links }) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        {links.map((link) => (
          <NavLink to={link.to} text={link.text} key={link.to} />
        ))}
      </div>
    </header>
  )
}

export default Header
