output = function(cb) {
  $.client.takeoff(function() {
   cb({ hovering: $.create('Hovering') });
   done();
  });
};
