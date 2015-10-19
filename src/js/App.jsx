var React = require ('react');
var TopBar = require ('./components/layout/TopBar.react');
var Modal = require ('./components/panes/Modal.react');


var App = React.createClass ({

  render: function () {
    return (
      

      <div className="app-container">
        <div className="overlay"></div>
        <TopBar/>
        <Modal/>
      </div>

    );
  }
});

/*
 *  Render your React UI on the page.
 */
React.render (
  <App />,
  document.body
);
