<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>배차관리페이지</title>
</head>

	<link href="/pangpang/car/css/bookcar.css" rel="stylesheet">
	<link href="/pangpang/car/css/Modal.css" rel="stylesheet">
<body>

		<%@ include file="/header.jsp" %> 
		
				<h3>배차관리페이지</h3>
		
		<div class="container">
				
			
 			<table class="carchoice" style="border: 1px solid black;">
			
			
			</table> 

		
				<!-- 선택후 입력할때 -->
				<div class="modal_wrap">
				
				
				</div>
				
				
		</div>

		<!-- 배차확인용테이블 -->
<!-- - 		<table class="booktable" style="border: 1px solid black;">

		</table> -->
		
		
	<!--jquery -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>   
	<script src="/pangpang/car/js/bookcar.js" type="text/javascript"></script>


	<script src="/pangpang/car/js/Modal.js" type="text/javascript"></script>
</body>
</html> 