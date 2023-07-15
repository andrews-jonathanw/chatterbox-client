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

    RoomsView.$select.change(function() {
      Rooms.markRoom(RoomsView.$select.val());

    });
    // });
    // $( "#other" ).on( "click", function() {
    //   $( ".target" ).trigger( "change" );
    // } );
    RoomsView.$button.on('click', function() {
      //console.log('clicked!!!');
      RoomsView.namePrompt();
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterate over the rooms array
    RoomsView.$select.html('');
    var roomName = Rooms._currentSelected;
    RoomsView.$select.append(`<option value = "">${roomName}</option>`);
    var rooms = Rooms.refresh();
    for (var i = 0; i < rooms.length; i++) {
      if (roomName !== rooms[i]) {
        RoomsView.renderRoom(rooms[i]);
      }
    }
  },

  renderRoom: function(roomName) {
    RoomsView.$select.append(`<option>${roomName}</option>`);
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
  },

  namePrompt: function(input) {
    var input = prompt('Add a Room Name');
    Rooms.add(input);
    RoomsView.render();
    MessagesView.render();
  }
};
