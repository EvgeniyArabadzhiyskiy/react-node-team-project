import { Form, Formik } from 'formik';

const FormDefault = ({ initialValues, validationSchema, onSubmit, render }) => {
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {formik => <Form>{render(formik)}</Form>}
      </Formik>
    </>
  );
};

export default FormDefault;
