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
	
		<h3> 회원정보 </h3>
			<table class="table buyer_info">
				<tr>
					<th  width="10%">회원번호		 </th> 
					<td class="member_no1"> 
						<input type="text" class="member_no" disabled="disabled">
					</td>
				</tr>
				<tr>
					<th  width="10%">	이름	 </th> 
					<td class="member_name1"> 
						<input type="text" class="member_name">
					</td>
				</tr>
				<tr>
					<th  width="10%">아이디		 </th> 
					<td class="member_id1"> 
						<input type="text" class="member_id" disabled="disabled">
					</td>
				</tr>
				<tr>
					<th  width="10%">이메일		 </th> 
					<td class="member_email1"> 
						<input type="text" class="member_email">
					</td>
				</tr>
				<tr>
					<th  width="10%">휴대전화</th> 
					<td class="member_phone1"> 
						<input type="text" class="member_phone">
					</td>
				</tr>
				<tr>
					<th  width="10%">주소		 </th> 
					<td class="member_address1"> 
						<input type="text" class="member_address">
					</td>
				</tr>
				<tr>
					<th  width="10%">생일		 </th> 
					<td class="member_birth1"> 
						<input type="text" class="member_birth">
					</td>
				</tr>
				<tr>
					<th  width="10%">등급		 </th> 
					<td class="member_rank1"> 
						<input type="text" class="member_rank" disabled="disabled">
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<button type="button" onclick="update()" class="btn">수정</button>
						<button type="button" onclick="drop()" class="btn">탈퇴</button>
						<button type="button" onclick="updatepwd()" class="btn">비밀번호수정</button>
					</td>
				</tr>
			</table>
			
			<h3> 주문목록 </h3>
			<table  class="table receiver_info">
				<tr>
					<th width="10%"> 주문번호	  </th> 
					<td class="receiver_name">  123456 </td>
				</tr>
			</table>
		</div>
	<script type="text/javascript" src="/pangpang/member/js/mypage.js"></script>
</body>
</html>