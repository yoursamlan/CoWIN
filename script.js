function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function vac(url) {
	const response = await fetch(url);
	//console.log(response);
	const data = await response.json();

	t = 20000 / data.sessions.length;

	for (var i = 0; i < data.sessions.length; i++) {

		var x = data.sessions[i];
		var d1 = x.available_capacity_dose1;
		var d2 = x.available_capacity_dose2;
		var pincode = x.pincode;
		var name = x.name;

		var cid = x.center_id;
		var mial = x.min_age_limit;
		var vaccine = x.vaccine;

		document.getElementById("pincode").innerHTML = pincode;
		//console.log(data.sessions[i]);
		//if (d1>0 || d2>0){ //705586



		document.getElementById("center").innerHTML = name;
		document.getElementById("vaccine").innerHTML = vaccine;
		document.getElementById("mial").innerHTML = mial;
		document.getElementById("d1").innerHTML = d1;
		document.getElementById("d2").innerHTML = d2;
		//document.getElementById("d1").innerHTML = d1;

		console.log(t);
		await sleep(t);

		//}
	}
}

function d1() {

	pincode = 732101;


	var MyDate = new Date();
	var nextDate = new Date();
	MyDate.setDate(MyDate.getDate() + 00);
	nextDate.setDate(MyDate.getDate() + 01);
	MyDateString = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
	nextDateString = ('0' + nextDate.getDate()).slice(-2) + '-' + ('0' + (nextDate.getMonth() + 1)).slice(-2) + '-' + nextDate.getFullYear();
	var time = ('0' + MyDate.getHours()).slice(-2) + ":" + ('0' + MyDate.getMinutes()).slice(-2) + ":" + ('0' + MyDate.getSeconds()).slice(-2);
	var dateTime = MyDateString + ' ' + time;

	if (MyDate.getHours() <= 12) {
		urldate = MyDateString;
	} else {
		urldate = nextDateString;
	}
	
	document.getElementById("tnow").innerHTML = dateTime;

	var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pincode + "&date=" + urldate;
	vac(url);
}


function main() {
	setInterval('d1();', 20000);
}
