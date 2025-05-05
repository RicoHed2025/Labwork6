import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonInput,IonButton,IonList,IonItem,IonLabel,IonIcon,} from '@ionic/react';
import React, { useState } from 'react';
import { addCircle } from 'ionicons/icons';
import './Diary.css';

const Diary: React.FC = () => {
  const [entry, setEntry] = useState('');
  const [diaryEntries, setDiaryEntries] = useState<{ date: string, text: string }[]>([]);

  const handleAddEntry = () => {
    if (entry.trim() !== '') {
      const newEntry = {
        date: new Date().toLocaleString(),
        text: entry,
      };
      setDiaryEntries([newEntry, ...diaryEntries]);
      setEntry('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Diary</IonTitle>
          </IonToolbar>
        </IonHeader>

      
        <IonItem>
          <IonLabel position="floating">How did you do today?</IonLabel>
          <IonInput
            value={entry}
            onIonChange={e => setEntry(e.detail.value!)}
            placeholder="My Day"
            type="text"
          />
        </IonItem>

        <IonButton expand="full" onClick={handleAddEntry} color="primary">
          <IonIcon icon={addCircle} slot="start" />
          Add Entry
        </IonButton>


        <IonList>
          {diaryEntries.map((entry, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{entry.date}</h2>
                <p>{entry.text}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Diary;