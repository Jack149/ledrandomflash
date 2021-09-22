randX = 0
randY = 0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global randX, randY
    while True:
        randX = randint(0, 5)
        randY = randint(0, 5)
        led.plot(randX, randY)
        led.set_brightness(randint(0, 255))
        basic.pause(100)
        led.unplot(randX, randY)
basic.forever(on_forever)
