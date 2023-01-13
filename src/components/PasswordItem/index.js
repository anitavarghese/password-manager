import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePwd} = props
  const {id, website, username, password, isChecked} = passwordDetails
  const LETTER = username[0].toUpperCase()

  const onDelete = () => {
    deletePwd(id)
  }

  return (
    <li className="list-container">
      <div className="initial-user-details-container">
        <div className="initial-container">
          <p className="initial">{LETTER}</p>
        </div>
        <div className="user-details-container">
          <p className="text">{website}</p>
          <p className="text">{username}</p>
          {isChecked ? (
            <p className="text">{password} </p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star"
            />
          )}
        </div>
      </div>

      <div className="delete-container">
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="website-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
