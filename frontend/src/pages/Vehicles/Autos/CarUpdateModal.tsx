import React, { useEffect } from "react";
import { Form, Input, InputNumber } from "antd";
import { useAutosAtom } from "../../../hooks/atoms/useAutosAtom";
import { CarUpdateStyledForm, CarUpdateStyledModal } from "./elements";
import type { TSFixMe } from "../../../types";
import { colors, uiStrings } from "../../../constants";
import type { CarUpdateFormValues, CarUpdateModalProps } from "./type";

export const CarUpdateModal: React.FC<CarUpdateModalProps> = ({
  open,
  editingCarId,
  onOk,
  onCancel,
  confirmLoading = false,
}) => {
  const [form] = Form.useForm();
  const { autos } = useAutosAtom();

  useEffect(() => {
    if (open && editingCarId) {
      const editingCar = autos.find((car) => car.id === editingCarId);
      if (editingCar) {
        form.setFieldsValue({ ...editingCar });
      }
    }
  }, [open, editingCarId, form]);

  const handleFinish = (values: Omit<CarUpdateFormValues, "id">) => {
    onOk({ ...values, id: editingCarId! });
    form.resetFields();
  };

  return (
    <CarUpdateStyledModal
      open={open}
      title="Update Car"
      onOk={form.submit}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      okText="Update"
      cancelText="Cancel"
      destroyOnClose
      okButtonProps={{ style: { backgroundColor: colors.accentOrange } }}
    >
      <CarUpdateStyledForm
        form={form}
        layout="vertical"
        onFinish={handleFinish as TSFixMe}
      >
        <Form.Item
          label={uiStrings.carName}
          name="name"
          rules={[{ required: true, message: uiStrings.enterTheCarName }]}
        >
          <Input placeholder={uiStrings.enterCarName} />
        </Form.Item>
        <Form.Item
          label={uiStrings.description}
          name="description"
          rules={[
            { required: true, message: uiStrings.enterTheCarDescription },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder={uiStrings.enterCarDescription}
          />
        </Form.Item>
        <Form.Item
          label={uiStrings.price}
          name="price"
          rules={[
            { required: true, message: uiStrings.plzEnterThePrice },
            { type: "number", min: 0, message: uiStrings.priceMustBePositive },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            placeholder={uiStrings.enterPrice}
          />
        </Form.Item>
      </CarUpdateStyledForm>
    </CarUpdateStyledModal>
  );
};
