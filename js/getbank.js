var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://merchant.birrionapi.com/api/get-banks", requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .then(bankinfo => bankinfo.data)
    .then(banklist => {
        for(let i=0; i<banklist.length; i++){
            bankName.innerHTML += `<option value="${banklist[i].code}">${banklist[i].name}</option>`;
        }
    })

    .catch(error => console.log('error', error));