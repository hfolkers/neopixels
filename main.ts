basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # # .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # # .
    # # # # #
    `)
music.play(music.tonePlayable(999, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.clearScreen()
let neopixels = neopixel.create(DigitalPin.P2, 4, NeoPixelMode.RGB)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
})
basic.forever(function () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        neopixels.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        neopixels.show()
        basic.pause(100)
        neopixels.clear()
    }
})
