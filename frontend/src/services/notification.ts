import { notification } from "antd";

type NotificationType = "info" | "success" | "error";

const showNotification = (
  type: NotificationType,
  message: string,
  description?: string
) =>
  notification[type]({
    message,
    description,
    placement: "topRight",
  });

const showInfoNotification = (message: string, description?: string) =>
  showNotification("info", message, description);

const showSuccessNotification = (message: string, description?: string) =>
  showNotification("success", message, description);

const showErrorNotification = (message: string, description?: string) =>
  showNotification("error", message, description);

export const notifee = {
  showInfoNotification,
  showSuccessNotification,
  showErrorNotification,
};
