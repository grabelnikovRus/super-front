const getDataTypes = (name) => `export interface ${name}Scheme {

}
`

const getDataUI = (name) => `import { useTranslation } from "react-i18next";
import { type ${name}Scheme } from "../model/types/types";
    
import s from "./${name}.module.scss";

interface ${name}Props {
    onClickBtn: () => void;
    onSave: () => void;
    isEdit: boolean;
    readonly: boolean | undefined;
    isLoading: boolean | undefined;
  }
  
  export const ${name} = ({}: ${name}Props) => {
    const { t } = useTranslation("profile");
  
    return (

    );
  };
`

const getDataSlice = (nameFirtsUpper, name) => `import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";
import { type ${nameFirtsUpper}Schema } from "../types/types";
import { type StateType } from "@app/providers/storeProvider";

const initialState: ${nameFirtsUpper}Schema = {

};

export const ${name}Slice = createSlice({
  name: "${name}",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(.pending, (state) => {
    });
    addCase(.fulfilled, (state, action: PayloadAction<>) => {
    });
    addCase(.rejected, (state, { payload }) => {
    });
  },
});

export const { 
  actions: ${name}Actions, 
  reducer: ${name}Reducer 
} =${name}Slice;
`

module.exports = { getDataTypes, getDataUI, getDataSlice }
