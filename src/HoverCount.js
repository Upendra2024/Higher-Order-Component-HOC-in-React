import React from 'react';
import WithCounter from './WithCounter';
 class HoverCount extends React.Component {
   render(){
     const {count,increHandler} = this.props
     return(
       <div onMouseOver ={increHandler}>Hoverd {count} times</div>
     )
   }
 }
 export default WithCounter(HoverCount,10);