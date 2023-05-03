import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { Acordion } from "./components/Acordion.jsx";
import Home from "./pages/Home.jsx";
import Materias from "./pages/Materias.jsx";
import Carreras from "./pages/Carreras.jsx"
import Uacademicas from "./pages/Uacademicas.jsx";
// import Lenguas from "./pages/Lenguas.jsx";
// import Investigadores from "./pages/Investigadores.jsx";
// import Plazas from "./pages/Plazas.jsx";
// import Categorias from "./pages/Categorias.jsx";
// import Modelos from "./pages/Modelos.jsx";
// import Funciones from "./pages/Funciones.jsx";
import Configuracion from "./pages/Configuración.jsx";

import FormFunciones from "./components/FormFunciones.jsx";
import FormEtnicos from "./components/FormEtnicos.jsx";
import FormModelos from "./components/FormModelos.jsx";
import FormPlazas from "./components/FormPlazas.jsx";
import FormSNI from "./components/FormSNI.jsx";
import FormLenguas from "./components/FormLenguas.jsx";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import FormCategorias from "./components/FormCategorias.jsx";


// import "./App.css";

setupIonicReact();

const  App = () => {
  return (
    <IonApp>
      <IonReactRouter basename="/sice">
        <IonSplitPane contentId="main">
          <Acordion/>
          <IonRouterOutlet id="main">
            <Route exact path="/page/home">
              <Home/>
            </Route>
            <Route path="/page/materias">
              <Materias/>
            </Route>
            <Route path="/page/carreras">
              <Carreras/>
            </Route>
            <Route path="/page/uacademicas">
              <Uacademicas/>
            </Route>
            <Route path="/page/lenguas">
              <Configuracion titulo={'Lenguas Indigenas'}><FormLenguas/></Configuracion>
            </Route>
            <Route path="/page/investigadores">
              <Configuracion titulo={'Sistema Nacional de Investigadores'}><FormSNI/></Configuracion>
            </Route>
            <Route path="/page/plazas">
              <Configuracion titulo={'Plazas'}><FormPlazas/></Configuracion>
            </Route>
            <Route path="/page/categorias">
              <Configuracion titulo={'Categorías de Plazas'}><FormCategorias/></Configuracion>
            </Route>
            <Route path="/page/modelos">
              <Configuracion titulo={"Modelos de Plazas"}><FormModelos/></Configuracion>
            </Route>
            <Route path="/page/funciones">
              <Configuracion titulo={"Funciones de la Plaza"}><FormFunciones/></Configuracion>
            </Route>
            <Route path="/page/gpoetnicos">
              <Configuracion titulo={"Grupos Étnicos"}><FormEtnicos/> </Configuracion>
            </Route>

            {/* <Route path="/page/:name" exact={true}>
              <Home />
            </Route> */}

            <Route exact path="/">
              <Redirect to="/page/home" />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
