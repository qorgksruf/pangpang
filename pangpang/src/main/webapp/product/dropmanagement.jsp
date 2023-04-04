<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 폐기 대상 관리 </title>
</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
		<h3> 금일 폐기 대상 목록 </h3>
		<!-- 폐기 대상 출력 구역 -->
		<div class="droplistbox">
			<table class="droplist table table-hover" >
				<tr>
					<th width="10%"> 제품번호 		</th> 
					<th width="10%"> 수량 		</th>
					<th width="10%"> 비고 		</th>
				</tr>
			</table>
		</div>	
	</div> <!-- container e -->

	<script src="/pangpang/product/js/dropmanagement.js" type="text/javascript"></script>


</body>
</html>