import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    userList: [],
    isChecked: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  toggleCheck = () => {
    const {isChecked} = this.state
    this.setState({
      isChecked: !isChecked,
    })
  }

  addUser = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput, isChecked} = this.state
    const newUser = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      Checked: isChecked,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  deletePwd = id => {
    const {userList} = this.state
    const filteredList = userList.filter(eachUser => eachUser.id !== id)
    this.setState({userList: filteredList})
  }

  renderNoPasswordImageContainer = () => {
    const {userList} = this.state
    return (
      <div className="no-pwd-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
          alt="no passwords"
          className="no-pwd-image"
        />
        <p className="password">No Passwords</p>
      </div>
    )
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      userList,
      isChecked,
    } = this.state
    console.log(isChecked)

    const searchResults = userList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="add-new-pwd-image-container">
          <div className="add-new-pwd-container">
            <h1 className="heading">Add New Password</h1>
            <form className="form-container" onSubmit={this.addUser}>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                    className="website-image "
                  />
                </div>

                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteInput}
                  value={websiteInput}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="website-image "
                  />
                </div>

                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="website-image "
                  />
                </div>

                <input
                  type="password"
                  className="input-box"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="pwd-manager-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="pwd-manager"
            />
          </div>
        </div>
        <div className="password-container">
          <div className="heading-search-container">
            <div className="password-count-container">
              <h1 className="heading">Your Passwords</h1>
              <p className="pwd-count">{userList.length}</p>
            </div>
            <div className="search-container">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                  className="search-image "
                />
              </div>

              <input
                type="search"
                className="input-box"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-pwd-container">
            <input type="checkbox" id="showPwd" onClick={this.toggleCheck} />
            <label htmlFor="showPwd" className="password">
              Show Passwords
            </label>
          </div>
          <div className="list-of-passwords-container">
            {searchResults.length > 0 ? (
              <ul className="list-of-users-container">
                {searchResults.map(eachUser => (
                  <PasswordItem
                    passwordDetails={eachUser}
                    key={eachUser.id}
                    deletePwd={this.deletePwd}
                    isChecked={this.state}
                  />
                ))}
              </ul>
            ) : (
              this.renderNoPasswordImageContainer()
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
