import React from 'react';
import './Form.css';

class Form extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      title: 'Hello World',
    };
  }


  uppercase = () => {
    this.setState({title: this.state.title.toUpperCase()});
  }

  lowercase = () => {
    this.setState({title: this.state.title.toLowerCase()});
  }

  // function for camelcase

  camelcase = () => {
    let title = this.state.title;
    let titleArray = title.split(' ');
    
    let newTitle = '';
    for (let i = 0; i < titleArray.length; i++) {
        newTitle += titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1).toLowerCase();
      }
     
    this.setState({title: newTitle});
  }

  updated = (e) => {
    this.setState({title: e.target.value});
  }
  
// Simple Form

    render()
    {
        return (
            <>
              <div className = "Form-Element">
               
               <label>
                   Title
               </label>
                   <input type="text" className="textbox" name="title" onChange={this.updated} />
                    <div>
                    <input type="submit" className="submit" value="Upper" onClick={this.uppercase} />
                    <input type="submit" className="submit" value="Lower" onClick={this.lowercase} />
                    <input type="submit" className="submit" value="Title" onClick={this.camelcase} />
                    </div>
               
       </div>
       <div className = "Form-Result">
          <h2>{this.state.title}</h2>
        </div>
       </>
          
        );

    }
    
}
export default Form;