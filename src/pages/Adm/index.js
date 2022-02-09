import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Contact from '../../components/contact';
import Card from '../../components/card';
import {Helmet} from "react-helmet";


function Adm() {
    return (
      <div>
      <Helmet>
        <title>Area Administrativa</title>             
      </Helmet>
      <Header />
      <div className="container">         
          <main>    

          <section className="origem-destino">
                 <h4>Origens</h4>
                 <h4>Destinos</h4>
                 <h4>Clientes</h4>
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
  
  export default Adm;