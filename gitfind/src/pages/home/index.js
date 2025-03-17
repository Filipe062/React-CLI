import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Imagem de fundo" />

        <div className="info">
          <div>
            <input name="usuario" placeholder="@usuario" />
            <button>Buscar</button>
          </div>

          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/186089519?s=400&u=3086cb09f80216cefdc3866f127cf29b9f73b07c&v=4"
              className="profile"
              alt="Foto de perfil do usuário"
            />
            <div>
              <h3>Luiz Filipe</h3>
              <span>@filipe062</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="teste" description="teste de descriçao" />
            <ItemList title="teste" description="teste de descriçao" />
            <ItemList title="teste" description="teste de descriçao" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;