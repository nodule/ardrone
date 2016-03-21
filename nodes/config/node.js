output = function(cb) {

  $.client.config($.options, function(dat) {

    cb({ out: dat });
    done();

  });

};
