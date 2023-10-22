import { Avatar } from '../Avatar'
import { Information } from '../Information'

import './styles.css'

const Profile = ({ name, url, link }) => {
  return (
    <div className="profile">
      <Avatar url={url} />
      <Information name={name} link={link} />
    </div>
  )
}

export { Profile }
