import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfileForm } from "./getProfileForm";
import { type StateType } from "@app/providers/storeProvider";
import { type ProfileType } from "../../types/types";
import { Country, Currency } from "@shared/constants/common";

describe("getProfileForm", () => {
  test("get form", () => {
    const form: ProfileType = {
      name: "Ruslan",
      age: 33,
      currency: Currency.RUB,
      country: Country.BLR,
      city: "Tomsk",
    };

    const state: DeepPartial<StateType> = { profile: { form } };
    expect(getProfileForm(state as StateType)).toEqual(form);
  });
});
