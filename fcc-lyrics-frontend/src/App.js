import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'artist': '',
      'title': '',
      'response': {},
    }
  }

  async requestCall() {
    const res = await fetch(`http://localhost:5000/api/v1/${this.state.artist}/${this.state.title}`)
    const json_res = await res.json()
    console.log(json_res)
    this.setState({
      'response': json_res,
    })
  }

  handleChange(event) {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    this.setState({
      [fieldName]: fieldValue
    })
  }

  renderSwears(){
    if(this.state.response.swears){
      const swears = Object.entries(this.state.response.swears)

      return swears.map(([key, value]) => {
        return <p key={key}>{key} - {value}</p>
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lyrics Search</h2>
        </div>
        <div>
          <form>
            <FormGroup>
              <FormControl name="artist" type="text" placeholder="Artist" onChange={this.handleChange.bind(this)}></FormControl>
            </FormGroup>

            <FormGroup>
              <FormControl name="title" type="text" placeholder="Song Title" onChange={this.handleChange.bind(this)}></FormControl>
            </FormGroup>

            <FormGroup>
              <Button bsStyle="primary" onClick={() => this.requestCall()}>Search</Button>
            </FormGroup>
          </form>
        </div>
        <div>
          { this.renderSwears() }
        </div>
      </div>
    );
  }
}

export default App;
