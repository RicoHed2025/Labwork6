import { Redirect, Route } from 'react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { body, ellipse, help, square,  } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Feature from './pages/Feature';
import Tab3 from './pages/Tab3';
import Loginfront from './pages/Loginfront';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Diary from './pages/Diary';
import Splash from './pages/Splash'; // ← Add this at the top



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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>


        <Route exact path="/splash" component={Splash} />


          <Route exact path="/tab1">
            <Tab1 />
          </Route>

          
          <Route exact path="/Feature">
            <Feature />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/splash" />
          </Route>
          <Route path="/loginfront">
            <Loginfront />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Diary">
            <Diary />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Feature" href="/Feature">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Feature</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Diary" href="/Diary">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Diary</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact" href="/Contact">
            <IonIcon aria-hidden="true" icon={help} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
          <IonTabButton tab="About" href="/About">
            <IonIcon aria-hidden="true" icon={body} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
