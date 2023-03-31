console.log('stock_list js')

// 전체 주문 리스트 출력
getstockList()
function getstockList(){
	
	$.ajax({
		url 	: "/pangpang/stock",
		method	: "get",
		data 	: {"type":1},
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = `<tr>
							<th> 관리번호 </th>
							<th> 제품번호 </th> 
							<th>  
								<select>
									<option> 구분 </option>
									<option> 입고 </option>
									<option> 출고 </option>
									<option> 폐기 </option>
								</select>
							</th>
							<th> 업체 </th><th> 일자      </th><th> 수량 </th>
							<th> 단가 </th><th> 예정 폐기일 </th><th> 비고 </th>
						</tr>`;	
			
			r.forEach((o)=>{
				html += `<tr>
							<th> ${ o.stockmanagementno} 	</th>
							<th> ${ o.product_no} 			</th>
							<th> ${ o.stockmanagementtype==1?'입고':
									o.stockmanagementtype==2?'출고':'폐기'
								} 	</th>
							<th> ${ o.stockmanagementcompany} </th>
							<th> ${ o.stockmanagementdate} </th>
							<th> ${ o.stockmanagementamount} 			  </th>
							<th> ${ o.product_price} 			  </th>
							<th> ${ o.stockmanagementenddate==null?'':o.stockmanagementenddate} 	  </th>
							<th> 			  </th>
						</tr>`;
				});
			document.querySelector('.stocklist').innerHTML = html ;	
		}// success e
	}); // ajax e	
}
