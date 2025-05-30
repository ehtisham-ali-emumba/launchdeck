import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "antd";
import { Button, FormInput, FormSelect, Spacer } from "~/components";
import { notifee } from "~/services";
import { uiStrings } from "~/constants";
import { FormWrapper } from "./elements";
import {
  submitProductFormValidationSchema,
  formDefaultValues,
  paymentMethodsStyle,
} from "./utils";
import type { ProductSubmitFormComponent, ProductSubmitFormType } from "./type";

const { Title } = Typography;

export const ProductSubmitForm: React.FC<ProductSubmitFormComponent> = ({
  productId,
  onSubmit: onSubmitCallback,
}) => {
  const formMethods = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(submitProductFormValidationSchema),
  });
  const { control, handleSubmit } = formMethods;

  const onSubmit = (productFormData: ProductSubmitFormType) => {
    console.log("🚀 ~ onSubmit ~ productFormData:", productFormData);
    notifee.showSuccessNotification("Success", "Product submitted!");
    onSubmitCallback(productFormData);
  };

  return (
    <FormProvider {...formMethods}>
      <FormWrapper>
        <Title level={2}>{uiStrings.submitAProduct}</Title>
        <span>{productId}</span>
        <form>
          <FormInput
            name="name"
            required
            control={control}
            inputProps={{
              placeholder: uiStrings.enterName,
            }}
          />

          <FormInput
            name="slug"
            required
            control={control}
            inputProps={{
              placeholder: uiStrings.enterSlug,
            }}
          />

          <FormInput
            name="description"
            required
            control={control}
            inputProps={{
              placeholder: uiStrings.productDesc,
            }}
          />

          <FormInput
            name="website"
            required
            label={uiStrings.website}
            control={control}
            inputProps={{
              placeholder: uiStrings.productWebsite,
            }}
          />

          <FormSelect
            name="categoryId"
            required
            label={uiStrings.category}
            control={control}
            selectProps={{
              style: paymentMethodsStyle,
              placeholder: uiStrings.selectProductCategory,
              size: "large",
              options: [{ value: 1, label: uiStrings.creditCard }],
            }}
          />
          <FormInput
            name="tags"
            required
            label={uiStrings.tags}
            control={control}
            inputProps={{
              placeholder: uiStrings.selectProductTags,
            }}
          />

          <Spacer marginTop="30px" />
          <Button fullWidth onClick={handleSubmit(onSubmit)}>
            {uiStrings.submit}
          </Button>
        </form>
      </FormWrapper>
    </FormProvider>
  );
};
