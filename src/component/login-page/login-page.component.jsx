import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './login-page.styles.css';
import { newLogin } from '../../actions/index';
import { Label, Button } from 'semantic-ui-react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === "hruday@gmail.com" && password === "hruday123") {
      this.props.createLogin({email:"hruday@gmail.com", password:"hruday123"});
      this.props.history.push('/homePage');
    }
    else {
      this.setState({ error: 'Please check your Email-Id OR password' })
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value, error: '' });
  };

  render() {
    const customStyles = {
      backgroundStyle: {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "100vh",
        "background": "url(https://motionarray.imgix.net/preview-141192-Mi0B7jCQQ8-high_0001.jpg)",
        "backgroundSize": "cover"
      },
      logo: {
        filter: "invert(70%)drop-shadow(5px 10px 3px #53515142)",
        height: "10vh",
      }
    }
    return (
      <div style={customStyles.backgroundStyle}>
        <div style={{ width: '40vw' }}>
          <div className="text-center">
            <div>
              <img style={customStyles.logo} alt="appiness" src="https://www.appinessworld.com/images/appiness-logo-small.png" />
            </div>
          </div>
          <div className='sign-in container card mt-5 p-4' style={{ borderRadius: '10px' }}>
            <div className="text-center h2 mb-4">Login</div>
            <div className="my-2">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <Label className="mb-2" color='black' ribbon>
                    Email Address
                  </Label>
                  <input type="email" className="form-control" name="email" onChange={this.handleChange} id="exampleInputEmail1" placeholder="Enter email" autoComplete="off" />
                </div>
                <div className="shared-errorColor">
                  {this.state.error}
                </div>
                <div className="form-group">
                  <Label className="mb-2" color='black' ribbon>
                    Password
                  </Label>
                  <input type="password" className="form-control" name="password" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Password" autoComplete="off" />
                </div>
                <Button type="submit" color={"black"} className="mb-2">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const dispatchStateToProps = {
  createLogin: newLogin
}


export default withRouter(connect(null,dispatchStateToProps)(LoginPage));