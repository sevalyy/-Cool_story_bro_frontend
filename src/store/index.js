import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./appState/slice";
import spacesReducer from "./spaces/slice";

import userReducer from "./user/slice";

//don't forget to take them here!!!
export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    spaces: spacesReducer,
  },
});
