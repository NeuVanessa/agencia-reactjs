import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import Card from "../../components/card";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <div className="container">
        <main>
          <section className="banner-principal">
            <h1>
              Escolha seu <br />
              destino!
            </h1>
            <p>
              Aqui voce encontra destinos exclusivos <br />
              para os lugares mais incríveis do mundo!.
            </p>
          </section>

          <section className="login-cadastro">
            <div className="login-home">
              <h4>
                <img
                  src="img/login-user-6.svg"
                  alt="Login Usuario"
                  width="20px"
                />
                Login
              </h4>
              <p>para acessar seus orcamentos!</p>
              <form action="#">
                <label for="lemail"></label>
                <input type="email" placeholder="E-mail:" name="femail" />
                <br />
                <label for="pass"></label>
                <input type="password" placeholder="Senha:" name="pass" />
                <br />
                <button className="button-principal">Entrar</button>
              </form>
            </div>

            <div className="cadastro-home">
              <h4>Cadastre-se</h4>
              <p>cadastre e receba os melhores precos!</p>
              <form action="#">
                <label for="lnome"></label>
                <input
                  type="text"
                  placeholder="Seu Nome:"
                  id="lnome"
                  name="fnome"
                />
                <br />
                <label for="lemail"></label>
                <input
                  type="email"
                  placeholder="Seu E-mail:"
                  id="lemail"
                  name="femail"
                />
                <br />
                <label for="pass"></label>
                <input
                  type="password"
                  placeholder="Sua Senha:"
                  id="pass"
                  name="pass"
                />
                <br />
                <button className="button-principal">Cadastrar</button>
              </form>
            </div>

            <div className="busque-destinos">
              <h4>Destinos</h4>
              <p>Simule os destinos mais procurados!</p>
              <Link to="">
                <img src="img/grecia.png" width="40px" alt="image grecia" />
              </Link>
              <Link to="">
                <img src="img/alemanha.png" width="40px" alt="image alemanha" />
              </Link>
              <Link to="">
                <img
                  src="img/gra-bretanha.png"
                  width="40px"
                  alt="image bretanha"
                />
              </Link>
              <Link to="">
                <img src="img/franca.png" width="40px" alt="image franca" />
              </Link>
              <Link to="./Destinos">
                <button type="button" className="button-principal">
                  Consultar
                </button>
              </Link>
            </div>
          </section>

          <h2 className="destinos-alta">Destinos em Promocao!</h2>
          <Card />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
