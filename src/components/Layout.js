import { Header } from "./Header";

export function Layout({ navigation, children }) {
  return (
    <>
      <Header navigation={navigation} />
      <main>{children}</main>
    </>
  );
}
