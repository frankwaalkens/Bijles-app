var React = require ('react');
var AddNewStudent = require ('./AddNewStudent.react');
var AddNewTeacher = require ('./AddNewTeacher.react');

var TopBar = React.createClass ({


  render: function () {

    return (
      <div className="top-bar">
          <div className="logo"><img src="images/logo.png"/></div>
          <AddNewStudent/>
          <AddNewTeacher/>
      </div>
    );
  }
});

module.exports = TopBar;
