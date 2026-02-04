// Funkcja TURBO - szybkie koła
function turboMode () {
    normalOperation = false
    for (let index = 0; index < 3; index++) {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 255)
        music.playTone(1047, music.beat(BeatFraction.Quarter))
        basic.pause(500)
    }
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
    normalOperation = true
}
// Funkcja TANIEC - sekwencja ruchów
function danceMode () {
    normalOperation = false
    // Krok 1: Przód
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 150)
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.pause(300)
    // Krok 2: Tył
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 150)
    music.playTone(659, music.beat(BeatFraction.Quarter))
    basic.pause(300)
    // Krok 3: Obrót lewo
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 120)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
    music.playTone(784, music.beat(BeatFraction.Quarter))
    basic.pause(400)
    // Krok 4: Obrót prawo
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 120)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
    music.playTone(1047, music.beat(BeatFraction.Quarter))
    basic.pause(400)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
    normalOperation = true
}
// Funkcja OBRÓT 360
function spin360 () {
    normalOperation = false
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 180)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 180)
    basic.pause(1400)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
    normalOperation = true
}
// Funkcja STOP AWARYJNY
function emergencyStop () {
    normalOperation = false
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    for (let index = 0; index < 5; index++) {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
        music.playTone(1568, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
        basic.pause(100)
    }
    basic.pause(1000)
    normalOperation = true
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "TURBO") {
        // Tryb TURBO - szybkie pętle przez 3 sekundy
        turboMode()
    } else if (receivedString == "DANCE") {
        // Taniec - sekwencja ruchów
        danceMode()
    } else if (receivedString == "HORN") {
        // Klakson
        hornSound()
    } else if (receivedString == "LIGHTS") {
        // Świetlny show
        lightShow()
    } else if (receivedString == "SPIN") {
        // Obrót 360 stopni
        spin360()
    } else if (receivedString == "EMERGENCY") {
        // Stop awaryjny
        emergencyStop()
    }
})
// Funkcja KLAKSON
function hornSound () {
    for (let index = 0; index < 3; index++) {
        music.playTone(880, music.beat(BeatFraction.Eighth))
        basic.pause(100)
        music.playTone(988, music.beat(BeatFraction.Eighth))
        basic.pause(100)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        xValue = value
    } else if (name == "Y") {
        yValue = value
    }
})
// Funkcja ŚWIETLNY SHOW
function lightShow () {
    normalOperation = false
    for (let index = 0; index < 8; index++) {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
        basic.pause(100)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
        basic.pause(100)
    }
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
    normalOperation = true
}
let turnSpeed = 0
let beepState = 0
let rightSpeed = 0
let leftSpeed = 0
let yValue = 0
let xValue = 0
let normalOperation = false
normalOperation = true
maqueenPlusV2.I2CInit()
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (normalOperation) {
        // ... TUTAJ WKLEJ CAŁY POPRZEDNI KOD STEROWANIA JOYSTICKIEM ...
        // (kod z jazdy przód/tył/zawracanie bez zmian)
        if (yValue > 600) {
            leftSpeed = Math.map(yValue, 600, 1023, 0, 255)
            rightSpeed = Math.map(yValue, 600, 1023, 0, 255)
            if (xValue < 400) {
                leftSpeed = Math.round(leftSpeed * 0.3)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
            } else if (xValue > 600) {
                rightSpeed = Math.round(rightSpeed * 0.3)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
            } else {
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
            }
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, leftSpeed)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, rightSpeed)
            beepState = 0
        } else if (yValue < 400) {
            leftSpeed = Math.map(yValue, 400, 0, 0, 255)
            rightSpeed = Math.map(yValue, 400, 0, 0, 255)
            if (xValue < 400) {
                leftSpeed = Math.round(leftSpeed * 0.3)
            } else if (xValue > 600) {
                rightSpeed = Math.round(rightSpeed * 0.3)
            }
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
            if (beepState == 0) {
                music.playTone(988, music.beat(BeatFraction.Eighth))
                beepState = 1
            } else {
                beepState = 0
            }
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, leftSpeed)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, rightSpeed)
        } else {
            if (xValue < 400) {
                turnSpeed = Math.map(xValue, 400, 0, 0, 200)
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, turnSpeed)
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, turnSpeed)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
                beepState = 0
            } else if (xValue > 600) {
                turnSpeed = Math.map(xValue, 600, 1023, 0, 200)
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, turnSpeed)
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, turnSpeed)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
                beepState = 0
            } else {
                maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
                beepState = 0
            }
        }
    }
    basic.pause(100)
})
