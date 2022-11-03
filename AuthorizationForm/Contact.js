//import react && react dom
import React from 'react';
import ReactDOM from 'react-dom';
//create a component
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }
//Function to check if the password is the correct
  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    if(password==='swordfish'){
      this.setState({
      authorized: true
    });
    }
  }
//render function that return a request for enter a password or return a personnel information of the client
  render() {
    const login =(
      <form action="#" onSubmit={this.authorize}>
        <input type="password" 
        placeholder="Password"/>
       <input type="submit"/>
    </form>
    );
    const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    return (
      <div id="authorization">
        <h1>
        {this.state.authorized?'Contact'
        :'Enter the Password'}
        </h1>
        {this.state.authorized? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);