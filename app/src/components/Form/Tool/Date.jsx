import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "formik";

const Date = ({
  name,
  label,
  labelClass = "",
  ErrorClass = "text-red-500",
  ...rest
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field {...name}>
        {({ field, form: { setFieldValue }, form }) => {
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={field.value}
              onChange={(e) => setFieldValue(name, e)}
            />
          );
        }}
      </Field>
    </>
  );
};

export default Date;
