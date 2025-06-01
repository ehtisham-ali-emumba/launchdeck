import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

export const actionItems: MenuProps["items"] = [
  {
    label: "Edit",
    key: "edit",
    icon: <EditOutlined />,
  },
  {
    label: "Delete",
    key: "delete",
    icon: <DeleteOutlined />,
    danger: true,
  },
];

export const cardDimensions = { width: 300, height: 415 };
