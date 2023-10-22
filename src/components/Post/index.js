import { Avatar } from '../Avatar'
import { Like } from '../icons/Like'
import { Share } from '../icons/Share'
import { Comment } from '../icons/Comment'
import { Bookmark } from '../icons/Bookmark'

import './styles.css'

const Post = ({ url, name, time, background }) => {
  return (
    <article className="post">
      <div className="author">
        <Avatar url={url} size="small" />
        <div className="info">
          <h3 className="name">{name}</h3>
          <span className="time">{time} ago</span>
        </div>
      </div>
      <img src={background} alt="" className="background" />
      <div className="action">
        <div className="icon">
          <Like />
        </div>
        <div className="icon">
          <Comment />
        </div>
        <div className="icon">
          <Share />
        </div>
        <div className="icon bookmark">
          <Bookmark />
        </div>
      </div>
    </article>
  )
}

export { Post }
