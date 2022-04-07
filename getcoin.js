const api_key = "ozhscJKQisFUx19mWOekERzdp6e2fLxo";


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://merchant.birrionapi.com/api/get_coins?api_key="+api_key, requestOptions)
    .then(response => response.text())
    .then(result => {
        return JSON.parse(result);
	})
    .then(coinlist=>{
        return coinlist.message;
    })
    .then(coindetail =>{
        for(let i=1; i<coindetail.length; i++){
            coinType.innerHTML += `<option value="${coindetail[i].symbol}">${coindetail[i].name}</option>`;
        }
    })
    .catch(error => console.log('error', error));

