import * as Yup from "yup";

export const ChatBotScehma = Yup.object().shape({
  text: Yup.string().required("Please enter a question topic"),
});
