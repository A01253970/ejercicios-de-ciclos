let aleatorio = 0
basic.forever(function () {
    aleatorio = randint(5, 10)
    basic.showNumber(aleatorio)
    basic.pause(200)
    for (let contador = 0; contador <= aleatorio; contador++) {
        basic.showNumber(contador)
        for (let index = 0; index < contador; index++) {
            music.playTone(440, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("C5 B A G F E D C ", 120)
    basic.clearScreen()
})
