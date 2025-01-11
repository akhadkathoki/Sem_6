import * as React from "react"

class StateManupilation extends React.Component{
    state = {
        first: false,
        second: true,
         txt: "Initial value",
         clr: "purple",

    }
   
    constructor(){
        super();
        setTimeout(() => {
            this.setState({first: true, second: false, txt: "Updated value", clr: "blue"});
        }, 2000);
    }
    render(){
        const {first, second, txt, clr}  = this.state
        return(            
            <div className="State Example">
                <button disabled={first}>Return Method</button>
                <button disabled={second}>Return Method</button>      
                <label style={{color: clr}}>{txt}</label>      
                <input type="text" value={txt} />
            </div>
        );
    }
}


export default(StateManupilation)