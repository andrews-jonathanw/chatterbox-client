// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //MessagesView.handleClick(onclick);
    // console.log(Friends._data);
    // MessagesView.handleClick();
    // console.log($('#chats .chat .username').val());
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
      //MessagesView.handleClick();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');

    // check what room we are inside
    // if room === ""
    if (Rooms._currentSelected === 'null' || Rooms._currentSelected === '') {
      for (var i = 0; i < Messages._data.length; i++) {
        MessagesView.renderMessage(Messages._data[i]);
      }
    } else {
      for (var i = 0; i < Messages._data.length; i++) {
        if (Messages._data[i].roomname === Rooms._currentSelected) {
          MessagesView.renderMessage(Messages._data[i]);
        }
      }
    }

    // else
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    var $message = $(MessageView.render(message));

    //$('.username').text(message.username);
    //$('.text').text(message.text);
    $message.appendTo(MessagesView.$chats);
    // console.log(MessagesView.$chats[0]);
    // console.log($message);
    if (Friends._data.includes(message.username)) {
      $message.addClass('friend');
    };
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // Friends.addFriend();
    var name = $.trim($(event.target).text());
    Friends.toggleStatus(name);
  },

};