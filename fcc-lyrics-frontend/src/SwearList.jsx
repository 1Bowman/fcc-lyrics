import React, { Component } from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import startCase from 'lodash/startCase'

class SwearList extends Component {

  renderListItem(){
    if(this.props.error){
      return <h2>404 - Invalid song/artist</h2>
    }
    if(this.props.swears){
      const swears = Object.entries(this.props.swears)
      return swears.map(([key, value]) => {
        return <li  className="list-group-item"
                    key={key}>
                    <p>{ startCase(key) } <Badge pullRight={true}>{value}</Badge></p>
              </li>
      })
    }
  }

  render() {
    return (
      <ListGroup componentClass="ul">
        { this.renderListItem() }
      </ListGroup>
    )
  }
}

export default SwearList;
