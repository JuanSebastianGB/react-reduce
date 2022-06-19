import { useEffect, useReducer, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from '../crudform/CrudForm';
import Loader from '../loader/Loader';
import CrudTable from '../crudtable/CrudTable';
import Message from '../message/Message';
import { crudInitialState, crudReducer } from '../../reducers/crudReducer';
import { TYPES } from '../../actions/crudActions';

const CrudApi = () => {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { db } = state;

  const api = helpHttp();
  const url = 'http://localhost:5000/santos';

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then(res => {
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  /**
   * It takes in a data object, adds an id property to it, and then sends it to the server
   */
  const createData = data => {
    data.id = Date.now();
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.post(url, options).then(res => {
      if (!res.err) dispatch({ type: TYPES.CREATE_DATA, payload: data });
      else setError(res);
    });
  };

  /**
   * It takes in a data object, creates an endpoint using the url and the data's id,
   * creates an options object with the data as the body and a content-type header,
   * and then uses the api's put method to update the data
   */
  const updateData = data => {
    const endpoint = `${url}/${data.id}`;
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.put(endpoint, options).then(res => {
      if (!res.err) dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      else setError(res);
    });
  };

  /**
   * It deletes the row with the given id from the database
   */
  const deleteData = id => {
    const isDelete = window.confirm(
      `¿Are you sure that you want to delete the row with id '${id}'?`
    );
    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { 'content-type': 'application/json' },
      };
      api.del(endpoint, options).then(res => {
        if (!res.err) dispatch({ type: TYPES.DELETE_DATA, payload: id });
        else setError(res);
      });
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor='#dc3545'
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
