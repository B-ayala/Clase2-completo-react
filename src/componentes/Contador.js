import React from "react";
import './Contador.css';
//------------------------------componente statefull guarda estados -------
class Contador extends React.Component {
    constructor(props){
        super(props)
        console.log(`contador primera vista ${props.id} constructor`) //mostrar los id por console los que pase por app.js
         //this.incrementar = this.incrementar.bind(this);// que el incrementar no pierda la referencia eso es el bind()
           //sobre (this)
       // bind() para no perder la referencia sobre el metodo
      this.state = {
         contador : Number(props.valor) // guardado en constructor sacamos el this. en props.valor
      }
    }
    
    incrementar(){
        console.log(`contador en efecto  ${this.props.id} incrementar`) // lo que va a mostrar al incrementar los id
        this.setState(prevstate => ({contador: prevstate.contador +1}))
    }

   /* state = {
        contador : Number(this.props.valor) //varias maneras de hacer
        //Number() es para que el string sea numerico
    }*/

    render (){
        console.log('contador render')
        let {id, fondo} = this.props
       // let {contador} = this.state
    
        return (
            <div className="Contador">
                <div className="jumbotron" style={{backgroundColor:fondo}}>
                <h3>contador : {id}</h3>
                <h4 className="alert alert-info w-50">valor: {this.state.contador}</h4>
                {/* <button onClick= {this.incrementar}>incrementar</button> */}
                {/*<button onClick= {  () =>  this.incrementar()}>incrementar</button>*/}
              {/* <button onClick= { () => {
                         this.state.contador = this.state.contador + 1 ;
               this.forceUpdate();
               NO ES LA FORMA DE ACTUALIZAR EL ESTADO
               this.setState ({contador : this.state.contador +1})//LA MANERA CORRECT!!!
               reemplazo por this           
                  this.setState(prevstate => ({contador: prevstate.contador +1}))
                
                      }}    >incrementar</button> */}
                       <button onClick= { () => this.incrementar()}>incrementar</button> 
               
                </div>

            </div>
            
        )

    }

}

export default Contador