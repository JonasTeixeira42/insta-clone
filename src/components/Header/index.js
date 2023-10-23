import { Button } from '../Button'
import { Message } from '../icons/Message'
import { Notification } from '../icons/Notification'

import './styles.css'

const Header = () => {
  return (
    <header className="header">
      <Notification />
      <Message />
      <Button>+ Create new post</Button>
    </header>
  )
}

export { Header }
