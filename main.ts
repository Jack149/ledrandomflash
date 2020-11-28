let randX = 0
let randY = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    while (true) {
        randX = randint(0, 5)
        randY = randint(0, 5)
        led.plot(randX, randY)
        led.setBrightness(randint(0, 255))
        basic.pause(100)
        led.unplot(randX, randY)
    }
})
