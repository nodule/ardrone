output = function(cb) {
  $.client.config($.options, function(dat) {
    cb({ out: $.create(dat) });
    done();
  });
};
