import './CampoTexto.css'

const CampoTexto = (props) => {

  const placeholderModificada = `${props.placeholder}...`

  /*
  //let valor = ''
  const [valor, setValor] = useState('')
  /* useState é um hook(um gancho) é uma coisa que o react permite que usemos para manter um estado dentro de uma função pq uma função n tem um estado. Como desejo que fique o valor digitado no input, então deixarei vazio .Existe outros "uses" alem do State.P.S. é necessário importa-lo!*/
  
  

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return(
    <div className="campo-texto">
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto
/*Diferente do componente Banner, vou introduzir a função dentro de uma constante por uma questão de organização
__Lembrete__ 
Componentes React começam com letras maiusculas
() => {} __é uma arrow fuction */
