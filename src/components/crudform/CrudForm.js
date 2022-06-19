import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Setting the initial state of the form. */
const initailForm = {
  name: '',
  constellation: '',
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  /* Checking if there is a data to edit, if there is, it will set the form to the data to edit, if not,
it will set the form to the initial form. */
  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initailForm);
  }, [dataToEdit]);

  /**
   * `handleChange` is a function that takes an event as an argument, and sets the state of the form to
   * the value of the event target
   */
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * If the form is empty, it will alert the user that the form is incomplete. If the form is not empty,
   * it will either create a new data or update the existing data
   * @returns The form is being returned.
   */
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.constellation) {
      alert('Incomplete Data');
      return;
    }
    if (form.id === null) createData(form);
    else updateData(form);
    handleReset();
  };

  /**
   * It resets the form to its initial state and clears the data to edit
   */
  const handleReset = e => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          value={form.name}
        />
        <input
          type='text'
          name='constellation'
          placeholder='Constelación'
          onChange={handleChange}
          value={form.constellation}
        />
        <input
          type='submit'
          value='Enviar'
        />
        <input
          type='reset'
          value='Limpiar'
          onClick={handleReset}
        />
      </form>
    </div>
  );
};

/* A validation of the props that are being passed to the component. */
CrudForm.propTypes = {
  createData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  dataToEdit: PropTypes.object,
  setDataToEdit: PropTypes.func.isRequired,
};
export default CrudForm;
