import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)

  let filteredEmails = emails
  if (hideRead) filteredEmails = emails.filter((email)=> email.read)


  const emailRender = []
  filteredEmails.forEach((email) => emailRender.push(
    <li className={`email ${email.read ? 'read' : 'unread'}`}>
  <div className="select">
	<input
	  className="select-checkbox"
	  type="checkbox"
    onClick={() => {email.read = !email.read; setEmails([...emails])}}
    checked = {email.read}
    />
  </div>
  <div className="star">
	<input
	  className="star-checkbox"
	  type="checkbox"
    onClick={() => {email.starred = !email.starred; setEmails([...emails])}}
    checked = {email.starred}
	/>
  </div>
  <div className="sender">{email.sender}</div>
  <div className="title">{email.title}</div>
</li>
  ))

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              
              onChange={() => {setHideRead(!hideRead)}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emailRender
      }</main>
    </div>
  )
}

export default App
