import AppContentWrapper from "./AppContentWrapper";
import AppBgNavWrapper from "../NavStructure/AppBgNavWrapper";
import { AppContextProvider } from "../../context";

const MainWrapper = () => {
  return (
    <AppContextProvider>
      <div className="main-wrapper">
        <AppContentWrapper />
        <AppBgNavWrapper />
      </div>
    </AppContextProvider>
  );
};

export default MainWrapper;
