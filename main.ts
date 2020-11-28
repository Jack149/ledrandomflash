basic.forever(function () {
    while (true) {
        led.plot(randint(0, 5), randint(0, 5))
        led.setBrightness(randint(0, 255))
        basic.pause(100)
        led.unplot(0, 0)
    }
})
