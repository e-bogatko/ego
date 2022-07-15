import Header from './component'

const HeaderContainer = () => {
  const links = [
    { to: '/instriction', text: 'Инструкция' },
    { to: '/cards', text: 'Играть' },
    { to: '/', text: 'Настройки' }
  ]

  return <Header links={links} />
}

export const container = HeaderContainer
