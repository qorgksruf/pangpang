get();

function get(){
	
	$.ajax({
		url : "/pangpang/crawling",
		method : "get",
		success : ( r ) => {
			
			let html = `
						<div class="temp"> ${r.current} </div>
						<div class="summary"> ${r.summary} </div>
						`
			document.querySelector('.temp_area').innerHTML = html ;
			
		}	
	})
}

