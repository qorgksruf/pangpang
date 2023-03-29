console.log('product_view')

let pno = document.querySelector('.pno').value;
console.log(pno);

// 1. 사이드바 카테고리 리스트 출력
getCategoryList() 
function getCategoryList(){
	
	$.ajax({
		url 	: "/pangpang/category",
		method	: "get",
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = ``;
			r.forEach((o)=>{
				html += `<a href="/pangpang/product/product_list.jsp?cno=${o.category_no}" class="list-group-item list-group-item-action"> ${o.category_name} </a>`;
			})
			document.querySelector('.categorylist').innerHTML = html ;
		} // success e
	}) // ajax e	
} // getCategory e


// 2. 제품 1개 출력
getProduct(pno) 
function getProduct(pno){	
	$.ajax({
		url 	: "/pangpang/product",
		method	: "get",
		data 	: {"type":3, "pno":pno},
		async	: false,
		success	: (r)=>{
			console.log(r)
			let html = `
						<div class="item"> 
							<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/${r.product_img}"> 	</div>
							<div class="product_info">
								<div class="pname"> 	${r.product_name}  									</div>
								<div class="price"> 	${r.product_price.toLocaleString()} 원
									<img class="mini_logo" alt="" src="/pangpang/product/pimg/PANG.png">
									<span class="mini_mark">팡팡배송</span>		
								</div>
								<div class="unitprice"> (100g당 280원 )										</div>
								<div class="date"> 		내일(목) 3/23 도착 보장									</div>											
								<div class="cart_option"> 
									<span class="product_option"> ${r.product_option} </span>
									<select class="amount" >
										<option value="1"> 1 ${r.product_unit} </option>
										<option value="2"> 2 ${r.product_unit} </option>
										<option value="3"> 3 ${r.product_unit} </option>
										<option value="4"> 4 ${r.product_unit} </option>
									</select>
									<button class="cartbtn" onclick="cartIn(${r.product_no})" type="button"> 장바구니 </button> 
								</div>
								<div class="extra_info">
									팡페이 머니 결제시 1% 적립 <br>
									[팡팡와우 + 팡페이 계좌이체] 결제 시 2% 적립	<br>
									[팡팡와우 + 팡페이 머니] 결제 시 4% 추가 적립 2899일 남음<br>
								</div>
								<button class="pangpang" type="button">팡팡와우 무료 체험 신청하기</button>
							</div>
						</div>`;		
			document.querySelector('.product_view_wrap').innerHTML = html ;
		} // success e
	})	
} // getProductList e

// 3. 장바구니 담기
function cartIn(pno){
	
	console.log(pno)
	let amount = document.querySelector('.amount').value;
	console.log(amount)
	
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "post",
		data 	: {"pno":pno, "amount":amount},
		success	: (r)=>{
			console.log(r)
			if(r == '1'){alert('장바구니 등록 성공'); location.href="/pangpang/product/product_list.jsp?cno=1";}
			else if(r == '2'){alert('장바구니 등록 실패[관리자에게 문의해주세요]')}		
			else if(r == '3'){alert('장바구니에 존재하는 상품입니다.')}	
		}// success e
	}); // ajax e
}// cartIn e


