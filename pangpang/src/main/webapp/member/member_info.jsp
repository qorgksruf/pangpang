<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@ include file = "/header.jsp" %>	<!-- JSP 별도의 페이지를 현재 페이지에 삽입 -->
	<div class="container">
		<table class="table">
			<tr>
				<th>번호</th>
				<th>이름</th>
				<th>아이디</th>
				<th>이메일</th>
				<th>전화번호</th>
				<th>주소</th>
				<th>생일</th>
				<th>등급</th>
			</tr>
			<tr>
				<td>번호</td>
				<td>이름</td>
				<td>아이디</td>
				<td>이메일</td>
				<td>전화번호</td>
				<td>주소</td>
				<td>생일</td>
				<td>등급</td>
			</tr>
		</table>
	</div>
	<script src="/pangpang/member/js/member_info.js" type="text/javascript"></script>
</body>
</html>