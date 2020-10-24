import React, { Component } from 'react'; 
import './App.css';
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import getQuotes from './getQuotes'; 

class App extends Component {
  state = {
    quote: '',
    author: '',
  }

  handleClick = () => {
    getQuotes().then((data) => {
      console.log(data);  
    })
  }

  render()  {
    return (
      <div className = "app">
        <Typography variant="h2"> Random Quote Generator</Typography>
        <Card className="card">
          <CardContent>
            <Typography variant="h5"> {this.state.quote} </Typography>
            <Typography className="margin-top" color="textSecondary">{this.state.author}</Typography>
            <hr /> 
            <Button className="margin-top" color="primary" variant="outlined" onClick={() => this.handleClick()}>Click for Quotes</Button>
          </CardContent>
        </Card>
      </div>
    ); 
  }
}

export default App;
