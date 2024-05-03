import { useId } from "react";
import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    username: "",
    email: "",
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        handleSubmit;
      }}
    >
      <Form className={s.form}>
        <label className={s.form_list} htmlFor={nameFieldId}>
          Name
        </label>
        <Field type="text" name="username" id={nameFieldId} />
        <label
          className={s.form_list}
          htmlFor={numberFieldId}
          id={numberFieldId}
        >
          Number
        </label>
        <Field type="number" name="email" />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
