import { IonContent, IonPage, IonImg } from '@ionic/react';
import './Splash.css';

const Splash: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-text-center ion-padding">
        <IonImg src="/assets/running-icon.png" alt="Running Icon" className="splash-icon" />
        <h1>Welcome to<br />Fitness App</h1>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
