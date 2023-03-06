import { IonAccordion, IonAccordionGroup, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonListHeader, IonNote } from "@ionic/react";
import { topics } from "../data";
import { useLocation } from 'react-router-dom';

export const Acordion = () => {
    const location = useLocation();

	return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="menu-list">
                    <IonListHeader>SICE</IonListHeader>
                    <IonNote>Sistema de Control Escola UIIM</IonNote>
                    <IonAccordionGroup>
                    { topics.map((topic, index) => {

                        return (

                        <IonAccordion key={ `accordion_${ index }` } value={ topic.header.toLowerCase() }>
                            <IonItem slot="header">
                                <IonIcon icon={ topic.icon } color={ topic.color } />
                                <IonLabel className="ion-padding-start">{ topic.header }</IonLabel>
                            </IonItem>

                            <IonList slot="content">
                            { topic.options.map((option, index2) => {

                                return (

                                <IonItem key={ `option_${ index }_${ index2 }` } className={location.pathname === option.url ? 'selected' : ''} routerLink={ option.url }>
                                    <IonIcon aria-hidden="true" slot="start"  icon={option.icon}/>
                                    <IonLabel>{ option.label }</IonLabel>
                                </IonItem>
                                );
                            })}
                            </IonList>
                        </IonAccordion>
                        );
                    })}
                    </IonAccordionGroup>
                </IonList>
            </IonContent>
        </IonMenu>
	);
}