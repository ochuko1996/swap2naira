function verifyBank(bankCode, accountNumber){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
    "account_number": accountNumber,
    "bank_code": bankCode
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://merchant.birrionapi.com/api/verify-bank-account", requestOptions)
      

    .then(response => response.text())
    .then(result =>  {
         let bank_result = JSON.parse(result);
         if(!bank_result.status){
            loading.style.display = "block";
            success.style.display = "none";
            accname.textContent = "";
            getAlert("Invalid Account Details", "danger");
        }else{
             return bank_result.data;
        }
    })
    .then(verifydetail => { 
		accname.textContent = verifydetail.accountname;
        accnamevalue.value = verifydetail.accountname;
        email.value = "ogologyprince@gmail.com";
        // emailBox.style.display = "block";
        // phone.value="09045998959";
        // phoneBox.style.display = "block";
        loading.style.display = "none";
		success.style.display = "block";

        getAlert("Account Verification Successful", "success");
    })
    .catch(error => console.log('error', error));
}

        // fetch("https://www.swap2naira.com/api/bank/bankuser.json", requestOptions)

