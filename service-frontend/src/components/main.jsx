import React, { PropTypes } from 'react'
import List from './list.jsx'

const Main = (props) => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required onChange={(event) => props.onSearch(event.target.value)}/>
            <label for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
    {props.isFetching ?     
        <div className="progress">
          <div className="indeterminate"></div>
        </div> :
        <List list={props.list}/>
    }
  </div>
)

Main.propTypes = {
  onSearch: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default Main