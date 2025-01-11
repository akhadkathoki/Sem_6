import * as React from "react"

class StateExample extends React.Component{
    state = {
        first: true,
        second: false,
    }
    render(){
        const {first, second}  = this.state
        return(            
           
            <div className="State Example">
                <button disabled={first}>Return Method</button>
                <button disabled={second}>Return Method</button>            
            </div>
        );
    }
}


export default(StateExample)