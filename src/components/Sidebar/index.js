import { Logo } from '../Logo'
import { Avatar } from '../Avatar'

import './styles.css'

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <div class="logo">
        <Logo />
      </div>
      <Avatar url="https://source.unsplash.com/random" />
    </aside>
  )
}

export { Sidebar }
