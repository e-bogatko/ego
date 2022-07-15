import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Icon: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default Icon
