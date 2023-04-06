console.log('drop js')


let droplist = [];
 getDropList()
function getDropList(){
	console.log('droplist 실행')
	$.ajax({
		url 	: "/pangpang/drop",
		method	: "get",
		async	: false,
		success	: (r)=>{
			droplist = r;
			let html = `<tr> 
							<th> 제품번호 		</th> 
							<th> 제품이름		</th> 
							<th> 수량 		</th>
						</tr>`;
			if(droplist==null){
				html += `<tr><td colspan="2"> 금일 폐기 대상이 없습니다. </td></tr>`
			}else{
				droplist.forEach((o)=>{
					html += `<tr>
								<th> ${o.product_no}</th> 
								<th> ${o.product_name}</th> 
								<th> ${o.stockmanagementamount}</th>				
							</tr>`
				})
				document.querySelector('.droplist').innerHTML = html ;				
			}
		}
	});
	
}

function drop(){
	
	$.ajax({
		url 	: "/pangpang/drop",
		method	: "post",
		async	: false,
		data    : droplist,
		success	: (r)=>{
			console.log(r);
			 getDropList();
		}		
	})	
}