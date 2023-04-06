getMember()
function getMember(){
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "get" , 
		data : { "type":2 ,"member_no":memberInfo.member_no} ,
		success : (r)=>{ 
			console.log(r)
			
			
			document.querySelector('.member_address').value = r.member_address;
			document.querySelector('.member_email').value = r.member_email;
			document.querySelector('.member_id').value = r.member_id;
			document.querySelector('.member_name').value = r.member_name;
			document.querySelector('.member_no').value = r.member_no;
			document.querySelector('.member_phone').value = r.member_phone;
			//document.querySelector('.member_pwd').value = r.member_pwd;
			document.querySelector('.member_rank').value = r.member_rank;
			document.querySelector('.member_birth').value = r.member_birth;
		
		}
	})
}

function update(){
	console.log('마이페이지 수정')
	let info = {
		type:1,
		member_no : document.querySelector('.member_no').value,
		member_name : document.querySelector('.member_name').value,
		member_birth : document.querySelector('.member_birth').value,
		member_email : document.querySelector('.member_email').value,
		member_phone : document.querySelector('.member_phone').value,
		member_id : document.querySelector('.member_id').value,
		member_address : document.querySelector('.member_address').value,
		member_rank: document.querySelector('.member_rank').value
	}
	console.log(info)
	
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "put" , 
		data : info ,
		success : (r)=>{ 
			console.log(r)
			if(r=="true"){
				alert('수정 성공')
				location.reload();
			}else{
				alert('수정실패')
				location.reload();
			}
			
		}
	}) // ajax end	*/ 
}

function drop(){
	let member_pwd = prompt('비밀번호')
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "delete" , 
		data : {"type":1,"member_pwd":member_pwd} ,
		success : (r)=>{ 
			console.log(r)
			if(r=="true"){
				alert('탈퇴 성공')
				location.href='/pangpang/main.jsp'
			}else{
				alert('탈퇴 실패[비밀번호가 다릅니다]')
				location.href='/pangpang/main.jsp'
			}
			
		}
	}) // ajax end	*/ 
}


function updatepwd(){
	let member_pwd = prompt('현재 비밀번호')
	let member_npwd = prompt('새 비밀번호')
	
	let info = {
		type : 2,
		member_npwd : member_npwd,
		member_pwd : member_pwd
	}
	console.log(info)
	
	$.ajax({
		url : "/pangpang/member/info" ,	// 서블릿 클래스의 @WebServlet("/member")
		method :"put" ,			// 메소드 선택
		data : info ,
		success : (r)=>{ 
			console.log(r)
			if( r == 'true'){
				alert('비밀번호 변경 성공');
				location.href="/pangpang/member/logout.jsp"; // 해당 페이지 이동 */
			}else{ alert('비밀번호 변경 실패[비밀번호가 틀렸습니다]') }
		} // success end 
	}) // ajax end 
}


// * pageObject : 현재페이지, 검색, 전송타입 보관된 객체 
let pageObject = {
	page 	 : 1,
	key 	 : "key",
	keyword  : "keyword", 
	type 	 : -1,
	listsize : 10,
	mno		 : 0,
}
getOrderList()
// 주문 내역 
function getOrderList(){
	pageObject.mno = memberInfo.member_no;	
	$.ajax({
		url 	: "/pangpang/order",
		method	: "get",
		data 	: pageObject,
		success	: (r)=>{
			console.log(r)
			let html = ``;
			if( r.orderList.length == 0){
				html += `<tr> <th> 주문한 내역이 없습니다. </th> </tr>`
			}else{
				r.orderList.forEach((o)=>{
				 html += `<table class="item">
				 		<tr>
							<th width="10%"> 주문번호	  </th> 
							<td >  ${o.ordermanagement_no} </td>
						</tr>
						<tr>
							<th width="10%"> 주문일자	  </th> 
							<td >  ${o.ordermanagement_date} </td>
						</tr>				
						<tr>
							<th width="10%"> 주문상태	  </th> 
							<td > ${ o.ordermanagement_state==1?'결제확인중':
									o.ordermanagement_state==2?'결제확인':
									o.ordermanagement_state==3?'배송지연':
									o.ordermanagement_state==4?'배송중':
									o.ordermanagement_state==5?'배송완료':'거래완료'
							} </td>
						</tr>`;
								
				$.ajax({
					url 	: "/pangpang/order",
					method	: "get",
					data 	: {"type":-2,"ordermanagement_no":o.ordermanagement_no},
					async	: false,
					success	: (r)=>{
						console.log(r)
						
						r.list.forEach((o)=>{
							html += `<tr>
										<td rowspan="2"> <img src="/pangpang/product/pimg/${o.product_img}" width="50px" height="50px"> </td> 
										<td > ${o.product_name}</td>
									</tr>
									<tr>
										<td > ${o.product_price.toLocaleString()} 원 <span> ${o.cart_amount+o.product_unit} </span> </td>
									</tr>`
						})
						
						html += 	`<tr>
										<th> 결제정보 </th> 
										<td > ${r.payment_how+" / "+r.payment_date+" / "+r.payment_price.toLocaleString()} 원 </td>
									</tr>
									</table>`
																			
						}// success e
					}); // ajax e	
				})
			}
			document.querySelector('.receiver_info').innerHTML = html;
		}// success e
	});	// ajax e
}		
			
			
			
			
			
			