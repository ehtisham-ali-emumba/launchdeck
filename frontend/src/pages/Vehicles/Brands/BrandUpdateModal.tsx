import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { CarUpdateStyledForm, CarUpdateStyledModal } from "./elements";
import type { TSFixMe } from "../../../types";
import { colors, uiStrings } from "../../../constants";
import { useBrandsAtom } from "../../../hooks/atoms/useBrandsAtom";
import type { BrandUpdateFormValues, CarUpdateModalProps } from "./type";

export const BrandUpdateModal: React.FC<CarUpdateModalProps> = ({
  open,
  editingBrandId,
  onOk,
  onCancel,
  confirmLoading = false,
}) => {
  const [form] = Form.useForm();
  const { brands } = useBrandsAtom();

  useEffect(() => {
    if (open && editingBrandId) {
      const editingBrand = brands.find((brand) => brand.id === editingBrandId);
      if (editingBrand) {
        form.setFieldsValue({ ...editingBrand });
      }
    }
  }, [open, editingBrandId, form]);

  const handleFinish = (values: Omit<BrandUpdateFormValues, "id">) => {
    onOk({ ...values, id: editingBrandId! });
    form.resetFields();
  };

  return (
    <CarUpdateStyledModal
      open={open}
      title="Update Brand"
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
          label={uiStrings.brandName}
          name="name"
          rules={[{ required: true, message: uiStrings.plzEnterTheBrandName }]}
        >
          <Input placeholder={uiStrings.enterBrandName} />
        </Form.Item>
        <Form.Item
          label={uiStrings.description}
          name="description"
          rules={[
            { required: true, message: uiStrings.plzEnterTheDescription },
          ]}
        >
          <Input.TextArea rows={3} placeholder={uiStrings.enterDescription} />
        </Form.Item>
      </CarUpdateStyledForm>
    </CarUpdateStyledModal>
  );
};
