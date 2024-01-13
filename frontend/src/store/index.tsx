import { atom } from "recoil";
import { IAuth } from "../ts/interfaces/global_interfaces";

const authenticated = atom<IAuth>({
  key: "auth",
  default: {
    check: false,
    midwife: [],
  },
});
export { authenticated };
