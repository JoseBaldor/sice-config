import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FormCarreras from '../components/FormCarreras';
 
const Configuracion = ({children,titulo}) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{titulo}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{titulo}</IonTitle>
          </IonToolbar>
        </IonHeader>
         {children}
      </IonContent>
    </IonPage>
  );
};

export default Configuracion;
