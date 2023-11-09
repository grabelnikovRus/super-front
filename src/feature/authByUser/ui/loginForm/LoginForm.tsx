import { type FC, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Text } from "@shared/ui";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { getLogin } from "../../model/selectors/getLogin/getLogin";
import { loginByUser } from "../../model/services/loginByUser";
import { useReducerManager } from "@shared/hooks/useReducerManager";

import s from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const stateLogin = useSelector(getLogin);
  const { username, password, isLoading, error } = useMemo(
    () => stateLogin || { username: "", password: "", isLoading: false },
    [stateLogin]
  );
  const dispatch = useAppDispatch();

  useReducerManager({ login: loginReducer });

  const onChangeLogin = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    []
  );

  const onChangePass = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    []
  );

  const onClickBtn = useCallback(() => {
    dispatch(loginByUser({ username, password }));
  }, [username, password]);

  return (
    <div className={s.auth}>
      <div className={s.auth_error}>
        <Text theme="error" text={error} />
      </div>
      <Input
        label={t("login") || ""}
        placeholder={t("login") || ""}
        value={username || ""}
        onChange={onChangeLogin}
        autoFocus
      />
      <Input
        label={t("pass") || ""}
        placeholder={t("pass") || ""}
        value={password}
        onChange={onChangePass}
      />
      <Button theme="m" className={s.auth_btn} onClick={onClickBtn} disabled={isLoading}>
        {t("sign_in")}
      </Button>
    </div>
  );
};
