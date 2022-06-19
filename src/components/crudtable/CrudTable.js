import CrudTableRow from '../crudtablerow/CrudTableRow';
import PropTypes from 'prop-types';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(el => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan='3'>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

/* A validation of the props that are being passed to the component. */
CrudTable.propTypes = {
  data: PropTypes.array.isRequired,
  setDataToEdit: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default CrudTable;
