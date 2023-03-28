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
							<input name="cart" value="${o.product_no}" type="checkbox" onclick='checkSelectAll(this)'>
							<img class="cart_img"  src="/pangpang/product/pimg/${o.product_img}" alt="">
							
							<div class="product_info">
								<div class="pname"> ${o.product_name} </div>
								<div class="product_info_bottom"> 
									<span>내일(목) 3/28 도착 보장 </span>
									<span>(서울경기 기준)</span>
									<span>${o.product_price.toLocaleString()} 원 </span>
									<select name="amount" class="${o.product_no}" onchage="price(${o.product_no},${o.product_price})">
										<option value="1"> 1 ${o.product_unit}</option>
										<option value="2"> 2 ${o.product_unit}</option>
										<option value="3"> 3 ${o.product_unit}</option>
									</select>
									<span class="누적가격">${o.product_price.toLocaleString()} 원 </span>
									<span> <i class="far fa-times-circle"></i> </span>
								</div>					
							</div>
		
							<div class="pprice">
								${o.product_price.toLocaleString()} 원 <br>
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

function SelectAll()  {
	
	  let count = 0;
	  let productlist = [];
	  let amountlist =[];
	  let checkboxes = document.querySelectorAll('input[name="cart"]');
	  let select =  document.querySelectorAll('select[name="amount"]'); 
  
	  checkboxes.forEach((o)=>{o.checked = true;count++; productlist.push(o.value);})
	  select.forEach((o)=>{ amountlist.push(o.value);})
	  
	  console.log(checkboxes.length)
	  console.log(count)
	  console.log(productlist)
	  console.log(select)
	  console.log(amountlist)
	  
}

// 선택한 제품 장바구니 삭제
function deleteCart_Select(){		
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "delete",
		data	: {"type":1},
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('장바구니 비우기 성공')}
			else{alert('장바구니 비우기 실패[관리자에게 문의해주세요]')}			
		}// success e
	}); // ajax e	
}// getCartList e


// 전체 장바구니 삭제 
function deleteCart_All(){
	
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "delete",
		data	: {"type":2 },
		success	: (r)=>{
			console.log(r)
			if(r == 'true'){alert('장바구니 비우기 성공')}
			else{alert('장바구니 비우기 실패[관리자에게 문의해주세요]')}			
		}// success e
	}); // ajax e	
}// getCartList e