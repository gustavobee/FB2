import './App.css';
import foto from './image.png';

function MyButton() {
  return (
    <button>
      Era pra ser o link de alguma coisa
    </button>
  );
}

function App() {
  const user = {
    name: 'Cartão de Visita',
    imageSize: 100,
    customText: 'Prazer, sou o Gustavo Bee. Sou estudante de Engenharia de Software e odeio programar em C.',
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          className="avatar"
          src={foto}
          alt={'Photo of ' + user.name}
          style={{
            width: foto,
            height: foto,
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: '10px',
          }}
        />
        <div>
          <p
            style={{
              fontSize: '25px',
              whiteSpace: 'pre-line',
              marginBottom: '1px', 
            }}
            dangerouslySetInnerHTML={{ __html: user.customText }}
          ></p>
          <MyButton />
        </div>
      </div>
    </div>
  );
}

export default App;