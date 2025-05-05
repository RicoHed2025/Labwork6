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
          
            <IonImg className="ion-center" src="../running.png"></IonImg>
            
            
            <IonButton className="ion-text-center ion-padding" routerLink="/login">Login to your account</IonButton> 
            <br></br>
            <IonButton className="ion-text-center ion-padding" routerLink="/register">Register an account</IonButton> 
            
          
        
        
      </IonContent>
    </IonPage>
  );
};

export default Loginfront;
