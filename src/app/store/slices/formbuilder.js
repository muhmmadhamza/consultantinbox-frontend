import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formFields: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addField: (state, action) => {
      const { id, type, label, value } = action.payload;
      state.formFields.push({ id, type, label, value });
    },
    updateFieldLabel: (state, action) => {
      const { id, label } = action.payload;
      const field = state.formFields.find((field) => field.id === id);
      if (field) {
        field.label = label;
      }
    },

    copyField: (state, action) => {
      const { id } = action.payload;
      const fieldToCopy = state.formFields.find((field) => field.id === id);
      if (fieldToCopy) {
        const copiedField = {
          ...fieldToCopy,
          id: Date.now(),  
        };
        state.formFields.push(copiedField);
      }
    },
    updateFieldValue: (state, action) => {
      const { id, value } = action.payload;
      const field = state.formFields.find((field) => field.id === id);
      if (field) {
        field.value = value;
      }
    },
    removeField: (state, action) => {
      state.formFields = state.formFields.filter(
        (field) => field.id !== action.payload
      );
    },
  },
});

export const { addField, updateFieldLabel, updateFieldValue, removeField ,copyField} =
  formSlice.actions;

export default formSlice.reducer;
