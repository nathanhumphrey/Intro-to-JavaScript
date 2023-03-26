const MODULE_VAR = 'Some module variable';

function fetchJSON(url, handler) {
  fetch(url)
      .then((response) => response.json())
      .then((data) => handler(data));
}

export {MODULE_VAR, fetchJSON};
