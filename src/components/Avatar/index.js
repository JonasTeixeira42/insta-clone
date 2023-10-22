import './styles.css'

const Avatar = ({ url }) => {
  return (
    <div className="avatar">
      <img src={url} alt="" className="img" />
    </div>
  )
}

export { Avatar }
