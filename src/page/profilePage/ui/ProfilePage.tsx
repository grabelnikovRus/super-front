import { type FC, useCallback } from "react"
import {
  ProfileCard,
  ProfileHeader,
  fetchProfile,
  profileActions,
  profileReducer,
  udpateProfile
} from "@feature/editableProfileCard"
import { useReducerManager } from "@shared/hooks/useReducerManager"
import { useProfile } from "../hooks/useProfile"
import { useInitEffect } from "@shared/hooks/useInitEffect"
import { validate } from "@shared/helpers/lib/validate/validate"

import s from "./ProfilePage.module.scss"
import { useParams } from "react-router-dom"
import { getAuthData } from "@entities/user"
import { useSelector } from "react-redux"

const reducers = { profile: profileReducer }

export const ProfilePage: FC = () => {
  const { dispatch, form, readonly, error, isLoading } = useProfile()
  const { id } = useParams<{ id: string }>()

  const userData = useSelector(getAuthData)

  const canEdit = userData?.id === Number(id)

  useReducerManager(reducers);

  const onClickEdit = useCallback(
    () => {
      if (canEdit) dispatch(profileActions.editProfile(!readonly))
    }
    , [readonly, canEdit]
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

  useInitEffect(async () => {
    if (id) await dispatch(fetchProfile(id))
  }, [id])

  return (
    <div className={s.page}>
      <ProfileHeader
        isEdit={canEdit}
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
