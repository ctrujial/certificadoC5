import '../styles/Contador.css'


function Contador({ numeroClic }){
  return(
    <div className="contador">
      {numeroClic}
    </div>
  );
}

export default Contador;