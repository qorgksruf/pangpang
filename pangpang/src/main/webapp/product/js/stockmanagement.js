console.log('stock_list js')

// * pageObject : 현재페이지, 검색, 전송타입 보관된 객체 
let pageObject = {
	page 	 : 1,
	key 	 : "key",
	keyword  : "keyword", 
	type 	 : 0,
	listsize : 10
}

// 전체 주문 리스트 출력
getstockList(1)
function getstockList(page){	
	pageObject.page = page ; 
	$.ajax({
		url 	: "/pangpang/stock",
		method	: "get",
		data 	: pageObject,
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = `<tr>
							<th> 관리번호 </th>
							<th> 제품번호 </th> 
							<th>  
								<select class="stockmanagementtype" onchange="getstockList_type()">
									<option value="0"> 구분 </option>
									<option value="1"> 입고 </option>
									<option value="2"> 출고 </option>
									<option value="3"> 폐기 </option>
								</select>
							</th>
							<th> 업체 </th><th> 일자      </th><th> 수량 </th>
							<th> 단가 </th><th> 예정 폐기일 </th><th> 비고 </th>
						</tr>`;	
			
			r.forEach((o)=>{
				html += `<tr>
							<td> ${ o.stockmanagementno} 		</td>
							<td> ${ o.product_no} 				</td>
							<td> ${ o.stockmanagementtype==1?'입고':
									o.stockmanagementtype==2?'출고':'폐기'
								} 	</td>
							<td> ${ o.stockmanagementcompany} 	</td>
							<td> ${ o.stockmanagementdate} 		</td>
							<td> ${ o.stockmanagementamount} 	</td>
							<td> ${ o.product_price} 			</td>
							<td> ${ o.stockmanagementenddate==null?'':o.stockmanagementenddate} </td>
							<td> 			  </td>
						</tr>`;
				});
			document.querySelector('.stocklist').innerHTML = html ;	
			
			html = '' ;
			html += page <=1 ? ``:
				`<li class="page-item"><a class="page-link" onclick="getstockList(${page-1})"> &laquo;  </a> </li>`;
			for(let i=r.startbtn ; i<=r.endbtn ; i++){
				html += `<li class="page-item" ><a class="page-link" onclick="getstockList(${i})"> ${i} </a> </li>`
			}
			html += page >= r.totalpage ? ``:
				`<li class="page-item"><a class="page-link" onclick="getstockList(${page+1})"> &raquo;  </a> </li>`
				
			document.querySelector('.pagination').innerHTML = html;
			
		}// success e
	}); // ajax e	
}
// 주문상태별 리스트 출력
function getstockList_type(){
	pageObject.type = document.querySelector('.stockmanagementtype').value;
	getstockList(1);	
}
// 검색된 리스트 출력
function search(){
	// 입력받은 데이터를 전역변수 필드에 대입 
	pageObject.key     = document.querySelector('.key').value;
	pageObject.keyword = document.querySelector('.keyword').value;
	console.log(pageObject)
	getstockList(1);
}
function reset(){
	pageObject.key     = '';
	pageObject.keyword = '';
	getstockList(1);
}