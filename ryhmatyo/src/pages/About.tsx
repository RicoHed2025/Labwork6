import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonImg,IonText,IonCard,IonCardContent,IonCardHeader,IonCardTitle,} from '@ionic/react';
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Us</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">Our Story</IonCardTitle>
          
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p className='textsize'>
                We are a passionate team of developers committed to creating
                useful, user-friendly applications. Our mission is to empower
                individuals and businesses by providing innovative solutions that
                make life easier. Whether you’re looking for productivity tools or
                entertainment, we have something for everyone.
              </p>
              <p>
              </p>
              <p>
              </p>
              <p>
                Founded in 2020, our company has quickly grown to serve a global
                audience. We’re proud of our achievements and look forward to
                creating more impactful projects in the future.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonImg
          src="assets/images/control.jpg"
          alt="About Us"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
        />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">Meet the Team</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>
                Our team is composed of talented individuals with diverse skills
                and expertise. From front-end developers to creative designers,
                we work together to deliver high-quality apps that users love.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;