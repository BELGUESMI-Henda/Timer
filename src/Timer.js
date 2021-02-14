 import React, { Component } from 'react';

 export default class Timer extends Component{
 state={
    time :0
}
tickeHandler=()=>{
    this.setState({
        time:this.state.time+1
    })
    return this.state.time;
}
componentDidMount(){

    var timer=setInterval(this.tickeHandler , 1000)
    this.setState({
        time:timer
  })
}

render(){
    const displaytime=()=> {
        if ( this.state.time<60)
             {
            return this.state.time+'second(s)'
             }
        {
            const SS=this.state.time %60;
            const MM=((this.state.time/60)%60) .toFixed(0);
            const HH=((this.state.time/(60*60))).toFixed(0);
            return `${HH}:${MM}:${SS}`;
        }
    }
        return (
            <div>
                <span> {displaytime()}</span>
            </div>
            )
   
    }
  }
