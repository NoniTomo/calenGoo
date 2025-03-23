import React from "react";

import { EventContext } from "./EventContext";

export const useEventModel = () => React.useContext(EventContext);
