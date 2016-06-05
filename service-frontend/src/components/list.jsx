import React, { PropTypes } from 'react'

const List = (props) => (
  <ul className="collection">
    {
      props.list.map((item) =>
        <li className="collection-item avatar">
          <img src={item.iconUrl} alt="" className="circle"/>
          <span className="title">{item.title}</span>
          <p>
            {item.description}
            <br/>
            {item.footer}
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      )
    }
  </ul>
)

export default List