import React from 'react';
class Counter extends React.Component {
    constructor (props){
        super(props);

    this.state = {
       count  :1,
    }

    }

handleclick = () => {
    const {count} = this.state;
    console.log(count);
}    

render (){
    const {headerLabel} = this.props;
    const {count} = this.state;
return(
 <div>
 <h1>{headerLabel}</h1>
<p>{count}</p>
 <h2> Hello </h2>
 <button onClick = {this.handleclick} > Show/hit component </button>
 </div>
)
}
}
export default Counter;

