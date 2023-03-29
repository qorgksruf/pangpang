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
								<button class="updatebtn" onclick="openmodal_U(${o.product_no})" type="button"> 수정 </button>
								<button class="deletebtn" onclick="openmodal_D(${o.product_no})" type="button"> 삭제 </button>
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
								<button class="updatebtn" onclick="openmodal_U(${o.product_no})" type="button"> 수정 </button>
								<button class="deletebtn" onclick="openmodal_D(${o.product_no})" type="button"> 삭제 </button>
							</td>		
						</tr>`;
			})			
			document.querySelector('.itemlist').innerHTML = html ;
			document.querySelector('.keyword').value = '';
		} // success e
	}) // ajax e		
}

// 3. 모달 영역
// 제품 등록용 모달
function openmodal_R(){	
	// 4. 등록 카테고리 목록 출력
	$.ajax({
		url 	: "/pangpang/category",
		method	: "get",
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = ``;
			r.forEach((o)=>{
				html += `<option value="${o.category_no}"> ${o.category_name} </option>`;
			})
			document.querySelector('.categorylist1').innerHTML = html ;
		} // success e
	}) // ajax e
	document.querySelector('.modalregister').style.display='flex';
}
function closemodal_R(){
	document.querySelector('.modalregister').style.display='none';
}
// 제품 수정용 모달
function openmodal_U(){
	// 4. 등록 카테고리 목록 출력
	$.ajax({
		url 	: "/pangpang/category",
		method	: "get",
		success	: (r)=>{
			console.log(r)
			let html = ``;
			r.forEach((o)=>{
				html += `<option value="${o.category_no}"> ${o.category_name} </option>`;
			})
			document.querySelector('.categorylist2').innerHTML = html ;
		} // success e
	}) // ajax e
	document.querySelector('.modalupdate').style.display='flex';

}
function closemodal_U(){
	document.querySelector('.modalupdate').style.display='none';
}
// 제품 삭제용 모달
function openmodal_D(){
	document.querySelector('.modaldelete').style.display='flex';

}
function closemodal_D(){
	document.querySelector('.modaldelete').style.display='none';
}

// 품목 등록
function item_register(){
	
	let registerForm = document.querySelectorAll('.registerForm')[0];// 첫번째 form 가져오기	
	let registerFormData = new FormData(registerForm);
	console.log(registerFormData.get("product_price"))
	$.ajax({
		url 	: "/pangpang/product",
		method	: "post",
		data 	: registerFormData,
		contentType : false,
        processData : false,
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('품목 등록 성공');closemodal_U();}
			else{alert('품목 등록 실패');closemodal_U();}
		} // success e
	}) // ajax e		
}

// 품목 수정
function item_update(){

	let updateForm = document.querySelectorAll('.updateForm')[0];// 첫번째 form 가져오기	
	let updateFormData = new FormData(updateForm);
	updateFormData.set('product_no',pno);

	$.ajax({
		url 	: "/pangpang/product",
		method	: "put",
		data 	: updateFormData,
		contentType : false,
        processData : false,
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('품목 수정 성공');closemodal_D();}
			else{alert('품목 수정 실패');closemodal_D();}
		} // success e
	}) // ajax e		
}

// 제품 삭제
function item_delete(){

	$.ajax({
		url 	: "/pangpang/product",
		method	: "delete",
		data 	: {"pno":pno},
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('품목 삭제 성공');location.href="/pangpang/product/item_list.jsp";}
			else{alert('품목 삭제 실패')}
			
		} // success e
	}) // ajax e		
}






 