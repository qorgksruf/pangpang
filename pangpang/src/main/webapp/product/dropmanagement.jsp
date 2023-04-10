<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 폐기 대상 관리 </title>

	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/stockmanagement.css" rel="stylesheet">
	
</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
		<h3  class="pagetitle"> 금일 폐기 대상 목록 </h3>
		<div class="dropbtnbox">
			<button class="dropbtn" type="button" onclick="drop()"> 폐기 </button>
		</div>	
		
		<!-- 폐기 대상 출력 구역 -->
		<div class="droplistbox">
			<table class="droplist table table-hover" >

			</table>
		</div>	
	</div> <!-- container e -->

	<script src="/pangpang/product/js/dropmanagement.js" type="text/javascript"></script>


</body>
</html>