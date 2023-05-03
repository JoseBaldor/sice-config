import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FormCarreras from '../components/FormCarreras';
 
const Carreras = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Carreras</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Carreras</IonTitle>
          </IonToolbar>
        </IonHeader>
         <FormCarreras/>
      </IonContent>
    </IonPage>
  );
};

export default Carreras;
