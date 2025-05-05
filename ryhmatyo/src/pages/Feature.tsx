import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Feature.css';

const Feature: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feature</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <h1>Features</h1>

        <IonButton expand="block" onClick={() => history.push('/diary')}>
          Diary
        </IonButton>
        <IonButton expand="block" onClick={() => history.push('/contact')}>
          Contact
        </IonButton>
        <IonButton expand="block" onClick={() => history.push('/about')}>
          About
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Feature;
