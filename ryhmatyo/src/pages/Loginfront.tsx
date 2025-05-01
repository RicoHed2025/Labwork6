import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Login.css';

const Loginfront: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGINFRONT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
            <IonImg className="logo" src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"></IonImg>
            <IonButton className="loginButtons" routerLink="/login">Login to your account</IonButton> 
            <IonButton className="loginButtons" routerLink="/register">Register an account</IonButton> 
          
        </IonHeader>
        
      </IonContent>
    </IonPage>
  );
};

export default Loginfront;
