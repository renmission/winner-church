import React, { ReactNode, FC } from 'react'
import Header from './common/Header'

type AppContainerProps = {
    children: ReactNode;
}

const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default AppContainer