import shuffle from "just-shuffle"
import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useSorteador = () => {

    const participantes = useListaDeParticipantes()

    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    return () => {


        setResultado(resultado)

    }
}