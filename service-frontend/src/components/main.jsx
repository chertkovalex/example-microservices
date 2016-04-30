import React from 'react'
import List from './list.jsx'

const Main = () => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required/>
            <label for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
    <List/>
  </div>
)

export default Main