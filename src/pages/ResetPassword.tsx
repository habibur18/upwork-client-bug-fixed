import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeFrame from "../components/HomeFrame";
import LineSeparator from "../components/LineSeparator";
import styles from "./ResetPassword.module.css";

const ResetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPagesContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUtilitiPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.resetPassword}>
      <HomeFrame />
      <LineSeparator
        onPagesContainerClick={onPagesContainerClick}
        onUtilitiPageContainerClick={onUtilitiPageContainerClick}
      />
    </div>
  );
};

export default ResetPassword;
