import React from 'react';
import { Formik, Form, Field } from 'formik';

function AddingForm () {
  return (
    <div className="align-self-center d-flex flex-column justify-content-center align-items-center w-75 p-4 m-4">
      <p>
        Поле для добавления заметки
      </p>
      <Formik
      initialValues={{ title: '', body: '' }}
      onSubmit={(values) => {
        g
      }}
    >
      {({ isSubmitting }) => (
        <Form className="d-flex flex-column justify-content-center w-75">
          <Field type="title" name="title" className="form-control mb-3" placeholder="Заголовок" />
          <Field type="body" name="body" className="form-control mb-3" placeholder="Текст заметки" />
          <button type="submit" disabled={isSubmitting} className="btn btn-secondary btn-lg mt-2">
            Добавить заметку в блокнот
          </button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default AddingForm;
