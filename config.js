module.exports = {
  name: "config",
  ns: "ardrone",
  description: "Sends a config command to the drone. ",
  phrases: {
    active: "Adjusting config set {{input.config.key}} to {{input.config.value}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      },
      config: {
        title: "Config",
        type: "object",
        properties: {
          key: {
            type: "string",
            title: "Key"
          },
          value: {
            type: "string",
            title: "Value"
          },
          timeout: {
            type: "number",
            title: "Timeout",
            description: "The time, in milliseconds, to wait for an ACK from the drone.",
            "default": 1000
          }
        }
      }
    },
    output: {
      out: {
        type: "any",
        title: "Out"
      }
    }
  },
  fn: function config(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.config($.options, function(dat) {
        output({
          out: $.create(dat)
        });
        done();
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}