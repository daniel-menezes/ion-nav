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
import React, { useCallback, useMemo, useRef, useState } from "react";

const PageThree: React.FC = () => {
  return (
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
  );
};

const PageTwo: React.FC<any> = ({ count2, setCount2 }) => {
  console.log(count2);
  console.log(setCount2);

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
        <div>
          <IonButton onClick={() => setCount2(count2 + 1)}>
            Increase count
          </IonButton>
          <IonLabel>Count is {count2}</IonLabel>
        </div>

        <IonNavLink routerDirection="forward" component={() => <PageThree />}>
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
};

const PageOne: React.FC<any> = ({ count, setCount }) => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  console.log("x", count);
  console.log(setCount);

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
          <IonButton
            onClick={() => {
              console.log("clicked");
              console.log(count);
              setCount((count: number) => {
                return count + 1;
              });
            }}
          >
            Increase count
          </IonButton>
          <IonLabel>Count is {count}</IonLabel>
        </div>

        {/* <div>
          <IonLabel>Count 2 is {count2}</IonLabel>
        </div> */}
        {/* 
        <IonNavLink
          routerDirection="forward"
          component={PageTwo}
          componentProps={{ count2: count2, setCount2: setCount2 }}
        >
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink> */}
      </IonContent>
    </>
  );
};

const NavComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  console.log("hi", count);

  const root = useCallback(
    () => <PageOne count={count} setCount={setCount} />,
    [count]
  );

  return (
    <IonPage>
      <IonNav
        root={root}
        // rootParams={{ count: count, setCount: setCount }}
      ></IonNav>
    </IonPage>
  );
};

export default NavComponent;
