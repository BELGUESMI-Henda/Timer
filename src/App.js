import React, { Component } from 'react';
import img from './imageProfile.jpeg'
import Timer from './Timer.js'


class App extends React.Component {
  state = {
    Person: {
      fullName: "Belguesmi Henda",
      bio: "Née à Kalaa Khesba ",
      imgSrc: img,
      profession: "Comptable"
    },
    show: false
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      < div className="jumbotron text-center">
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img className="rounded" heigth="200px" width="200px" src={this.state.Person.imgSrc} alt=""></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button className="btn btn-primary" onClick={this.handleShowPerson}>click here</button>
        <Timer/>
      </div>
    );
  }
}

export default App;
