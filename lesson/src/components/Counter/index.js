import React from 'react';
class Counter extends React.Component {
    constructor (props){
        super(props);

    this.state = {
       count  :1,
    }

    }

handleclick = () => {
    // const {count} = this.state;
    // console.log(count);
    this.setState({
        count:this.state.count + 1,
        
    })
}    
isDataReceived = true;

render (){
    const {headerLabel} = this.props;
    const {count} = this.state;
return(
 <div>
 {this.isDataReceived && <h1>{headerLabel}</h1>}
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

