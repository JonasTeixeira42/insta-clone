import { Logo } from '../Logo'
import { Profile } from '../Profile'

import './styles.css'

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <div class="logo">
        <Logo />
      </div>
      <Profile
        url="https://source.unsplash.com/random"
        name="Kate Diaz"
        link="kate42"
      />
    </aside>
  )
}

export { Sidebar }
