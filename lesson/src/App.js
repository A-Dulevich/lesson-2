import React from 'react';
import Counter from './components/Counter/index'
const data = {
  label:'Header',

}

class App extends React.Component {
  constructor (props) {
    super (props)
  }
  render (){
  return(
   <div>
   <Counter headerLabel ="HEADER"  />
   </div>
  )
  }
  }

export default App;