const kalimat = document.getElementById('kalimat')
const morse = document.getElementById('morse')
const tanggalUser = document.getElementById('tanggalUser')
const hasilKalimat = document.getElementById('hasilKalimat')
const hasilMorse = document.getElementById('hasilMorse')
const hasilUmur = document.getElementById('hasilUmur')

const kalimatKeMorse = {
    'A' : '.-',
    'B' : '-...',
    'C' : '-.-.',
    'D' : '-..',
    'E' : '.',
    'F' : '..-.',
    'G' : '--.',
    'H' : '....',
    'I' : '..',
    'J' : '.---',
    'K' : '-.-',
    'L' : '.-..',
    'M' : '--',
    'N' : '-.',
    'O' : '---',
    'P' : '.--.',
    'Q' : '--.-',
    'R' : '.-.',
    'S' : '...',
    'T' : '-',
    'U' : '..-',
    'V' : '...-',
    'W' : '.--',
    'X' : '-..-',
    'Y' : '-.--',
    'Z' : '--..',
    '0' : '-----',
    '1' : '.----',
    '2' : '..---',
    '3' : '...--',
    '4' : '....-',
    '5' : '.....',
    '6' : '-....',
    '7' : '--...',
    '8' : '---..',
    '9' : '----.',     
}
const morseKeKalimat = {
    '.-' : 'A',
    '-...' : 'B',
    '-.-.' : 'C',
    '-..' : 'D',
    '.' : 'E',
    '..-.' : 'F',
    '--.' : 'G',
    '....' : 'H',
    '..' : 'I',
    '.---' : 'J',
    '-.-' : 'K',
    '.-..' : 'L',
    '--' : 'M',
    '-.' : 'N',
    '---' : 'O',
    '.--.' : 'P',
    '--.-' : 'Q',
    '.-.' : 'R',
    '...' : 'S',
    '-' : 'T',
    '..-' : 'U',
    '...-' : 'V',
    '.--' : 'W',
    '-..-' : 'X',
    '-.--' : 'Y',
    '--..' : 'Z',
    '-----' : '0',
    '.----' : '1',
    '..---' : '2',
    '...--' : '3',
    '....-' : '4',
    '.....' : '5',
    '-....' : '6',
    '--...' : '7',
    '---..' : '8',
    '----.' : '9',
    ' ' : ' '
}

const btnKalimat = document.getElementById('btnKalimat')
btnKalimat.addEventListener('click',() => {
    let inputUser = kalimat.value.toUpperCase()
    let hasil=[], penjelasan=[], jawaban=[]
    for (let i = 0; i < inputUser.length; i++) {
        let key = inputUser[i]
        if (kalimatKeMorse[key] !== undefined) {
            jawaban.push(`${kalimatKeMorse[key]}/`)
            hasil.push(`${kalimatKeMorse[key]}/`)
            penjelasan.push(key)
            if (i === inputUser.length-1) {
                hasil.push(` => ${penjelasan.join('')}`)
                penjelasan = []
            } else {
                continue
            }
        } else if (key === ' ') {
            hasil.push(` => ${penjelasan.join('')}`)
            penjelasan = []
            jawaban.push('<br>')
            hasil.push('<br>')
        } else if (kalimatKeMorse[key] === undefined) {
            jawaban.push(`${key}/`)
            hasil.push(`${key}/`)
            penjelasan.push(key)
            if (i === inputUser.length-1) {
                hasil.push(` => ${penjelasan.join('')}`)
                penjelasan = []
            } else {
                continue
            }
        } 
    }
    let oneLine = jawaban.slice().join('').split('<br>').join(' ')
    if (inputUser === '') {
        hasilKalimat.innerHTML = `<span>Jawaban : </span>`
    } else {
        hasilKalimat.innerHTML = `\
        <span>Jawaban :</span> <br>${jawaban.join('')}<br><br>\
        <span>Penjelasan :</span> <br>${hasil.join('')}<br><br>\
        <span>Jawaban dalam satu baris : </span> <br>${oneLine}`
    }
})

const btnMorse = document.getElementById('btnMorse')
btnMorse.addEventListener('click', () => {
    let inputUser = morse.value.split('/')
    console.log(inputUser)
    let hasil = [],clean = []

    for (let spasi of inputUser) {
        if (spasi.includes(' ')) {
            clean.push(' ')
            clean.push(spasi.replace(' ',''))
        } else {
            clean.push(spasi)
        }
    }
    for (let key of clean) {
        if (morseKeKalimat[key] === undefined) {
            hasil.push(key)
        } else {
            hasil.push(morseKeKalimat[key])
        }
    }
    if (inputUser === '') {
        hasilMorse.innerHTML = `<span>Jawaban : </span>`
    } else {
        hasilMorse.innerHTML = `\
        <span>Jawaban :</span> <br>${hasil.join('')}<br>`
    }
})

const btnUmur = document.getElementById('btnUmur')
btnUmur.addEventListener('click', () => {
    let tanggal = tanggalUser.value.split('-')
    let userDate = new Date(`${tanggal[2]}-${tanggal[1]}-${tanggal[0]}`)
    let currentDate = new Date()
    let age = currentDate.getFullYear() - userDate.getFullYear()
    if ((currentDate.getMonth() < userDate.getMonth()) || (currentDate.getMonth() === userDate.getMonth() && currentDate.getDate() < userDate.getDate())) {
        age--
    }
    if (age === NaN) {
        hasilUmur.innerHTML = `<span>Jawaban : </span>`
    } else {
        hasilUmur.innerHTML = `\
        <span>Jawaban :</span> <br>Umurmu ${age} Tahun!<br>`
    }
})
