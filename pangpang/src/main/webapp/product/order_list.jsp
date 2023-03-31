<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
	
		<h3> 주문 내역 </h3>
		<!-- 상단 메뉴 구역 -->
		<div class="topbox"> 
			<div class="searchbox">
				<select>
					<option> 주문번호 </option>
					<option> 주문일자 </option>
				</select>
				<input  class="keyword" type="text">
				<button class="searchbtn" onclick="search()" type="button"> 검색 </button>
			</div>
		</div>
		<!-- 품목 출력 구역 -->
		<div class="orderlistbox">
			<table class="orderlist table table-hover" >

			</table>
		</div>	
	
	</div> <!-- container e -->

	<script src="/pangpang/product/js/order_list.js" type="text/javascript"></script>

</body>
</html>
