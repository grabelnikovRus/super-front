import { TestAsyncThunk } from "@shared/helpers/test/testAsyncThunk";
import { fetchProfile } from "./fetchProfile";
import { Country, Currency } from "@shared/constants/common";
import { type ProfileType } from "../types/types";

const form: ProfileType = {
  name: "Ruslan",
  age: 33,
  currency: Currency.RUB,
  country: Country.BLR,
  city: "Tomsk",
};

describe("fetchProfile", () => {
  const action = new TestAsyncThunk(fetchProfile);

  test("get profile data", async () => {
    action.api.get.mockResolvedValue({ data: form });
    const result = await action.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(action.api.get).toHaveBeenCalled();
    expect(action.dispatch).toBeCalledTimes(2);
    expect(result.payload).toEqual(form);
  });

  test("get profile error", async () => {
    action.api.get.mockRejectedValue({ response: { status: 404 } });
    const result = await action.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(action.api.get).toHaveBeenCalled();
    expect(action.dispatch).toBeCalledTimes(2);
  });
});
