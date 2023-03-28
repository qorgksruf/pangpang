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
	
	<!-- 로그인페이지 -->
	<div class="container">
		<div class="container  border border-secondary" style="width: 400px;display: flex; justify-content: center;flex-direction: column; ">
			<div>
				회원로그인
			</div>
			<div>
				<form style="display: flex;">
					<div style="display: flex;flex-direction: column;">
						<input class="member_id" id="member_id" type="text" placeholder="신라리워즈 번호 또는 아이디 입력">
						<input class="member_pwd" id="member_pwd" type="password" placeholder="비밀번호">
					</div>
					<button type="button" onclick="login()">로그인</button>
				</form>
				<div>

					<button type="button" onclick="onpenFindidModal()">아이디 찾기</button>
					<button type="button" onclick="onpenFindpwdModal()">비밀번호 찾기</button>
				</div>               
	         </div>
		</div>
		
		<div class="findid_modal_wrap container border border-secondary" style="width: 400px;display:none; justify-content: center;">
			<div style="width: 100%;">
				<div style="display: flex;justify-content: space-between;">
					<span>아이디 찾기</span> 
					<button type="button" onclick="closeFindidModal()" style="width: 20px;">X</button>
				</div>
				<div class="findid_box" style="display: flex;flex-direction: column;align-items: center;">
					<div>
						<table>
							<tr>
								<th>이름</th>
								<td>
									<input class="member_name" type="text">
								</td>
							</tr>
							<tr>
								<th>이메일</th>
								<td>
									<input class="member_email" type="text">
								</td>
							</tr>
						</table>
					</div>
					<div>
						<button onclick="findid()"type="button">확인</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="findpwd_modal_wrap container border border-secondary" style="width: 400px;display: none; justify-content: center;">
			<div style="width: 100%;">
				<div style="display: flex;justify-content: space-between;">
					<span>비밀번호 찾기</span> 
					<button type="button" onclick="closeFindpwdModal()" style="width: 20px;">X</button>
				</div>
				<div class="findpwd_box" style="display: flex;flex-direction: column;align-items: center;">
					<div>
						<table>
							<tr>
								<th>아이디</th>
								<td>
									<input class="member_idpwd" type="text">
								</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>
									<input class="member_namepwd" type="text">
								</td>
							</tr>
							<tr>
								<th>이메일</th>
								<td>
									<input class="member_emailpwd" type="text">
								</td>
							</tr>
						</table>
					</div>
					<div>
						<button onclick="findpwd()" type="button">확인</button>
					</div>
				</div>
			</div>
		</div>
      </div> 
      <!-- 로그인페이지 -->
	<script src="/pangpang/member/js/login.js" type="text/javascript"></script>
</body>
</html>