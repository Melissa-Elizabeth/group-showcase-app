console.log('Hiiiiiiiii');

$(document).ready(function(){

  $.ajax({
    type:'GET',
    url: '/bios',
    success: function(response) {
    console.log('response', response);
    for (var i = 0; i < response.length; i++) {
        $('#peopleList').append('<span id="nameSpan">' + response[i].name + '</span>');
        $('#peopleList').append('<span id="bioSpan">' + response[i].bio + '</span>');
        $('#peopleList').append('<span id="imageSpan">' + response[i].image + '</span>');
        $('#peopleList').append('<button id="likeButton">Like</button>');
      }
    }
  });
  $.ajax({
    type:'GET',
    url: '/likes',
    success: function(response) {
    console.log('response', response);
}
}

});
