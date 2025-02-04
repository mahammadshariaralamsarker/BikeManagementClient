import { FormEvent } from "react";

const getInputValue = ({
  targetEvent,
  fieldName,
}: {
  targetEvent: FormEvent<HTMLFormElement>;
  fieldName: string;
}) => {
  const form = targetEvent.target as HTMLFormElement;
  const fieldData = form?.elements.namedItem(fieldName) as HTMLInputElement;
  const fieldValue = fieldData?.value;
  return fieldValue;
};

export default getInputValue;
