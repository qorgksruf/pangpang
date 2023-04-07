<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/pangpang/member/css/signup.css" rel="stylesheet">
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
						<span class="member_address"></span> <button  type="button" onclick="openmodal_address()"> 주소 찾기 </button>
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
						<button type="button" onclick="dropmember()" class="btn">탈퇴</button>
						<button type="button" onclick="onpenUpdatepwdModal()" class="btn">비밀번호수정</button>
						<button type="button" onclick="openAddAccountModal()" class="btn">계좌등록</button>
					</td>
				</tr>
			</table>
			
			<h3> 등록된 계좌 </h3>
			<table  class="table accountTable">
				<tr>
					<th  width="10%">	은행	 </th> 
					<th class="member_rank1"> 
						계좌번호
					</th>
				</tr>
				<tr>
					<td  width="10%">	은행	 </th> 
					<td class="member_rank1"> 
						계좌번호
					</td>
				</tr>	
			</table>
			
			<h3> 주문목록 </h3>
			<table  class="table receiver_info">
				
			</table>
		</div>
		
		

	<!-- 도로명 주소검색 모달 -->
	<div class="modal_wrap_address">	
		<div class="modal_box">
		
		<h3  class="modal_title"> 도로명 주소검색 </h3>		
		<div class="modal_content">
			<div class="address_search">
				<input type="text" class="keyword">
				<button type="button" class="modal_btn" onClick="getAddress()"> 주소검색</button>					
			</div>
			<!-- 검색 결과 리스트 출력 영역 -->
			<div id="list" class="resultbox">
				검색 결과가 없습니다.					
			</div>
			<div class="address_select"> 선택주소 <span class="address_select_input"> </span></div>
			<div class="address_detail">
				상세주소
				<input class="address_detail_input" type="text">
			</div>
			<button onclick="delivery_address()"   class="modal_cancel modal_btn" type="button"> 입력 </button>
			<button onclick="closemodal_address()" class="modal_cancel modal_btn" type="button"> 닫기 </button>
		</div>
			
		</div>	<!-- modal_box e -->
	</div>	<!-- modal_wrap e -->
	
	<!-- 비밀번호 변경 모달 -->
	<div class="updatepwd_modal_wrap modal_wrap2">
		<div class="modal_box2 box2">
			<div class="modal_title_box2">
				<span>비밀번호 변경</span> 
				<button type="button" onclick="closeUpdatepwdModal()" class="close_findid">X</button>
			</div>
			<div class="updatepwd_box resultbox">
			</div>
		</div>
	</div>
	
	<!-- 계좌등록 -->
	<div class="addaccount_modal_wrap modal_wrap2">
		<div class="modal_box2">
			<div class="modal_title_box2">
				<span>계좌등록</span> 
				<button type="button" onclick="closeAddAccountModal()" class="close_findid">X</button>
			</div>
			<div class="addAccount_box resultbox">
			
			</div>	
		</div>
	</div>
	

		
		

	<script type="text/javascript" src="/pangpang/member/js/mypage.js"></script>
</body>
</html>