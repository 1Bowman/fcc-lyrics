import React, { Component } from 'react'

class SwearList extends Component {
  constructor(props){
    super(props)
  }

  renderSwears(){
    if(this.state.error){
      return <h2>404</h2>
    }
    else if(this.state.response.swears){
      const swears = Object.entries(this.state.response.swears)

      return swears.map(([key, value]) => {
        return <p key={key}>{key} - {value}</p>
      })
    }
  }

  ren(){
    if(this.props.error){
      return <h2>404 Invalid song/artist</h2>
    }
    if(this.props.swears){
      const swears = Object.entries(this.props.swears)
      return swears.map(([key, value]) => {
        return <p key={key}>{key} - {value}</p>
      })
    }
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        { this.ren() }
      </div>
    )
  }
}

export default SwearList;
