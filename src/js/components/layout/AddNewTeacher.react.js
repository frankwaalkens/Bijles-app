var React = require ('react');
var MyActions = require ('../../actions/MyActions');

var AddNewTeacher = React.createClass ({




  addTeacher() {
    MyActions.openModal('Monique');
  },

  render: function () {

    return (
      <div className="add-member-button" onClick={this.addTeacher}>Leraar Toevoegen</div>
    );
  }
});

module.exports = AddNewTeacher;
