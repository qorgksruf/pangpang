console.log('order_list js')

// 전체 주문 리스트 출력
getOrderList()
function getOrderList(){
	
	$.ajax({
		url 	: "/pangpang/order",
		method	: "get",
		data 	: {"type":1},
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = `<tr>
							<th> 주문번호 </th><th> 주문일자 </th>
							<th>  
								<select>
									<option> 주문상태 	 </option>
									<option> 결제확인중 </option>
									<option> 결제확인 	 </option>
									<option> 배송지연 	 </option>
									<option> 배송중 	 </option>
									<option> 배송완료 	 </option>
									<option> 거래완료 	 </option>
								</select>
							</th>
							
							<th> 배송주소 </th><th> 주문회원 </th><th> 상세보기 </th>
						</tr>`;	
			
			r.forEach((o)=>{
				html += `<tr>
							<th> ${ o.ordermanagement_no} 		</th>
							<th> ${ o.ordermanagement_date} 	</th>
							<th> ${ o.ordermanagement_state==1?'결제확인중':
									o.ordermanagement_state==2?'결제확인':
									o.ordermanagement_state==3?'배송지연':
									o.ordermanagement_state==4?'배송중':
									o.ordermanagement_state==5?'배송완료':'거래완료'
							} </th>
							<th> ${o.ordermanagement_address} 	</th>
							<th> ${o.member_id} 			  	</th>
							<th> <button type="button"> 상세보기 </button></th>
						</tr>`;
				});
			document.querySelector('.orderlist').innerHTML = html ;	
		}// success e
	}); // ajax e	
}

