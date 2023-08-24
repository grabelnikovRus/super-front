import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../app/providers/storeProvider/config/types";

export const useAppDispatch = useDispatch<AppDispatch>;
