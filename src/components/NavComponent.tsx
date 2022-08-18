import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonNav,
  IonNavLink,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage,
} from "@ionic/react";
import React, { useState } from "react";

const PageOne: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page One</IonTitle>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent id="pageOneContent">
        <IonLabel>Page one content</IonLabel>
        <div>
          <IonButton onClick={() => setCount(count + 1)}>
            Increase count
          </IonButton>
          <IonLabel>Count is {count}</IonLabel>
        </div>

        <IonNavLink
          routerDirection="forward"
          component={() => {
            return (
              <>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Page Two</IonTitle>
                    <IonButtons>
                      <IonBackButton />
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent id="pageTwoContent">
                  <IonLabel>Page two content</IonLabel>
                  <IonNavLink
                    routerDirection="forward"
                    component={() => (
                      <>
                        <IonHeader>
                          <IonToolbar>
                            <IonTitle>Page Three</IonTitle>
                            <IonButtons>
                              <IonBackButton />
                            </IonButtons>
                          </IonToolbar>
                        </IonHeader>
                        <IonContent>
                          <IonLabel>Page three content</IonLabel>
                        </IonContent>
                      </>
                    )}
                  >
                    <IonButton>Go to Page Three</IonButton>
                  </IonNavLink>
                </IonContent>
              </>
            );
          }}
        >
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
};

const NavComponent: React.FC = () => {
  return (
    <IonPage>
      <IonNav root={() => <PageOne />}></IonNav>
    </IonPage>
  );
};

export default NavComponent;
