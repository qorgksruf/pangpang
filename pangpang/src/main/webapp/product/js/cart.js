console.log('cart js')

// 로그인한 회원 장바구니 제품 출력 
getCartList()
function getCartList(){
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "get",
		success	: (r)=>{
			console.log(r)
			let html = '';
			r.forEach((o)=>{
				html += `<div class="cart_item">
							<input class="checkbox" type="checkbox">
							<img class="cart_img"  src="/pangpang/product/pimg/${o.product_img}" alt="">
							
							<div class="product_info">
								<div class="pname"> ${o.product_name} </div>
								<div> 
									<span>내일(목) 3/28 도착 보장 </span>
									<span>(서울경기 기준)</span>
									<span>13,800원 </span>
									<select>
										<option> 1 </option>
										<option> 2 </option>
										<option> 3 </option>
									</select>
									<span>13,800원 </span>
									<span> <i class="far fa-times-circle"></i> </span>
								</div>					
							</div>
		
							<div class="pprice">
								13,800원 <br>
								<img  class="mini_logo" alt="" src="/pangpang/product/pimg/PANG.png">
								<span class="mini_mark">팡팡배송</span>
							</div>
							<div class="delivery_price"> 무료 </div>
						</div>`
			})
			document.querySelector('.cartlist').innerHTML = html;		
		}// success e
	}); // ajax e	
}// getCartList e

// 선택한 제품 장바구니 삭제
function deleteCart_Select(){	
	
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "delete",
		data	: {"type":1},
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('장바구니 등록 성공')}
			else{alert('장바구니 등록 실패[관리자에게 문의해주세요]')}			
		}// success e
	}); // ajax e	
}// getCartList e


// 전체 장바구니 삭제 
function deleteCart_All(){
	
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "delete",
		data	: {"type":2},
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('장바구니 등록 성공')}
			else{alert('장바구니 등록 실패[관리자에게 문의해주세요]')}			
		}// success e
	}); // ajax e	
}// getCartList e