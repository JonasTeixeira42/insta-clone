import { Reels } from '../icons/Reels'
import { Logout } from '../icons/Logout'
import { Explore } from '../icons/Explore'
import { FeedIcon } from '../icons/FeedIcon'
import { Settings } from '../icons/Settings'

import './styles.css'

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="option-wrapper">
          <FeedIcon /> Feed
        </li>
        <li className="option-wrapper">
          <Explore /> Explore
        </li>
        <li className="option-wrapper">
          <Reels /> Reels
        </li>
        <li className="option-wrapper">
          <Settings /> Settings
        </li>
      </ul>
      <div className="option-wrapper">
        <Logout /> Logout
      </div>
    </nav>
  )
}

export { Menu }
