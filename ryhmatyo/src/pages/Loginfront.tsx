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
          
            <IonImg className="ion-center" src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"></IonImg>
            
            
            <IonButton className="ion-text-center ion-padding" routerLink="/login">Login to your account</IonButton> 
            <br></br>
            <IonButton className="ion-text-center ion-padding" routerLink="/register">Register an account</IonButton> 
            
          
        
        
      </IonContent>
    </IonPage>
  );
};

export default Loginfront;
