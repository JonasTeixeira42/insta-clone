import './styles.css'

const Avatar = ({ url, size = 'normal' }) => {
  return (
    <div className={`avatar ${size}`}>
      <img src={url} alt="" className="img" />
    </div>
  )
}

export { Avatar }
