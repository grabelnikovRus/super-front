import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProfilePage } from "./ProfilePage";
import { renderComponent } from "@shared/helpers/test/renderComponent";
import { Country, Currency } from "@shared/constants/common";

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

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("page/ProfilePage", () => {
  test("edit-profile-btn in document", async () => {
    renderComponent(<ProfilePage />, {
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
        },
        router: "/profile/1"
    });
    const btn = screen.getByTestId("edit-profile-btn")
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn)
    expect(screen.getByTestId("edit-profile-btn").textContent).toBe("cancel_edit")
  });
});