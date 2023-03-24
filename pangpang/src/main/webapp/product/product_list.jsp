<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 제품 리스트 </title>


</head>
<body>

	<%@ include file = "/header.jsp" %>	<!-- JSP 별도의 페이지를 현재 페이지에 삽입 -->
	
	<div class="container">
		<!-- 제품리스트 출력 구역 4*4 -->
		<div class="wrap"> 
		
			<!-- 1개의 카테고리  -->
			<div class="item"> 
				<div class="pimg"> <img alt="" src="/pangpang/product/pimg/PANGPANG.png"> 	</div>
				<div class="pname"> 	제품이름  												</div>
				<div class="price"> 	25,000원 <img alt="" src="">	<span>팡팡배송</span>		</div>
				<div class="unitprice"> (100g당 280원 )										</div>
				<div class="date"> 		내일(목) 3/23 도착 보장									</div>
			</div> <!-- item e -->
		
		
		
		</div> <!-- wrap e -->
		
		
	</div> <!-- container e -->

</body>
</html>