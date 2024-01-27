import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProfilePage } from "./ProfilePage";
import { renderComponent } from "@shared/helpers/test/renderComponent";
import { Country, Currency } from "@shared/constants/common";
import { type StateType } from "@app/providers/storeProvider";
import { type DeepPartial } from "redux";
import { profileReducer } from "@feature/editableProfileCard";
import { api } from "@shared/api/api";

const form = {
  id: "1",
  name: "Ruslan",
  surname: "GrabelnikovRA",
  age: 35,
  currency: Currency.EUR,
  country: Country.BLR,
  city: "Tomsk",
  username: "admin",
  avatar: "https://w7.pngwing.com/pngs/607/878/png-transparent-avatar-batman-comics-hero-avatars-xmas-giveaway-icon.png",
}

const state = {
    initalState: {
        user: {
            _isInit: true,
            authData: {
                id: "1",
                username: "admin",
                role: "ADMIN",
            }
        },
        profile: {
            isLoading: false,
            error: "",
            readonly: true,
            data: form,
            form
        }
    } satisfies DeepPartial<StateType>,
    asyncReducers: { profile: profileReducer }
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("page/ProfilePage", () => {
  test("edit-profile-btn in document", async () => {
    renderComponent(<ProfilePage />, state );
    const btn = screen.getByTestId("edit-profile-btn")
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn)
    expect(screen.getByTestId("edit-profile-btn").textContent).toBe("cancel_edit")
  });

  test("Обнудение данных при отмене редактирования", async () => {
    renderComponent(<ProfilePage />, state );
    await userEvent.click(screen.getByTestId("edit-profile-btn"))
    await userEvent.clear(screen.getByPlaceholderText("enter_name")) 
    await userEvent.type(screen.getByPlaceholderText("enter_name"), "Amir")

    expect(screen.getByPlaceholderText("enter_name")).toHaveValue("Amir")

    await userEvent.click(screen.getByTestId("edit-profile-btn"))

    expect(screen.getByPlaceholderText("enter_name")).toHaveValue("Ruslan")
  });

  test("Отправка данных", async () => {
    const put = jest.spyOn(api, "put")
    renderComponent(<ProfilePage />, state );
    await userEvent.click(screen.getByTestId("edit-profile-btn"))
    await userEvent.clear(screen.getByPlaceholderText("enter_name")) 
    await userEvent.type(screen.getByPlaceholderText("enter_name"), "Amir")

    expect(screen.getByPlaceholderText("enter_name")).toHaveValue("Amir")

    await userEvent.click(screen.getByTestId("save-profile-btn"))

    expect(put).toHaveBeenCalled()
    expect(put).toHaveBeenCalledWith( // позволяет проверить аргумент с которым была вызвана замоканая функция
        "/profile/1", expect.objectContaining({ ...form, name: "Amir" })
    )
  });
});