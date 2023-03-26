<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 제품 리스트 </title>

	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/product_list.css" rel="stylesheet">

</head>
<body>

	<%@ include file = "/header.jsp" %>	<!-- JSP 별도의 페이지를 현재 페이지에 삽입 -->
	
	<%
		// 1. jsp 이용한 http url 변수 호출
		String cno = request.getParameter("cno");
	%>
	 <!-- java 코드 HTML 출력  -->
	<!-- cno 숨겨서 js 전달 -->
	<input type="hidden" class="cno" value="<%= cno%>">
	

	<div class="container">
		
		<h3 class="title">  </h3>
		<div class="bind">
			<!-- 사이드 카테고리바 -->
			<div class="categorylist list-group">

			</div>					
			<!-- 제품리스트 출력 구역 4*4 -->
			<div class="product_wrap"> 
				
				<!-- 1개의 카테고리  -->
				<div class="item"> 
					<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/자몽.png"> 	</div>
					<div class="pname"> 	제품이름  												</div>
					<div class="price"> 	25,000원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
					<div class="unitprice"> (100g당 280원 )										</div>
					<div class="date"> 		내일(목) 3/23 도착 보장									</div>
				</div> <!-- item e -->
						<!-- 1개의 카테고리  -->
				<div class="item"> 
					<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/자몽.png"> 	</div>
					<div class="pname"> 	제품이름  												</div>
					<div class="price"> 	25,000원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
					<div class="unitprice"> (100g당 280원 )										</div>
					<div class="date"> 		내일(목) 3/23 도착 보장									</div>
				</div> <!-- item e -->
							<!-- 1개의 카테고리  -->
				<div class="item"> 
					<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/자몽.png"> 	</div>
					<div class="pname"> 	제품이름  												</div>
					<div class="price"> 	25,000원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
					<div class="unitprice"> (100g당 280원 )										</div>
					<div class="date"> 		내일(목) 3/23 도착 보장									</div>
				</div> <!-- item e -->
							<!-- 1개의 카테고리  -->
				<div class="item"> 
					<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/자몽.png"> 	</div>
					<div class="pname"> 	제품이름  												</div>
					<div class="price"> 	25,000원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
					<div class="unitprice"> (100g당 280원 )										</div>
					<div class="date"> 		내일(목) 3/23 도착 보장									</div>
				</div> <!-- item e -->
							<!-- 1개의 카테고리  -->
				<div class="item"> 
					<div class="pimg"> <img class="product_img" alt="" src="/pangpang/product/pimg/자몽.png"> 	</div>
					<div class="pname"> 	제품이름  												</div>
					<div class="price"> 	25,000원 <img class="mini_logo"alt="" src="/pangpang/product/pimg/PANG.png">	<span>팡팡배송</span>		</div>
					<div class="unitprice"> (100g당 280원 )										</div>
					<div class="date"> 		내일(목) 3/23 도착 보장									</div>
				</div> <!-- item e -->
			
			
			</div> <!-- product_wrap e -->
		</div>
		
	</div> <!-- container e -->

	<script src="/pangpang/product/js/product_list.js" type="text/javascript"></script>

</body>
</html>