import { type StateType } from "@app/providers/storeProvider";
import { createSelector } from "reselect";
import { RoleTypes } from "../../consts";

const getRoles = (state: StateType) => state.user.authData?.role;

export const isAdmin = createSelector(
    getRoles, (roles) => roles?.includes(RoleTypes.ADMIN)
);
export const isManager = createSelector(
    getRoles, (roles) => roles?.includes(RoleTypes.MANAGER)
);
