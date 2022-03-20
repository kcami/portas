import Porta from "../../../components/Porta"
import PortaModel from "../../../model/porta"
import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from '../../../styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

export default function Jogo() {
    const router = useRouter()
    // estado interno da porta
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])
    // funcao que modifica o estado do componente quando uma variavel for modificada
    useEffect(() => {
        // nome do caminho relativo (o portas e o temPresente)
        const portas = +router.query.portas 
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query]) // quando router modifica, ele chama essa funcao
    
    useEffect(() => {
        const portas = +router.query.portas 
        const temPresente = +router.query.temPresente
        const quantPortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(quantPortasValidas && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} 
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}></Porta>
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? 
                    renderizarPortas() :
                    <h2>Valores inválidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href='/' passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}