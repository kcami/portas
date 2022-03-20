import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"

export default function Formulario() {
  const [quantPortas, setQuantPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quant Portas?" 
            value={quantPortas} 
            onChange={novaQuant => setQuantPortas(novaQuant)}></EntradaNumerica>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Quant Portas?" 
            value={comPresente} 
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${quantPortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
  
}
// value da Porta é o padrão inicial da porta (estado inicial para ser mudado depois)
// faz um paralelo entre o <input></input> que possui também "value" e o "onChange"
// esses atributos do input foram criados para o componente Porta (value é um objeto, 
// que é capaz de mudar se foi selecionada ou nao)