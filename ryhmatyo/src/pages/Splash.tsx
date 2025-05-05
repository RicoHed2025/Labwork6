import { IonContent, IonPage, IonImg } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.css';

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.replace('/loginfront'); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent className="ion-text-center ion-padding">
        <IonImg src="../public/running.png" className="splash-icon" />
        <h1>Welcome to<br />Fitness App</h1>
      </IonContent>
    </IonPage>
  );
};

export default Splash;

