import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonToast, IonImg,  } from '@ionic/react';
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig'



const Login: React.FC = () => {

  const [/*busy*/, setBusy] = useState<boolean>(false)

  const[emailuser, setEmailuser] = useState('')
  const[password, setPassword] = useState('')
  const[present] = useIonToast()



  async function login() {
    setBusy(true)
    const res = await loginUser(emailuser, password);
    if(!res){
      present("Error logging with your credentials", 2000)
    } else {
      present("You have logged in!", 2000) 
      /* Send to feature tab, rename if changed, 2000ms timeout for alert*/
      setTimeout(function(){
        window.location.replace("./Feature");
    }, 2000);
    }
    setBusy(false)
    
            
    }

  



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg className="logo" src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"></IonImg>
        <IonInput 
        placeholder="Email?" 
        onIonChange={(e: any) => setEmailuser(e.target.value)}>
        </IonInput>


        <IonInput 
        type="password"
        placeholder='Password?'
        onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={login}>Login</IonButton>

        <p>Not registered? <Link to="/register">Register here</Link></p>


      </IonContent>
    </IonPage>
  );
};

export default Login;
