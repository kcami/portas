import { Interface } from "readline"
import styles from "../styles/Porta.module.css"
import PortaModel from '../model/porta'
import Presente from './Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void //é uma função (parametro: PortaModel, retorna void)
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
    // altera o valor e cria uma nova porta, que é mandada como parametro para a funcao do onChange
    const alterarSelecao = e => props.onChange(porta.alternarSelecao()) 
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>
        )
    }
    return (
        <div className={styles.area} onClick={alterarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? 
                    renderizarPorta() : porta.temPresente ? <Presente/> : false
                }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
} /// esta tratando o evento do onChange com o onClick