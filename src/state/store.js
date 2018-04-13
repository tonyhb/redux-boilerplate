// @flow
import { getStore } from "kea";
import thunk from "kea-thunk";

// getStore is a utility from 'kea' which wraps redux to generate a store
// automatically.
export default getStore({
  plugins: [thunk],
});
