// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //click event
    RoomsView.handleClick();
    // RoomsView.$select.change(function() {

    // });
    // $( "#other" ).on( "click", function() {
    //   $( ".target" ).trigger( "change" );
    // } );
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterate over the rooms array
    for (var i = 0; i < Rooms._data.length; i++) {
      RoomsView.renderRoom(Rooms._data[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //iterate through _data.room

    // var roomOption = $('<option>').val(room)
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    //render messages with roomname
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //call create room for add room button
    // updateList(roomname)

    //enter room from $select -> handleChange
    //on('click', () => renderRoom(roomname))
    // RoomsView.$option.on('click', function() {
    //   RoomsView.renderRoom($option.val());
    // })
  }

};
