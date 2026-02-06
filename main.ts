/**
 * ========================================
 */
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
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 150)
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.pause(300)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, 150)
    music.playTone(659, music.beat(BeatFraction.Quarter))
    basic.pause(300)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 120)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
    maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
    music.playTone(784, music.beat(BeatFraction.Quarter))
    basic.pause(400)
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
        turboMode()
    } else if (receivedString == "DANCE") {
        danceMode()
    } else if (receivedString == "HORN") {
        hornSound()
    } else if (receivedString == "LIGHTS") {
        lightShow()
    } else if (receivedString == "SPIN") {
        spin360()
    } else if (receivedString == "EMERGENCY") {
        emergencyStop()
    } else if (receivedString == "SPEED_SLOW") {
        speedMode = 0
        speedMultiplier = 0.5
        basic.showIcon(IconNames.Tortoise)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    } else if (receivedString == "SPEED_NORMAL") {
        speedMode = 1
        speedMultiplier = 1
        basic.showIcon(IconNames.Happy)
        basic.pause(300)
        basic.showIcon(IconNames.Heart)
    } else if (receivedString == "SPEED_FAST") {
        speedMode = 2
        speedMultiplier = 1.5
        basic.showIcon(IconNames.Butterfly)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
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
/**
 * ========================================
 * 
 * GŁÓWNA PĘTLA STEROWANIA
 * 
 * ========================================
 */
/**
 * KOD DLA AUTKA (Maqueen Plus V2)
 */
/**
 * Zmienne globalne
 */
let beepState = 0
let rightSpeed = 0
let leftSpeed = 0
let turnModifier = 0
let baseSpeed = 0
let yValue = 0
let xValue = 0
let normalOperation = false
let speedMultiplier = 0
let speedMode = 0
// 0=wolny, 1=normalny, 2=turbo
speedMode = 1
speedMultiplier = 1
// Inicjalizacja
normalOperation = true
maqueenPlusV2.I2CInit()
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (normalOperation) {
        // Oblicz prędkość bazową z osi Y (przód/tył)
        if (yValue > 600) {
            baseSpeed = Math.map(yValue, 600, 1023, 0, 255)
        } else if (yValue < 400) {
            // ujemna = tył
            baseSpeed = Math.map(yValue, 400, 0, 0, -255)
        } else {
            baseSpeed = 0
        }
        // Oblicz modyfikator skrętu z osi X
        if (xValue < 400) {
            // lewo = ujemne
            turnModifier = Math.map(xValue, 400, 0, 0, -200)
        } else if (xValue > 600) {
            // prawo = dodatnie
            turnModifier = Math.map(xValue, 600, 1023, 0, 200)
        } else {
            // POPRAWKA: reset gdy joystick w środku
            turnModifier = 0
        }
        // Zastosuj mnożnik prędkości (tryby prędkości)
        baseSpeed = Math.round(baseSpeed * speedMultiplier)
        turnModifier = Math.round(turnModifier * speedMultiplier)
        // Zastosuj sterowanie różnicowe
        leftSpeed = baseSpeed + turnModifier
        rightSpeed = baseSpeed - turnModifier
        // Ogranicz do -255..255
        leftSpeed = Math.constrain(leftSpeed, -255, 255)
        rightSpeed = Math.constrain(rightSpeed, -255, 255)
        // Steruj lewym silnikiem
        if (leftSpeed > 0) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, Math.abs(leftSpeed))
        } else if (leftSpeed < 0) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, Math.abs(leftSpeed))
        } else {
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor)
        }
        // Steruj prawym silnikiem
        if (rightSpeed > 0) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, Math.abs(rightSpeed))
        } else if (rightSpeed < 0) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, Math.abs(rightSpeed))
        } else {
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.RightMotor)
        }
        // LEDy i sygnał cofania
        if (baseSpeed < -10) {
            // Cofanie - oba LEDy
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
            if (beepState == 0) {
                music.playTone(988, music.beat(BeatFraction.Eighth))
                beepState = 1
            } else {
                beepState = 0
            }
        } else if (Math.abs(turnModifier) > 50 && Math.abs(baseSpeed) < 20) {
            // Obrót w miejscu
            if (turnModifier < 0) {
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
            } else {
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
            }
            beepState = 0
        } else if (Math.abs(turnModifier) > 80 && baseSpeed > 20) {
            // Skręt podczas jazdy do przodu
            if (turnModifier < 0) {
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Open)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
            } else {
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
                maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Open)
            }
            beepState = 0
        } else {
            // Prosto lub stop - wyłącz LEDy
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.LeftLed, maqueenPlusV2.MyEnumSwitch.Close)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.RightLed, maqueenPlusV2.MyEnumSwitch.Close)
            beepState = 0
        }
    }
    basic.pause(100)
})
