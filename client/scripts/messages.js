// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  retrieve: function(data, cb) {
    Messages._data = [];
    for (var i = 0; i < data.length; i++) {
      Messages._data.push(data[i]);
    }
    //console.log(Messages._data);
  },

  // addTo: function(data, cb) {
  //   Messages.retrieve(data, cb)
  // };

  get: function() {
    return Messages._data;
  }
};