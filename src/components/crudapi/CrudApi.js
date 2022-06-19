import { useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from '../crudform/CrudForm';
import Loader from '../loader/Loader';
import CrudTable from '../crudtable/CrudTable';
import Message from '../message/Message';

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = 'http://localhost:5000/santos';

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then(res => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = data => {
    data.id = Date.now();
    /* Setting the body of the request to the data that is being passed in. */
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    /* Creating a new entry in the database. */
    api.post(url, options).then(res => {
      if (!res.err) setDb([...db, res]);
      else setError(res);
    });
  };

  /**
   * It takes in a data object, creates an endpoint using the url and the data's id, creates an options
   * object with the data as the body and a content-type header, and then uses the api's put method to
   * update the data
   */
  const updateData = data => {
    const endpoint = `${url}/${data.id}`;
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.put(endpoint, options).then(res => {
      if (!res.err) {
        const newData = db.map(el => (el.id === data.id ? data : el));
        setDb(newData);
      } else setError(res);
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
        if (!res.err) {
          const newData = db.filter(el => el.id !== id);
          setDb(newData);
        } else setError(res);
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
