import { ErrorWrapper } from "./elements";
import type { ErrorContainerProps } from "./type";

export default function ErrorContainer({ message }: ErrorContainerProps) {
  return <ErrorWrapper>{message}</ErrorWrapper>;
}
