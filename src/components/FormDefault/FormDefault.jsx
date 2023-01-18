import { Form, Formik } from 'formik';

const FormDefault = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <h1>hello</h1>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormDefault;
