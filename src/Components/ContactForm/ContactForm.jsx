import { useId } from "react";
import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

const initialValues = {
  username: "",
  email: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
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
        <label className={s.form_list} htmlFor={emailFieldId} id={emailFieldId}>
          Email
        </label>
        <Field type="email" name="email" />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
