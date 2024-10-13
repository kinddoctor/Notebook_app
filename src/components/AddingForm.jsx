import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function AddingForm () {
  const [error, setError] = useState(null);
  const [submissionState, setSubmissionState] = useState('waiting');
  let feedbackType = error ? "alert alert-danger text-center" : "alert alert-success text-center";
  let feedbackText = error ? "Ошибка добавления заметки" : "Заметка успешно добавлена";
  return (
    <div className="align-self-center d-flex flex-column justify-content-center align-items-center w-75 p-4 m-4">
      <p>
        Поле для добавления заметки
      </p>
      <Formik
      initialValues={{ header: '', text: '' }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('/api/1.0/function/Note/create', { entity: { id:'', header: values.header, text: values.text }})
          .catch((e) => {
            setError(e.message);
            console.log(e);
          })
          .finally(() => {
            setSubmitting(false);
            setSubmissionState('finished');
          })
      }}
    >
      {({ isSubmitting }) => (
        <Form className="d-flex flex-column justify-content-center w-75">
          <Field type="header" name="header" className="form-control mb-3" placeholder="Заголовок" />
          <Field type="text" name="text" className="form-control mb-3" placeholder="Текст заметки" />
          {submissionState === 'finished' ? <div className={feedbackType} role="alert">{feedbackText}</div> : null}
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
