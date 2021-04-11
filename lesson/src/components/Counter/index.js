import React from 'react';
class Counter extends React.Component {
    constructor (props){
        super(props);

    this.state = {
       count  :1,
       isShown: true,
    }

    }

handleclick = () => {
    const {count, isShown} = this.state;
  
  console.log(isShown);
   
    this.setState({
     ...this.state ,//копирование объекта
        isShown:false
        
    })
}    
isDataReceived = true;

render (){
    const {headerLabel} = this.props;
    const {count, isShown} = this.state;
return(
 <div>
 {isShown && <h1>{headerLabel}</h1>}
<ul>
    <li>point 1</li>
    <li>point 2</li>
    <li>point 3</li>
</ul>
 <h2> Hello </h2>
 <button onClick = {this.handleclick} > Show/hit component </button>
 </div>
)
}
}
export default Counter;

