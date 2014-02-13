output = function(cb) {

  input.client.config(input.options, function(dat) {

    cb({ out: dat });
    done();

  });

};
