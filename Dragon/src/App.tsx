import { Widget } from "./components/widget";

export function App(){
  return<Widget/>
}

/* 
interface ButtonProps{
  text?: string;
}

function Button (props: ButtonProps){

  return <button className="bg-violet-300 px-4 h-10 rounded hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>

}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button />
    </div>
  )
}

export default App 


*/