// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  _currentSelected: '',
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  createRoom: function() {
    var messages = Messages.get();
    for (var i = 0; i < messages.length; i++) {
      if (!Rooms._data.includes(messages[i].roomname)) {
        if (messages[i].roomname !== null && messages[i].roomname !== 'null') {
          Rooms._data.push(messages[i].roomname);
        }
      }
    }
    //console.log(Rooms._data);
  },

  // updateList: function(roomName) {
  //   for (var i = 0; i < Rooms._data.length; i++) {
  //     var roomOption = $('<option>').val(roomName).text(roomName);
  //     // RoomsView.$select.
  //   }
  // },

  refresh: function() {
    return Rooms._data;
  },

  markRoom: function(value) {
    //console.log(value);
    value = value || '';
    Rooms._currentSelected = value;
    RoomsView.render();
    return Rooms._currentSelected;
  },

  add: function(name) {
    if (Rooms._data.includes(name)) {
      prompt('This Room Already Exists.');
    } else {
      Rooms._data.push(name);
      // console.log(Rooms._data);
      Rooms.markRoom(name);
    }
  },

};