<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>


</head>
<body>
	<%@ include file="/header.jsp" %>


	<%String bookcar_no = request.getParameter("bookcar_no"); %>
	
	<input class="bookcar_no" type="hidden" value="<%=bookcar_no%>">
	
	<h3>운행일지작성하기</h3>
	
	<div class="container">
		<table class="table drivetable">
			<tr>
				<th>작성일자</th>
				<th><input type="text" class="reportday"></th>

			</tr>
			<tr>
				<th>행선지</th>
				<th><input type="text" class="drivecar_distance"></th>

			</tr>
			<tr>
				<th>운행목적</th>
				<th><input type="text" class="purpose"></th>
			</tr>
			<tr>
				<th>보고서내용</th>
				<th><textarea name="text" class="report_content"></textarea></th>
			</tr>											
		</table>			
		
	<button onclick="report()">등록</button>
	
	</div>


	
	<!--jquery -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>   
	<script src="/pangpang/car/js/drivecar.js" type="text/javascript"></script>
</body>
</html>