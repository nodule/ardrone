module.exports = {
  name: "animateLeds",
  ns: "ardrone",
  description: "Performs a pre-programmed led sequence at given hz frequency and duration (in sec!)",
  phrases: {
    active: "Animation led sequence {{input.sequence}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "Client",
        required: true
      },
      hz: {
        title: "Frequency",
        type: "number",
        "default": 5
      },
      duration: {
        title: "Duration",
        type: "number",
        "default": 2
      },
      animation: {
        title: "Animation",
        type: "string",
        "enum": ["blinkGreenRed",
          "blinkGreen",
          "blinkRed",
          "blinkOrange",
          "snakeGreenRed",
          "fire",
          "standard",
          "red",
          "green",
          "redSnake",
          "blank",
          "rightMissile",
          "leftMissile",
          "doubleMissile",
          "frontLeftGreenOthersRed",
          "frontRightGreenOthersRed",
          "rearRightGreenOthersRed",
          "rearLeftGreenOthersRed",
          "leftGreenRightRed",
          "leftRedRightGreen",
          "blinkStandard"
        ]
      }
    },
    output: {}
  },
  fn: function animateLeds(input, $, output, state, done, cb, on) {
    var r = function() {
      $.client.animateLeds($.animation, $.hz, $.duration);
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