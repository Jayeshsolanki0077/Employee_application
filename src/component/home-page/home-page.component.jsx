import React from "react";
import DisplayDetails from "./displayDetails";
import { Segment, Button } from "semantic-ui-react";
import { logOut } from "../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./home-page.styles.css";
class HomePage extends React.Component {
  loggingOut = () => {
    const { logOutUser, history } = this.props;
    logOutUser();
    history.push("/");
  };
  render() {
    const customStyles = {
      backgroundStyle: {
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "url(https://motionarray.imgix.net/preview-141192-Mi0B7jCQQ8-high_0001.jpg)",
        backgroundSize: "cover",
      },
    };
    return (
      <div style={customStyles.backgroundStyle}>
        <Segment style={{ width: "80vw" }}>
          <div>
            <Button secondary floated="right" onClick={() => this.loggingOut()}>
              Sign Out
            </Button>
          </div>
          <div className="header">
            <h5> Employee details: </h5>
          </div>
          <DisplayDetails />
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkLogin: state.login,
  };
};

const dispathToProps = {
  logOutUser: logOut,
};

export default withRouter(connect(mapStateToProps, dispathToProps)(HomePage));
