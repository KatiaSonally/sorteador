import exp from "constants"
import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o própriio nome', () => {

        const participantes =  [
            'Ana',
            'Catarina',
            'Vinícios',
            'Juliana',
            'João',
            'Nathália'            
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})