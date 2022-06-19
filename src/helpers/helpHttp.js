export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      /* Setting the default header to accept json. */
      accept: 'application/json',
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then(res =>
        res.ok
          ? res.json()
          : // eslint-disable-next-line prefer-promise-reject-errors
            Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurrió un error',
            })
      )
      .catch(err => err);
  };

  /**
   * It's a wrapper around the native fetch API that allows you to pass in a custom fetch function
   * @param url - The URL to fetch.
   * @param [options] - This is an object that contains the following properties:
   */
  const get = (url, options = {}) => customFetch(url, options);

  /**
   * It takes a URL and an options object, sets the options object's method property to POST, and then
   * calls the customFetch function with the URL and options object
   * @param url - The URL to fetch.
   * @param [options] - This is an object that contains the following properties:
   * @returns A function that takes two parameters, url and options.
   */
  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  /**
   * It takes a URL and an options object, sets the method property of the options object to 'PUT', and
   * then calls the customFetch function with the URL and the options object
   * @param url - The URL to fetch.
   * @param [options] - This is an object that contains the following properties:
   * @returns A function that takes two parameters, url and options.
   */
  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  /**
   * It takes a URL and an options object, sets the options object's method property to 'DELETE', and
   * then calls the customFetch function with the URL and the options object
   * @param url - The url to make the request to.
   * @param [options] - This is an object that contains the following properties:
   * @returns A function that takes two parameters, url and options.
   */
  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
