import { FC } from "react";
import { Navigation } from "./navigation/Navigation";
import { FontsLoader } from "./FontsLoader";
import { MountAuth } from "./MountAuth";
import { GlobalAppProviders } from "./providedrs";

export const App: FC = () => {
  return (
    <FontsLoader>
      <GlobalAppProviders>
        <MountAuth>
          <Navigation />
        </MountAuth>
      </GlobalAppProviders>
    </FontsLoader>
  );
};
