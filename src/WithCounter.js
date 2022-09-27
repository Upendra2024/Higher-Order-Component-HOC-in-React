import React from 'react';

const NewComponent = OriginalComponent =>{
  class WithCounter extends React.Component {

    constructor(){
      super()
      this.state ={
        count : 0
      }
    }

    increHandler = () =>{
     this.setState (prevState =>{
      return{count : prevState.count + 1}
      })

    }
    render(){
      
      return(
        <div>
          <OriginalComponent count ={this.state.count} increHandler = {this.increHandler}/>
        </div>
      )
    }
  }
  return WithCounter;
}
export default NewComponent;