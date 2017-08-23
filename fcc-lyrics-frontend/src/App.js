import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'artist': '',
      'song': '',
      'response': {},
    }
  }

  async componentDidMount(){
    try{
        let res = await fetch('http://localhost:5000/api/v1/lmfao/shots')
        console.log(res.json())
        // this.setState({
        //   'response': res.value
        // })
    } catch (error) {
      console.log(error)
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
              <FormControl type="text" placeholder="Artist"></FormControl>
            </FormGroup>

            <FormGroup>
              <FormControl type="text" placeholder="Song Title"></FormControl>
            </FormGroup>

            <FormGroup>
              <Button bsStyle="primary" onClick={() => console.log('clicked')}>Search</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
