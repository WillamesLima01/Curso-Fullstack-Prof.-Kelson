import TrabalhandoComImagensCondicional from "../../../../trabalhando_reactjs_aula03/src/components/TrabalhandoComImagensCondicional"
import Adicao from "./components/Adicao"
import CelsiusParaFahrenheit from "./components/CelsiusparaFahrenheit"
import Divisao from "./components/Divisão"
import FahrenheitParaCelsius from "./components/FahrenheitParaCelsius"
import HookContador from "./components/HookContador"
import MilhasParaQuilometro from "./components/MilhasParaQuilometro"
import Multiplicacao from "./components/Multiplicacao"
import TenhoQueEstudar from "./components/TenhoQueEstudar"
import QuilometroParaMilhas from "./components/QuilometrosParaMilhas"
import RenderizandoComFuncao from "./components/RenderizandoComFuncao"
import Subtracao from "./components/Subtracao"
import TrabalhandoComImagens from "./components/TrabalhandoComImagem"
import TrabalhandoComImagemCondicional from "./components/TrabalhandoComImagemCondicional"

function App() {  
  return (
    <>
      <Adicao num1={2} num2={8}/>
      <Subtracao num1={8} num2={2}/>
      <Multiplicacao num1={3} num2={5}/>
      <Divisao num1={81} num2={9}/>
      <CelsiusParaFahrenheit temperatura={100}/>
      <FahrenheitParaCelsius temperatura={100}/>
      <MilhasParaQuilometro distancia={200}/>
      <QuilometroParaMilhas distancia={200}/>
      <RenderizandoComFuncao/>
      <TrabalhandoComImagens/>
      <TrabalhandoComImagemCondicional imagem='public'/>
      <HookContador/>
      <TenhoQueEstudar disciplina ="java"/>
    </>
    
  )
}

export default App