/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css'

const Information = ({ name, link }) => {
  return (
    <div className="information">
      <h3 className="name">{name}</h3>
      <a href="#" className="link">
        @{link}
      </a>

      <ul className="numbers">
        <li className="item">
          <span className="number">128K</span>
          <span className="subtitle">Followers</span>
        </li>
        <li className="item">
          <span className="number">42</span>
          <span className="subtitle">Posts</span>
        </li>
        <li className="item">
          <span className="number">960</span>
          <span className="subtitle">Following</span>
        </li>
      </ul>
    </div>
  )
}

export { Information }
