import {
  IonContent,
  IonListHeader,
  IonMenu,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

const Menu = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menu-list">
          <IonListHeader>SICE</IonListHeader>
          <IonNote>Sistema de Control Escola UIIM</IonNote>
          <IonMenuToggle autoHide={false}>
            <IonItem>
              <IonLabel>Servicios Escolares</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem>
              <IonLabel>Catalogos</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
