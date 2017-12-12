import React, { Component } from "react";
import getVideoId from "get-video-id";
import MenuExampleInverted from "./components/nav";
import { Icon, Button, Input } from "semantic-ui-react";
import { If, Then, Else } from 'react-if';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", cvc: "" , content: "Submit", downloadIcon: "",buttonState: "hidden"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = this.state.value;
    let processed = getVideoId(url);
    let new_id = processed.id;
    let new_url = "http://img.youtube.com/vi/" + new_id + "/maxresdefault.jpg";
    this.setState({
      cvc: new_url,
      value: "",
      buttonState:"show"
    });
  }


  render() {
    return (
      <div>
        <MenuExampleInverted />
        <div class="formInput">
         <form onSubmit={this.handleSubmit} class="form">
          <Input fluid placeholder='Enter Url...' onChange={this.handleChange}/>
          <Button fluid content="Submit"  color='black' onClick={this.handleSubmit}>Submit</Button>
         </form>
        </div>

        <div class="image">
          <img src={this.state.cvc} class="img"/>
        </div>

        <DownloadBtn cvc={this.state.cvc} buttonState={this.state.buttonState}/>
      </div>
    );
  }
}

class DownloadBtn extends Component {
  render() {
    return (
      <div>
      <If condition={ this.props.buttonState === "show" }>
          <Then>
           <div> 
            <a href={this.props.cvc} download={this.props.cvc}><Button fluid color='green' hidden>Download</Button></a>
           </div>
          </Then>
          <Else>{() =>  
             <span></span>
          }</Else>
      </If>
      </div>
    );
  }
}


export default App;