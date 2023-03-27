<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 장바구니 </title>

	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/cart.css" rel="stylesheet">

</head>
<body>
	
	<%@ include file = "/header.jsp" %>	
	
	<div class="container">

		<h3> 장바구니 </h3>
		
		<div class="cart_wrap"> 
			<div class="top_menu">
				<input class="checkbox" type="checkbox"><span class="selectAll">전체선택 </span>		 
				<span class="product_info">상품정보</span><span>상품금액</span><span>배송비</span>
			</div>
			<div class="top_menu">
					<span> 팡팡배송 상품 무료배송 (19,000원 이상 무료 배송)</span>
			</div>
			
			<div class="cartlist"> 
				<!-- 제품 1개  -->
				<div class="cart_item">
					<input class="checkbox" type="checkbox">
					<img class="cart_img"  src="/pangpang/product/pimg/자몽.png" alt="">
					
					<div class="product_info">
						<div class="pname"> 제품이름 </div>
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
				</div>
			</div><!-- cartlist e -->
			<div class="now_pricebox">
				<span class="ad">다른 팡팡배송 상품을 추가하면 함께 무료배송 가능</span>	
				<span> 상품가격 13,800원 <i class="fas fa-plus-circle"></i> 배송비 무료 <i class="fas fa-equals"></i> 주문금액 13,800원 </span>
			</div>
			<div class="deletebox">
				<input class="checkbox" type="checkbox"> <span class="selectAll"> 전체선택 </span>			
				<button class="cart_delete_btn" onclick="deleteAll()" type="button"> 전체삭제 </button> 
				<button class="cart_delete_btn" onclick="delete()"    type="button"> 선택삭제 </button>
			</div>
			<div class="extra_info_box">					 
				<div class="extra_info">
					<span> <i class="fas fa-coins"></i> 캐시적립 해택 </span> <br>
					팡페이 머니 결제시 1% 적립 <br>
					[팡팡와우 + 팡페이 계좌이체] 결제 시 2% 적립	<br>
					[팡팡와우 + 팡페이 머니] 결제 시 4% 추가 적립 2899일 남음<br>
				</div>
				<button class="pangpang" type="button">팡팡와우 무료 체험 신청하기</button> 				
			</div>
			<div class="order_price">
				총 상품가격 34,200 원 + 총 배송비 0 원 = 총 주문금액 = 34,200 원
			</div>
			
		</div> <!-- cart_wrap e -->
		
	</div> <!-- container e -->
	
	<script src="/pangpang/product/js/cart.js" type="text/javascript"></script>
	
</body>
</html>