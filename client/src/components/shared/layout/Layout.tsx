import { ActionButton, Button, View } from "@adobe/react-spectrum";
import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface LayoutProps {
  children: ReactElement;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <View height="100%">
      <div className={styles.header}>
        <ActionButton isQuiet>BoringChat</ActionButton>
        <ActionButton isQuiet>Logout</ActionButton>
      </div>
      {children}
    </View>
  );
}

export default Layout;
