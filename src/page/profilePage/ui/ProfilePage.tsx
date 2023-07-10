import {
  ProfileCard,
  ProfileHeader,
  fetchProfile,
  profileActions,
  profileReducer,
  udpateProfile
} from "@feature/editableProfileCard"
import { useReducerManager } from "@shared/hooks/useReducerManager"
import { useEffect, type FC, useCallback } from "react"
import { useProfile } from "../hooks/useProfile"

import s from "./ProfilePage.module.scss"
import { validate } from "@shared/helpers/lib/validate/validate"

const reducers = { profile: profileReducer }

export const ProfilePage: FC = () => {
  const { dispatch, form, readonly, error, isLoading } = useProfile()

  useReducerManager(reducers);

  const onClickEdit = useCallback(
    () => { dispatch(profileActions.editProfile(!readonly)); console.log(readonly) }
    , [readonly]
  )

  const onChangeString = useCallback((nameField: string) => (value: string) => {
    dispatch(profileActions.setStringProfile({ [nameField]: validate.string(value) }))
  }, [])

  const onChangeNumber = useCallback((nameField: string) => (value: string) => {
    dispatch(profileActions.setStringProfile({ [nameField]: validate.number(value) }))
  }, [])

  const onChangeNoValid = useCallback((nameField: string) => (value: string) => {
    dispatch(profileActions.setStringProfile({ [nameField]: value }))
  }, [])

  const onSaveForm = useCallback(() => {
    dispatch(udpateProfile())
  }, [])

  useEffect(() => {
    dispatch(fetchProfile())
  }, [])

  return (
    <div className={s.page}>
      <ProfileHeader
        onClickBtn={onClickEdit}
        isLoading={isLoading}
        readonly={readonly}
        onSave={onSaveForm}
      />
      <ProfileCard
        form={form}
        error={error}
        isLoading={isLoading}
        readonly={readonly}
        onChangeName={onChangeString("name")}
        onChangeSurname={onChangeString("surname")}
        onChangeCity={onChangeString("city")}
        onChangeAge={onChangeNumber("age")}
        onChangeAvatar={onChangeNoValid("avatar")}
        onChangeUsername={onChangeString("username")}
        onChangeCurrency={onChangeNoValid("currency")}
        onChangeCountry={onChangeNoValid("country")}
      />
    </div>
  )
}
