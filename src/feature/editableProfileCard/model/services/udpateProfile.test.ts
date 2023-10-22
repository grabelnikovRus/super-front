import { TestAsyncThunk } from "@shared/helpers/test/testAsyncThunk";
import { Country, Currency } from "@shared/constants/common";
import { type ProfileType } from "../types/types";
import { udpateProfile } from "./udpateProfile";

const form: ProfileType = {
  id: "1",
  name: "Ruslan",
  age: 33,
  currency: Currency.RUB,
  country: Country.BLR,
  city: "Tomsk",
};

describe("udpateProfile", () => {
  const action = new TestAsyncThunk(udpateProfile, { profile: { form } });

  test("update profile data", async () => {
    action.api.put.mockResolvedValue({ data: form });
    const result = await action.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(action.api.put).toHaveBeenCalled();
    expect(action.dispatch).toBeCalledTimes(2);
    expect(result.payload).toEqual(form);
  });

  test("update profile error", async () => {
    action.api.put.mockRejectedValue({ response: { status: 404 } });
    const result = await action.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(action.api.put).toHaveBeenCalled();
    expect(action.dispatch).toBeCalledTimes(2);
  });
});
