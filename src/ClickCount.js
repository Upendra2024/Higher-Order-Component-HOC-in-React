import React from 'react';
import NewComponent from './WithCounter'
class ClickCount extends React.Component{
  render(){
    const{count , increHandler} = this.props
    return(
      <div>
          <button onClick ={increHandler}>clicked {count} times</button>
      </div>
    )
  }
}
export default NewComponent(ClickCount);