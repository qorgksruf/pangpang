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
								<div class="price"> 	25,000원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
								<div class="unitprice"> (100g당 280원 )										</div>
								<div class="date"> 		내일(목) 3/23 도착 보장									</div>			
								<div class="pcontent"> 	${r.product_content}  								</div>
								<div> <button class="cartIn" onclick="cartIn()" type="button">${r.product_option} * 
								<select class="amount">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select> ${r.product_unit}</button> </div>
								<div class="extra_info">
									팡페이 머니 결제시 1% 적립 <br>
									[팡팡와우 + 팡페이 계좌이체] 결제 시 2% 적립	<br>
									[팡팡와우 + 팡페이 머니] 결제 시 4% 추가 적립 2899일 남음<br>
									<button class="pangpang" type="button">팡팡와우 무료 체험 신청하기</button>
								</div>
							</div>
						</div>`;		
			document.querySelector('.product_view_wrap').innerHTML = html ;
		} // success e
	})	
} // getProductList e

// 3. 장바구니 담기
function cartIn(pno){
	
	let amount = document.querySelector('.amount').innerHTML;
	console.log(amount)
	
	$.ajax({
		url 	: "/pangpang/cart",
		method	: "post",
		data 	: {"pno":pno, "amount":amount},
		async	: false,
		success	: (r)=>{
			console.log(r)
			
			
			
		}// success e
	}); // ajax e
}// cartIn e
