var MyDispatcher = require ('../dispatcher/MyDispatcher');
var MyConstants = require ('../constants/MyConstants');

var MyActions = {
  setName: function (object) {
    console.log('test');

    MyDispatcher.handleAction ({
      actionType: MyConstants.SET_NAME,
      data: object
    });
  },

  openModal: function (object) {
    MyDispatcher.handleAction ({
      actionType: MyConstants.OPEN_MODAL,
      data: object
    })
  }
};

module.exports = MyActions;
