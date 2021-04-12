import React from 'react';

class Counter extends React.Component {
    constructor (props){
        super(props);

    this.state = {
       count  :1,
       isShown: true,
       isShownPoint1 :true,
       isShownPoint2 : true,
       isShownPoint3 : true
    }

    }

handleclick = () => {
    const {count, isShown, isShownPoint1,isShownPoint2, isShownPoint3} = this.state;
  
  console.log(isShown);
  console.log(isShownPoint1)
  console.log(isShownPoint2)
  console.log(isShownPoint3)

   
    this.setState({
     ...this.state ,//копирование объекта
        // isShown:isShown  ? false : true,
        isShown:!isShown,
        // isShownPoint2 : true,
        // isShownPoint3 : true
        
    })
}    

handleclickPoint1 = () => {
    const {count, isShown, isShownPoint1,isShownPoint2, isShownPoint3} = this.state;
   
    this.setState({
     ...this.state ,//копирование объекта
        // isShown:isShown  ? false : true,
        isShownPoint1 : !isShownPoint1,
        // isShownPoint2 : true,
        // isShownPoint3 : true
        
    })
}    

handleclickPoint2 = () => {
    const {count, isShown, isShownPoint1,isShownPoint2, isShownPoint3} = this.state;
   
    this.setState({
     ...this.state ,//копирование объекта
        // isShown:isShown  ? false : true,
        isShownPoint2 : !isShownPoint2,
        // isShownPoint2 : true,
        // isShownPoint3 : true
        
    })
}    
handleclickPoint3 = () => {
    const {count, isShown, isShownPoint1,isShownPoint2, isShownPoint3} = this.state;
   
    this.setState({
     ...this.state ,//копирование объекта
        // isShown:isShown  ? false : true,
        isShownPoint3 : !isShownPoint3,
        // isShownPoint2 : true,
        // isShownPoint3 : true
        
    })
}    
isDataReceived = true;


render (){
    const {headerLabel} = this.props;
    const {count, isShown , isShownPoint1,isShownPoint2, isShownPoint3} = this.state;
return(
 <div>
 {isShown && <h1>{headerLabel}</h1>}
<div className=' button-and-point'>
 <button onClick = {this.handleclickPoint1} className ="button-point"> &or; </button>
 {isShownPoint1 && <h2 className ="point1">Point 1</h2>} 
 </div>
 <div className=' button-and-point'>
 <button onClick = {this.handleclickPoint2} className ="button-point"> &or; </button>
 {isShownPoint2 && <h2 className ="point2">Point 2</h2>}
 </div>
 <div className=' button-and-point'>
 <button onClick = {this.handleclickPoint3} className ="button-point"> &or; </button>
 {isShownPoint3 && <h2 className ="point3">Point 3</h2>}
 </div>

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

