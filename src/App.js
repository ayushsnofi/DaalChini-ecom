import { GlobalContextProvider } from "./context/GlobalContext";
import Router from "./routes";

export default function App() {
  return (
    <>
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
    </>
  );
}
