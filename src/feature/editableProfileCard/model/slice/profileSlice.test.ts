import { Country, Currency } from "@shared/constants/common";
import { type ProfileScheme } from "../types/types";
import { profileReducer, profileActions } from "./profileSlice";
import { udpateProfile } from "../services/udpateProfile";

describe("profileSlice", () => {
  const profile = {
    name: "Ruslan",
    age: 33,
    currency: Currency.RUB,
    country: Country.BLR,
    city: "Tomsk",
  };

  const state: ProfileScheme = {
    form: profile,
    data: profile,
    readonly: true,
    isLoading: false,
    error: "",
  };

  test("set readonly", () => {
    expect(profileReducer(state, profileActions.editProfile(false))).toEqual({
      ...state,
      readonly: false,
    });
  });

  test("set field profile data", () => {
    expect(profileReducer(state, profileActions.setStringProfile({ age: 34 }))).toEqual({
      ...state,
      form: { ...state.form, age: 34 },
    });
  });

  test("test extra reducer pending", () => {
    expect(profileReducer(state, udpateProfile.pending)).toEqual({
      ...state,
      isLoading: true,
    });
  });

  test("test extra reducer fulfilled", () => {
    expect(
      profileReducer(
        { ...state, data: {}, form: {} },
        udpateProfile.fulfilled(profile, "profile/udpateProfile", undefined)
      )
    ).toEqual(state);
  });
});
