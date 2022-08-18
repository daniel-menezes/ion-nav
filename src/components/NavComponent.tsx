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
import React, {
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const PageOne: React.FC = () => {
  // const [count, setCount] = useState(0);
  const { count, setCount } = useCount();

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

interface CountContextInterface {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
}

const CountContext = React.createContext<CountContextInterface>(
  {} as CountContextInterface
);

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count: count, setCount: setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export function useCount() {
  return useContext(CountContext);
}

const NavComponent: React.FC = () => {
  const { count } = useCount();

  useEffect(() => {
    console.log("parent", count);
  }, [count]);

  const root = useCallback(() => <PageOne />, []);

  return (
    <IonPage>
      <IonNav root={root} />
      {/* <PageOne></PageOne> */}
    </IonPage>
  );
};

export default NavComponent;
