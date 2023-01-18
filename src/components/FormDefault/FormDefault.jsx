import { Form, Formik } from 'formik';

const FormDefault = ({ initialValues, validationSchema, onSubmit, render, ...allprops }) => {

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {formik => <Form>{render({ ...formik, ...allprops })}</Form>}
      </Formik>
    </>
  );
};

export default FormDefault;
