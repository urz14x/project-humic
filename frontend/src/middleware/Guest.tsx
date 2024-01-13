import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const Guest: React.FC<Props> = ({ children }) => {
  const redirect = useNavigate();
  const auth = useRecoilValue(authenticated);
  useEffect(() => {
    if (auth.check) {
      redirect("/");
    }
  }, [auth.check]);

  return children;
};
export default Guest;
