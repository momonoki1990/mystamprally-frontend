import { IonFab, IonFabButton, IonIcon, useIonActionSheet } from "@ionic/react";
import { add } from "ionicons/icons";
import AddVisitModal from "./VisitForm";

const MainActionButton: React.FC = () => {
  return (
    <>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton id="open-add-visit-modal">
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
      <AddVisitModal />
    </>
  );
};

export default MainActionButton;
