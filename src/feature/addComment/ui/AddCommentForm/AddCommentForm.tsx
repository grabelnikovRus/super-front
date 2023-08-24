import { useCallback, type FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@shared/helpers/lib"
import s from "./AddCommentForm.module.scss";
import { type AddCommentSchema } from "../../model/types";
import { Button, Input } from "@shared/ui";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { addCommentActions, addCommentReducer } from "../../model/slice/addCommentSlice";
import { useReducerManager } from "@shared/hooks/useReducerManager";

export interface AddCommentFormProps extends Partial<AddCommentSchema> {
  onSend: () => void
}

const reducer = { addComment: addCommentReducer };

export const AddCommentForm: FC<AddCommentFormProps> = ({ text = "", onSend }) => {
  const { t } = useTranslation("articles")
  const dispatch = useAppDispatch()

  const onChange = useCallback((value) => dispatch(addCommentActions.setText(value)), [])

  useReducerManager(reducer)

  return (
   <div className={classNames(s.block)}>
      <Input
        value={text}
        placeholder={t("enter_message") || ""}
        onChange={onChange}
      />
      <Button theme="m" onClick={onSend}>
        {t("send")}
      </Button>
   </div>
  );
}
