import AppNavTrigger from "./AppNavTrigger";
import AppContent from "./AppContent";
import { useAppContext } from "../../context";

const AppContentWrapper = () => {
  const {
    state: { isScaled },
  } = useAppContext();

  return (
    <div
      className={
        isScaled ? "site-content-wrapper scaled" : "site-content-wrapper"
      }
    >
      <AppNavTrigger />
      <AppContent />
    </div>
  );
};

export default AppContentWrapper;
