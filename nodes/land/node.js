output = function(cb) {

  $.client.takeoff(function() {
   cb({ hovering: 'Hovering' });
  });

};
