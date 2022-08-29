import React from "react";
import { useRef } from "react";
import "./Refs.css";


class Refs extends React.Component {
    
    componentDidMount() {
        this.firstName.focus();
    }

    handleClick = (e) => {
        alert( `My Name is ${this.lastName.value} and my Start Date ${this.dateRef.value}`);
    };

    handleClick2 = (e) => {
        alert( `My Name is ${this.firstName.value} and my End Date ${this.dateRef2.value}`);
    };

    

   render() {
   
        return (
             <div className="refsx">
                <form>
                    <div>
                        First Name : <input type="text"  
                        onKeyUp = {this.onKeyUp}/>
                    </div>
                    <div>
                        Last Name : <input type="text" ref={(input)=>{ this.lastName = input }}
                        onKeyUp = {this.onKeyUp}/>
                    </div>
                    <div>
                    Start Date: <input type="date" ref={(date)=>{ this.dateRef = date }}/>
                    </div>
                    <div>
                    End Date: <input type="date" />
                    </div>
                    <div>
                        <input type="submit" value = "submit" onClick={this.handleClick} ref={(input , date)=>{ this.submit = (input,date) }}/>
                    </div>
                </form>
                <form>
                    <div>
                        First Name : <input type="text" ref={(input)=>{ this.firstName = input }} 
                        onKeyUp = {this.onKeyUp}/>
                    </div>
                    <div>
                        Last Name : <input type="text" 
                        onKeyUp = {this.onKeyUp}/>
                    </div>
                    <div>
                    Start Date: <input type="date" />
                    </div>
                    <div>
                    End Date: <input type="date" ref={(date)=>{ this.dateRef2 = date }}/>
                    </div>
                    <div>
                        <input type="submit" value = "submit" onClick={this.handleClick2} ref={(input , date)=>{ this.submit = (input,date) }}/>
                    </div>
                </form>
             </div>
        );
     }
}
export default Refs;