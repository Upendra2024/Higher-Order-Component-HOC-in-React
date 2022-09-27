import React from 'react';
// here we second parametre as a increment number
const NewComponent =( OriginalComponent ,incrementNumber) =>{
  class WithCounter extends React.Component {

    constructor(){
      super()
      this.state ={
        count : 0
      }
    }

    increHandler = () =>{
     this.setState (prevState =>{
      return{count : prevState.count + incrementNumber}
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