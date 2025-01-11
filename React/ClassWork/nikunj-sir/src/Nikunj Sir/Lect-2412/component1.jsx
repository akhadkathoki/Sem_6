import * as React from "react"
class Component1 extends React.Component {
    render(){
        return <div id="root"> 
            <h1>Sem 6 Time Table</h1>
            <Priyanka/>
        </div>;
    };
}
class Priyanka extends React.Component {
    render(){
        return <div id="root"> 
            <table border={1} align="center" >
                <thead>RK. UNIVERSITY <br></br> SCHOOL OF ENGINEERING <br></br> 6CEC + ITC</thead>
                <tr>
                  
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                {/* class */}
                <tr >
                    <td>10:00 TO 11:00</td>
                    <td rowSpan={2}>.NET (PT) /<br></br> ADV-JAVA (MV)</td>
                    <td rowSpan={2}>.NET (PT) /<br></br> ADV-JAVA (MV)</td>
                    <td rowSpan={2}>AI / ML (CP)</td>
                    <td rowSpan={2}>React (NV)</td>
                    <td rowSpan={2}>React (SMS)</td>
                </tr>
                <tr>               
                    <td >10:00 TO 11:00</td>               
                </tr>
                {/* labs */}
                <tr>
                <td >Class / Lab Location</td>
                    <td >LL2 / LL6</td>
                    <td >LL2</td>
                    <td >LL1</td>
                    <td >LL1</td>
                    <td >LL2</td>
                </tr>
                {/* break */}
                <tr>
                <td >11:40 TO 12:30</td>
                <td colSpan={5}>TEA BREAK</td>              
                </tr>
                
                {/* class */}
                <tr >
                    <td>10:00 TO 11:00</td>
                    <td rowSpan={2}>.NET (PT) / ADV-JAVA (MV)</td>
                    <td rowSpan={2}>.NET (PT) / ADV-JAVA (MV)</td>
                    <td rowSpan={2}>AI / ML (CP)</td>
                    <td rowSpan={2}>React (NV)</td>
                    <td rowSpan={2}>React (SMS)</td>
                </tr>
                <tr>               
                    <td >10:00 TO 11:00</td>               
                </tr>
                {/* labs */}
                <tr>
                <td >Class / Lab Location</td>
                <td >LL2 / LL6</td>
                <td >LL2</td>
                <td >LL1</td>
                <td >LL1</td>
                <td >LL2</td>
                </tr>

                  {/* break */}
                  <tr>
                <td >02:10 TO 02:25</td>
                <td colSpan={5}>LUNCH BREAK</td>              
                </tr>

                  {/* class */}
                  <tr >
                    <td>10:00 TO 11:00</td>
                    <td rowSpan={2}>.NET (PT) / ADV-JAVA (MV)</td>
                    <td rowSpan={2}>.NET (PT) / ADV-JAVA (MV)</td>
                    <td rowSpan={2}>AI / ML (CP)</td>
                    <td rowSpan={2}>React (NV)</td>
                    <td rowSpan={2}>React (SMS)</td>
                </tr>
                <tr>               
                    <td >10:00 TO 11:00</td>               
                </tr>
                {/* labs */}
                <tr>
                <td >Class / Lab Location</td>
                <td >LL2 / LL6</td>
                <td >LL2</td>
                <td >LL1</td>
                <td >LL1</td>
                <td >LL2</td>
                </tr>

            </table>
     
        </div>;
    };
}

export default(Component1)