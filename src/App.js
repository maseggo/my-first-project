import logo from './logo.svg';
import './App.css';

function App() {
    const hellooss = [];
    const stars=[];
    for(let j=0;j<10;j++){
        const dizi=[];
        for( let k=0;k<j;k++){
            dizi.push(" k:"+k+" j:"+j+" " );
        }
        stars.push(dizi);
    }
    for(let i=0;i<10;i++){
        hellooss.push(<div><a>{stars.at(i)}MAİDE{stars.at(i)}</a><br/></div>);
    }

  return (
    <div className="App">
        {hellooss}
    </div>
  );
}

export default App;
