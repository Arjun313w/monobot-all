radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 150)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 30)
    } else {
        pins.servoWritePin(AnalogPin.P0, 150)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 40)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
pins.servoWritePin(AnalogPin.P0, 90)
radio.setGroup(1)
