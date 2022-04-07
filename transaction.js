
		fetch("https://www.swap2naira.com/api/bank/bankuser.json")
		.then(bank => console.log(bank))
		.catch(error => console.log('error', error));

		const coinType = document.getElementById("coinType");
		const bankName = document.getElementById("bankName");
		let accNum = document.getElementById("accnum");
		const accnamevalue = document.getElementById("accnamevalue");
		
		const loading = document.getElementById("loading");
		const success = document.getElementById("success");
		const accname = document.getElementById("accname");
	
		const bankBox = document.getElementById("bank_box");
		const accountBox = document.getElementById("account_box");
		const emailBox = document.getElementById("email_box");
		const phoneBox = document.getElementById("phone_box");
		const email = document.getElementById("email");
		const phone = document.getElementById("phone");
		let optV = "";

		coinType.addEventListener("change", ()=>{
			bankBox.style.display = "block";
			accNum.value = "";
			success.style.display = "none";
			accname.textContent = "";
			bankName.value = "-Select Bank-";
			accountBox.style.display = "none";

		})
		
		bankName.addEventListener("change", ()=>{
			if(bankName.value == "-Select Bank-"){
				accNum.value = "";
				success.style.display = "none";
				accname.textContent = "";
				accountBox.style.display = "none";
			}else{
				accountBox.style.display = "block";
				accNum.value = "";
				success.style.display = "none";
				accname.textContent = "";
			}
		})
		
		accNum.addEventListener("keyup", ()=>{
			let accNumValue = accNum.value;
			let accNumCount = accNumValue.length;

			if(accNumCount == 10){
				let accNumValu = accNum.value;
				let bankNameValu = bankName.value;
				loading.style.display = "block";
				success.style.display = "none";
				accname.textContent = "";
				verifyBank(bankNameValu, accNumValu); 
			}else if(accNumCount >= 10){
				loading.style.display = "block";
				success.style.display = "none";
				accname.textContent = "";
				getAlert("Invalid Account Details", "danger")
			}else{
				loading.style.display = "none";
				success.style.display = "none";
				accname.textContent = "";
			}
			//accountBox.style.display = "block";
		})
		

