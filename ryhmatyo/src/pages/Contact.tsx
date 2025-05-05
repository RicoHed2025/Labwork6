import { IonPage,IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonAlert,IonIcon, IonText,IonImg,} from '@ionic/react';
import React, { useState } from 'react';
import { mailOutline } from 'ionicons/icons';
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    if (name && email && message) {
      console.log('Form Submitted');
      console.log({ name, email, message });
      setShowAlert(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact Us</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={e => setName(e.detail.value!)}
            placeholder="Enter your name"
            type="text"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            placeholder="Enter your email"
            type="email"
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Message</IonLabel>
          <IonTextarea
            value={message}
            onIonChange={e => setMessage(e.detail.value!)}
            placeholder="Your message"
          />
        </IonItem>

        <IonButton expand="full" onClick={handleSubmit} color="primary">
          <IonIcon icon={mailOutline} slot="start" />
          Send Message
        </IonButton>
        <IonText>
          <p>
            Voit myös tulla vierailemaan medän luona osoitteessa.
          </p>
          <p>
            Virkatie 5, 01510 Vantaa
          </p>
        </IonText>
        <a 
          href="https://www.google.com/maps/place/Virkatie+5,+01510+Vantaa/"
          target="_blank"
          rel="noopener noreferrer">
        <IonImg
          src="assets/images/Location.png"
          alt="About Us"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }}/>
        </a>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Success"
          message="Your message has been sent successfully!"
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Contact;