import { useState } from "react";

function StateExmp1(){
    const [name, setName] = useState("RKU");
    const [age, setAge] = useState(20);
    // const [color, setColor] = useState('bg-warning');
    const [bgColor, multiStyle] = useState("bg-primary");
    return(
        <div className="p-5">
            <label htmlFor="name">Name</label>
            <input className="form-control w-25" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /> 

            <label htmlFor="age">Age</label>

            <input className="form-control w-25" name="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} /> 
            <label htmlFor="color">Change Bg of Output</label>
            <br />

            <input className="ml-4" name="color" type="radio" id="red" value="Red" onChange={() => setColor("p-4 bg-danger")} /> 
            <label htmlFor="red">Red</label>
            <br />
            <input className="" name="color" type="radio" id="blue" value="Blue" onChange={() => setColor("p-4 bg-info")} /> 
            <label htmlFor="blue">Blue</label>
            <br />
            <input className="" name="color" type="radio" id="green" value="Green" onChange={() => setColor("p-4 bg-success")} /> 
            <label htmlFor="green">Green</label>


            {/* checkbox */}
            <label htmlFor="multiStyle">Style Element</label><br />

            <input className="" name="multiStyle" type="checkbox" id="darkMode" value="DarkMode" onChange={() => multiStyle("bg-dark text-white")} />
            <label htmlFor="darkMode">Dark Mode</label>
            <br />
            <input className="" name="multiStyle" type="checkbox" id="fontSize" value="DarkMode" onChange={() => multiStyle("fs-1")} />
            <label htmlFor="fontSize">Font Size</label>
            <br />

            <div className={bgColor}>
            <h3>Name: {name}</h3><br />
            <h3>Age: {age}</h3>
            </div>
        </div>
    )
}
export default StateExmp1;