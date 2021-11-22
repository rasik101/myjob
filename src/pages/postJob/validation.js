import * as yup from "yup";

export const postJobSchema = yup.object().shape({
  jobTitle: yup.string().required("Title required"),
  description: yup
    .string()
    .min(3, "Min character limit is 3.")
    .max(150, "Max character limit is 150.")
    .required("Description required "),
  location: yup.string().required("Location required"),
});
