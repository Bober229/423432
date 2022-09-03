basic.showString("Hello!")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(1)
        basic.showNumber(2)
        basic.showNumber(3)
        basic.showNumber(4)
        basic.showNumber(5)
        basic.showNumber(6)
        basic.showNumber(7)
        basic.showNumber(8)
        basic.showNumber(9)
        basic.showNumber(10)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(10)
        basic.showNumber(9)
        basic.showNumber(8)
        basic.showNumber(7)
        basic.showNumber(6)
        basic.showNumber(5)
        basic.showNumber(4)
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.showNumber(0)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
