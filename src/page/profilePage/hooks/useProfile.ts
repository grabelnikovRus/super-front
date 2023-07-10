import { useAppDispatch } from "@shared/hooks/useAppDispatch"
import { useSelector } from "react-redux"
import {
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly
} from "@feature/editableProfileCard"

export const useProfile = () => {
  const dispatch = useAppDispatch()
  const form = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly);

  return {
    dispatch,
    form,
    error,
    isLoading,
    readonly,
  }
}
