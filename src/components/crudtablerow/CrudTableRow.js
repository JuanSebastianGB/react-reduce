import PropTypes from 'prop-types';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { name, constellation, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

/* A way to validate the props that are being passed to the component. */
CrudTableRow.propTypes = {
  el: PropTypes.object.isRequired,
  setDataToEdit: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default CrudTableRow;
