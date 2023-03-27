console.log('item_list js')

// 1. 품목 전체 출력
getItemList()
function getItemList(){
	$.ajax({
		url 	: "/pangpang/product",
		method	: "get",
		data 	: {"type":1},
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = `<tr>
							<th> 카테고리명 </th><th> 제품번호 </th><th> 제품명 </th><th> 제품규격 </th><th> 포장단위 </th><th> 잔여재고 </th><th> 비고 </th>
						</tr>`;						
			r.forEach((o)=>{
				html += `<tr>
							<td> ${o.category_name} </td>	<td> ${o.product_no} </td>	<td> ${o.product_name} </td>	
							<td> ${o.product_option} </td> 	<td> ${o.product_unit} </td><td> ${o.product_count} </td>	
							<td>
								<button class="updatebtn" onclick="product_update()" type="button"> 수정 </button>
								<button class="deletebtn" onclick="product_delete()" type="button"> 삭제 </button>
							</td>		
						</tr>`;
			})			
			document.querySelector('.itemlist').innerHTML = html ;
		} // success e
	}) // ajax e		
}
// 2. 검색된 품목 출력
function search(){
	let keyword = document.querySelector('.keyword').value;
	
	$.ajax({
		url 	: "/pangpang/product",
		method	: "get",
		data 	: {"type":4, "keyword":keyword},
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = `<tr>
							<th> 카테고리명 </th><th> 제품번호 </th><th> 제품명 </th><th> 제품규격 </th><th> 포장단위 </th><th> 잔여재고 </th><th> 비고 </th>
						</tr>`;						
			r.forEach((o)=>{
				html += `<tr>
							<td> ${o.category_name} </td>	<td> ${o.product_no} </td>	<td> ${o.product_name} </td>	
							<td> ${o.product_option} </td> 	<td> ${o.product_unit} </td><td> ${o.product_count} </td>	
							<td>
								<button class="updatebtn" onclick="product_update()" type="button"> 수정 </button>
								<button class="deletebtn" onclick="product_delete()" type="button"> 삭제 </button>
							</td>		
						</tr>`;
			})			
			document.querySelector('.itemlist').innerHTML = html ;
			document.querySelector('.keyword').value = '';
		} // success e
	}) // ajax e		
}

// 3. 품목 등록 

