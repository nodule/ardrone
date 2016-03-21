output = function(cb) {
  ar_drone.land(function() {
    cb({ landed: $.create('landed') });
    done();
  });
};
