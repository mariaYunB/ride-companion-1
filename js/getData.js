const getData = () => fetch(`/data.json`)
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    throw new Error();
  })
  .then((res) => res.json());

window.getData = getData;
