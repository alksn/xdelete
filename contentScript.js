





console.log("start Xt");

init();


async function init() {


	// 1560 = 5 hours 10 minutes
	var i;
	for (i = 0; i < 225602560; i++) {
		await sleep(3000);
		if (window.document.baseURI == "https://www.x-time.ru/cgi-bin/startchat.cgi")
		{
			foo();
		}
		console.log("Done waiting");
	} 

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}




/*
function foo() {
	// this.messages - это имя фрейма
	var n = this.messages.document.querySelectorAll("body")[0].childNodes.length - 1
	var l = 0

	var k = 0
	// при удалении количество нод уменьшается и неизвестно сколько их будет
	while (k <= n - 1)
	{
		if (this.messages.document.querySelectorAll("body")[0].childNodes[k].innerText != undefined)
			l = this.messages.document.querySelectorAll("body")[0].childNodes[k].innerText.length
		else
			// когда текст без ноды, т.е. просто черный
			l = this.messages.document.querySelectorAll("body")[0].childNodes[k].nodeValue.length
			
		if (l > 100) 
		{
			this.messages.document.querySelectorAll("body")[0].childNodes[k].remove()
			n = n - 1
			console.log("del="+k)
		}
		k = k + 1;
	}
}
*/



function foo() {
	// this.messages - это имя фрейма
	var n = this.messages.document.querySelectorAll("body")[0].childNodes.length - 1
	var l = 0
	var spam = false
	var text_node = false

	var k = 0
	// при удалении количество нод уменьшается и неизвестно сколько их будет
	while (k <= n - 1)
	{
		
		text_node = (this.messages.document.querySelectorAll("body")[0].childNodes[k].innerText == undefined)
		
		if (text_node)
			// когда текст без ноды, т.е. просто черный
			l = this.messages.document.querySelectorAll("body")[0].childNodes[k].nodeValue.length
		else
			l = this.messages.document.querySelectorAll("body")[0].childNodes[k].innerText.length


		if (l <= 100)
		{
			if (text_node)
				spam = this.messages.document.querySelectorAll("body")[0].childNodes[k].nodeValue.toString().includes("_____")
			else
				if (this.messages.document.querySelectorAll("body")[0].childNodes[k].getAttribute('src') != null){
					spam = this.messages.document.querySelectorAll("body")[0].childNodes[k].getAttribute('src').toString().includes("85.gif") // смайлик <img src="/chat/ic/85.gif">
					console.log("85.gif="+spam)
				}
		}

			
		if ((l > 100) || spam)
		{
			this.messages.document.querySelectorAll("body")[0].childNodes[k].remove()
			n = n - 1 // общее количество нод уменьшается после удаления
			k = k - 1 // т.к. следующая нода тоже спам
			console.log("del="+k+" l="+l+" spam="+spam)
		}

		spam = false;
		k = k + 1;
	}
}














