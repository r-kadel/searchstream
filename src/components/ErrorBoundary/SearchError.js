import React, { Component } from 'react'

export class SearchError extends Component {
  state = {
    hasError: false
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return <h2>Sorry! Something went wrong, please try another search</h2>
    }
    return this.props.children
  }
}

export default SearchError
