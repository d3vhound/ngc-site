import React, { Component } from 'react'

class FbMessenger extends Component {

  componentDidMount() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'your-app-id',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0'
      });
    };
  }

  render() {
    return (
      <>
        <div className="fb-customerchat"
          attribution="setup_tool"
          page_id="1419568708145228"
          theme_color="#1b1b1b"
          logged_in_greeting="Greetings, How can we help you?"
          logged_out_greeting="Greetings, How can we help you?">
        </div>
      </>
    )
  }
}

export default FbMessenger


  