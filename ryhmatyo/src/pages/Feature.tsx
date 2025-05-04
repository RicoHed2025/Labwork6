import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import './Feature.css';

const Feature: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Features</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <h1>Features</h1>

        <IonButton expand="block" onClick={() => navigate('/diary')}>Diary</IonButton>
        <IonButton expand="block" onClick={() => navigate('/contact')}>Contact</IonButton>
        <IonButton expand="block" onClick={() => navigate('/about')}>About</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Feature;
