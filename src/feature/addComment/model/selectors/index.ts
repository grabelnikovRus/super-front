import { type StateType } from "@app/providers/storeProvider";

export const getAddCommentText = (state: StateType) => state.addComment?.text;
export const getAddCommentError = (state: StateType) => state.addComment?.error;
