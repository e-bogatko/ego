import { FC } from 'react'
import Game from '../../organisms/Game'
import style from './style.module.scss'

const Cards: FC = () => {
  return (
    <section className={style.section}>
      <Game />
    </section>
  )
}

export default Cards
