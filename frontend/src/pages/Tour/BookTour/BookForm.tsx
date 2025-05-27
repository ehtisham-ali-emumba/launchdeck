import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Row, Col } from "antd";
import {
  Button,
  FormInput,
  FormPhoneInput,
  FormSelect,
  Spacer,
} from "../../../components";
import {
  bookFormValidationSchema,
  formDefaultValues,
  getBookingByTourId,
  isBookingExists,
  paymentMethodsStyle,
  removeBookingByTourId,
} from "./utils";
import { FormWrapper } from "./elements";
import { bookingAtom } from "../../../atoms/bookingAtom";
import { useEffect } from "react";
import { notifee } from "../../../services";
import { useNavigate } from "react-router-dom";
import { uiStrings } from "../../../constants";
import type { BookFormDataType } from "./type";

const { Title } = Typography;

export const BookForm = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [bookings, setBookings] = useAtom(bookingAtom);

  const formMethods = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(bookFormValidationSchema),
  });
  const { control, handleSubmit, reset } = formMethods;

  // Prefill form if a booking with tourId exists
  useEffect(() => {
    if (!tourId) return;
    if (isBookingExists(bookings, tourId)) {
      const existingBooking = getBookingByTourId(bookings, tourId);
      reset(existingBooking);
    }
  }, [tourId, bookings, reset]);

  const onSubmit = (bookFormData: BookFormDataType) => {
    const filterBookings = removeBookingByTourId(bookings, tourId!);
    setBookings([
      ...filterBookings,
      { ...bookFormData, tourId: tourId!, phone: "123123" },
    ]);
    notifee.showSuccessNotification("Success", "Booking confirmed!");
    navigate("/my-tours");
  };

  return (
    <FormProvider {...formMethods}>
      <FormWrapper>
        <Title level={2}>{uiStrings.confirmYourBooking}</Title>

        <form>
          <FormInput<BookFormDataType>
            name="name"
            control={control}
            inputProps={{
              placeholder: uiStrings.enterYourName,
            }}
          />

          <FormInput
            name="email"
            control={control}
            inputProps={{
              placeholder: uiStrings.enterYourEmail,
            }}
          />

          <FormPhoneInput
            name="phone"
            control={control}
            label={uiStrings.enterYourPhone}
          />

          <Row gutter={16}>
            <Col span={12}>
              <FormInput
                name="adults"
                label={uiStrings.numberOfAdults}
                control={control}
                inputProps={{
                  placeholder: "0",
                  type: "number",
                }}
              />
            </Col>
            <Col span={12}>
              <FormInput
                name="children"
                label={uiStrings.numberOfChildren}
                control={control}
                inputProps={{
                  placeholder: "0",
                  type: "number",
                }}
              />
            </Col>
          </Row>

          <FormSelect
            name="paymentMethod"
            label={uiStrings.paymentMethod}
            control={control}
            selectProps={{
              style: paymentMethodsStyle,
              placeholder: uiStrings.selectPaymentMethod,
              size: "large",
              options: [
                { value: "credit_card", label: uiStrings.creditCard },
                { value: "paypal", label: uiStrings.paypal },
                { value: "bank_transfer", label: uiStrings.bankTransfer },
              ],
            }}
          />

          <Spacer marginTop="30px" />
          <Button fullWidth onClick={handleSubmit(onSubmit)}>
            {uiStrings.confirm}
          </Button>
        </form>
      </FormWrapper>
    </FormProvider>
  );
};
