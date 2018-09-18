const download = (url, fileName) => {
  const xhr = new XMLHttpRequest(); 
  xhr.open('GET', url, true); 
  xhr.responseType = "blob";
  xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (typeof window.chrome !== 'undefined') {
        // Chrome version
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(xhr.response);
        link.download = fileName;
        link.click();
      } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE version
        const blob = new Blob([xhr.response], { type: 'application/force-download' });
        window.navigator.msSaveBlob(blob, fileName);
      } else {
        // Firefox version
        const file = new File([xhr.response], fileName, { type: 'application/force-download' });
        window.open(URL.createObjectURL(file));
      }
    }
  };
  xhr.send(null);
}

export default download;
