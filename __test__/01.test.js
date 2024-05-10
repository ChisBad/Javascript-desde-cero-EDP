const {
    num,
    cadena,
    logico,
    vacio,
    nuevaMultiplicacion,
    nuevaResta,
    nuevoModulo
} = require('../01.Introduccion/01-Introduccion.js')

describe('num', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof num).toBe('number')
    })
})

describe('cadena', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof cadena).toBe('string')
    })
})

describe('logico', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof logico).toBe('boolean')
    })
})

describe('vacio', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof vacio).toBe('object')
    })
})

describe('nuevaMultiplicacion', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(nuevaMultiplicacion).toBe(true)
    })
})

describe('nuevaResta', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(nuevaResta).toBe(true)
    })
})

describe('nuevoModulo', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(nuevoModulo).toBe(true)
    })
})