import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/main.jsx'
import * as Actions from '../actions/actions'

class App extends Component {
  onSearch(query) {
    this.props.actions.fetchSearch({query})
  }
  render() {
    const { list, isFetching} = this.props
    return (
      <Main
        isFetching={isFetching}
        list={list}
        onSearch={this.onSearch.bind(this)}/>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    isFetching: state.app.isFetching,
    list: state.app.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)