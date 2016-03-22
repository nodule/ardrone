module.exports = {
  name: "animate",
  ns: "ardrone",
  description: "Performs a pre-programmed flight sequence for a given duration (in ms)",
  phrases: {
    active: "Performing animation {{input.animation}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      },
      duration: {
        title: "Duration",
        type: "number",
        "default": 1000
      },
      animation: {
        title: "Animation",
        type: "string",
        "enum": ["phiM30Deg",
          "phi30Deg",
          "thetaM30Deg",
          "theta30Deg",
          "theta20degYaw200deg",
          "theta20degYawM200deg",
          "turnaround",
          "turnaroundGodown",
          "yawShake",
          "yawDance",
          "phiDance",
          "thetaDance",
          "vzDance",
          "wave",
          "phiThetaMixed",
          "doublePhiThetaMixed",
          "flipAhead",
          "flipBehind",
          "flipLeft",
          "flipRight"
        ]
      }
    },
    output: {}
  },
  fn: function animate(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.animate($.animation, $.duration);
      done()
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}