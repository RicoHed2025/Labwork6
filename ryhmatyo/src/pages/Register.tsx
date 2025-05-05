import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
    const[emailuser, setEmailuser] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCPassword] = useState('')
    const [present, /*dismiss*/] = useIonToast()
    const [busy, setBusy] = useState<boolean>(false)


    async function register() {
        setBusy(true)
        console.log(emailuser, password, cpassword)
        if(password !== cpassword){
            present("Passwords do not match", 2000)
            console.log("Passwords do not match")
        }
        if (emailuser.trim() === '' || password.trim() === '') {
            present("Email and password are required!")
        }

        const res = await registerUser(emailuser, password)
        if(!res){
            present("Error registering user", 2000)
          } else {
            present("You have registered!", 2000)
          }
          setBusy(false)
             
    } 



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonImg className="logo" src="../running.png"></IonImg>
        <IonLoading message="Please wait, registering" duration={0} isOpen={busy}></IonLoading>
        <IonInput 
        placeholder="Email?" 
        onIonChange={(e: any) => setEmailuser(e.target.value)}>
        </IonInput>


        <IonInput 
        type="password"
        placeholder='Password?'
        onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        
        
        <IonInput 
        type="password"
        placeholder='Confirm Password?'
        onIonChange={(e: any) => setCPassword(e.target.value)}
        ></IonInput>

        <IonButton onClick={register}>Register</IonButton>

        <p>Already registered? <Link to="/login">Login here</Link></p>

        
        


      </IonContent>
    </IonPage>
  );
};

export default Register;