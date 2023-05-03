import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FormUacademica from '../components/FormUacademica';
 
const Uacademicas = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Unidades Académicas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Unidades Académicas</IonTitle>
          </IonToolbar>
        </IonHeader>
         <FormUacademica/>
      </IonContent>
    </IonPage>
  );
};

export default Uacademicas;
