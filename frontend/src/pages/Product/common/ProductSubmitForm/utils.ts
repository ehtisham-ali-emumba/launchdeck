import * as Yup from "yup";

export const submitProductFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  slug: Yup.string().required("Slug is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().required("Image is required"),
  categoryId: Yup.number()
    .required("Category is required")
    .min(1, "Category must be selected"),
  tags: Yup.array()
    .of(Yup.string().required("Tag is required"))
    .min(1, "At least one tag is required")
    .required("At least one tag is required"),
  website: Yup.string()
    .required("Website is required")
    .url("Website must be a valid URL"),
});

export const formDefaultValues = {
  name: "",
  slug: "",
  description: "",
  image: "https://cdn.pixabay.com/photo/2015/05/29/07/47/stone-789012_1280.jpg",
  categoryId: 0,
  tags: ["health", "science"],
  website: "",
};

export const paymentMethodsStyle = { width: "100%" };
