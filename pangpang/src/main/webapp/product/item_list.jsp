<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 품목 리스트 </title>
	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/item_list.css" rel="stylesheet">

</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
	
		<!-- 상단 메뉴 구역 -->
		<div class="topbox"> 
			<div class="searchbox">
				<input  class="keyword" type="text">
				<button class="searchbtn" onclick="search()" type="button"> 검색 </button>
			</div>
			<button class="registerbtn" onclick="product_register()" type="button"> 제품 등록 </button>
		</div>
		<!-- 품목 출력 구역 -->
		<div class="itemlistbox">
			<table class="itemlist table table-hover" >
	
			</table>
		</div>	
	
	</div> <!-- container e -->
	
	<script src="/pangpang/product/js/item_list.js" type="text/javascript"></script>
	
</body>
</html>