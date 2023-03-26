console.log('product_list js')

let cno = document.querySelector('.cno').value;
console.log(cno);
// 0. 사이드바 카테고리 리스트 출력
// 1. 카테고리 리스트 출력
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



// 1. 카테고리별 제품 리스트 출력
getProductList(cno) 
function getProductList(cno){
	
	$.ajax({
		url 	: "/pangpang/product",
		method	: "get",
		async	: false,
		data 	: {"type":1, "cno":cno},
		success	: (r)=>{
			console.log(r)

			document.querySelector('.title').innerHTML = r.category_name ;
			
			let html = '';			
			r.forEach((o)=>{
				html += `<div class="item"> 
								<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/{o.product_img} ">  </div>
								<div class="pname"> 	${o.product_name}  </div>
								<div class="price"> 	5400원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
								<div class="unitprice"> (100g당 280원 )										</div>
								<div class="date"> 		내일(목) 3/23 도착 보장									</div>
							</div>`;
			})
			document.querySelector('.product_wrap').innerHTML = html ;
		} // success e
	}) // ajax e	
} // getProductList e