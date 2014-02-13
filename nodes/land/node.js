output = function(cb) {

  input.client.takeoff(function() {
   cb({ hovering: 'Hovering' });
  });

};
