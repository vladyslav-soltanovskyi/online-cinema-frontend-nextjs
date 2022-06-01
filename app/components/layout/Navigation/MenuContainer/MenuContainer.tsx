import { FC } from 'react'
import { GenreMenu } from './genre/GenreMenu'
import { Menu } from './Menu'
import { firstMenu, userMenu } from './menu.data'

export const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  )
}
