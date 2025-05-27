import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";

interface CarSpecEditModalProps {
  open: boolean;
  initialKey?: string;
  initialValue?: string | number;
  onSubmit: (key: string, value: string) => void;
  onCancel: () => void;
  confirmLoading?: boolean;
  isEditMode?: boolean;
}

export const ModifyCarSpecModal: React.FC<CarSpecEditModalProps> = ({
  open,
  initialKey = "",
  initialValue = "",
  onSubmit,
  onCancel,
  confirmLoading = false,
  isEditMode = false,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ key: initialKey, value: initialValue });
    }
  }, [open, initialKey, initialValue, form]);

  const handleFinish = (values: { key: string; value: string }) => {
    onSubmit(values.key, values.value);
    form.resetFields();
  };

  return (
    <Modal
      open={open}
      title={`${isEditMode ? "Modify" : "Add"} Specification`}
      onOk={() => form.submit()}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      okText="Save"
      cancelText="Cancel"
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Specification Key"
          name="key"
          rules={[{ required: !isEditMode, message: "Please enter a key" }]}
        >
          <Input placeholder="e.g. mileage" disabled={isEditMode} />
        </Form.Item>
        <Form.Item
          label="Specification Value"
          name="value"
          rules={[{ required: true, message: "Please enter a value" }]}
        >
          <Input placeholder="e.g. 15 km/l" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
