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
            <IonCardTitle className="ion-text-center">Welcome to fitness app, your personal fitness companion anytime, anywhere.</IonCardTitle>
          
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p className='textsize'>
              We created this app with one goal in mind: to make expert-level fitness accessible to everyone. Whether you're training at home, in the gym, or on the go, our programs are designed to fit your lifestyle, your goals, and your schedule.

              With guided workouts, personalized plans, real-time progress tracking, and support from elite coaches, fitness app brings the full gym experience to your fingertips. From strength training and cardio to yoga, mobility, and nutrition we’ve got every aspect of your fitness covered.

              We believe fitness isn’t one-size-fits-all. That’s why we’ve built a platform that adapts to you your level, your pace, and your purpose. Because real results come from consistency, confidence, and having the right tools in your corner.

              Join thousands who are transforming their lives through movement one workout at a time.
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
              Behind every great workout is a great coach and our team is here to guide you, motivate you, and celebrate your progress every step of the way. At fitness app, we’ve brought together top-tier trainers, wellness experts, and fitness innovators to give you a complete, results-driven experience right from your phone.
              Our team is more than trainers we're your fitness partners, helping you build strength, confidence, and consistency. Whether you're just starting or leveling up, we're with you every step, rep, and run.</p>
              <p>👤 Jordan West – Strength & Conditioning Coach
              With a background in sports science and over 10 years in the field, Jordan specializes in building strong, balanced bodies. His progressive training programs help you get stronger, faster — safely.</p>

              <p>🧘 Lena Patel – Yoga & Recovery Specialist
              Balance is key. Lena brings mindfulness to your routine with guided yoga flows, stretch sessions, and recovery plans that reduce soreness and improve flexibility.</p>
              <p>
              </p>
              <p>
              </p>
              <p>🔥 Marcus King – HIIT & Fat Burn Expert
              If you're here to sweat, Marcus is your guy. His explosive high-intensity workouts are fast, effective, and perfect for anyone short on time but big on goals.</p>
              <p>
              </p>
              <p>
              </p>
              <p>🥗 Chloe Ramirez – Nutrition Coach
              Fuel your fitness with Chloe’s personalized meal guidance, healthy recipes, and science-backed tips to support your workouts and your lifestyle.</p>
              <p>
              </p>
              <p>
              </p>
              <p>📱 Sam Lee – Head of Product & Trainer Tech
              Sam leads the integration of fitness science with app design. His work ensures every feature — from your progress tracker to workout plans — is intuitive, motivating, and built around your goals.

                            </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;