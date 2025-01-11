import * as React from 'react'

class IterableState extends React.Component {
    state ={
        first: 'loading...',
        second: 'loading...',
        third: 'loading...',
        forth: 'loading...',
        fifth: 'loading...',
        doneMsg: 'Loading Completed!',
    }
    constructor(){
        super()       
        setTimeout(() => {this.setState({first: 'First Dome',})}, 1000);
        setTimeout(() => {this.setState({second: 'Second Dome',})}, 2000);
        setTimeout(() => {this.setState({third: 'Third Dome',})}, 3000);
        setTimeout(() => {this.setState({forth: 'Forth Dome',})}, 4000);
        setTimeout(() => {this.setState({fifth: 'Fifth Dome',})}, 5000);
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                fifth: state.doneMsg
            }));
        }, 6000);
    };
    render(){
        return (
           <ul>
            {Object.keys(this.state).filter((key) => (
                key !== 'doneMsg'

            )).map((key) => (
                 <li key={key}><strong>{key}: </strong> {this.state[key]}</li>
            ))}
           </ul>
        )
    }
}
export default(IterableState)