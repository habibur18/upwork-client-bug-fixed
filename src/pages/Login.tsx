import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import LineSeparator from "../components/LineSeparator";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPagesContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUtilitiPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <FrameComponent3 />
      <LineSeparator
        onPagesContainerClick={onPagesContainerClick}
        onUtilitiPageContainerClick={onUtilitiPageContainerClick}
      />
    </div>
  );
};

export default Login;
