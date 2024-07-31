import { useAuth0 } from "@auth0/auth0-react";
import { userCreateMyUser } from "../api/UserApis";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const AuthCallBackPage = () => {
  const navigate = useNavigate();

  const { user } = useAuth0();
  const { createUser } = userCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user?.email, user?.sub]);
};

export default AuthCallBackPage;
