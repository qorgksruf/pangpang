<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 주문/결제 </title>
	
	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/order.css" rel="stylesheet">

</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">

		<h3> 주문/결제 </h3>
		
		<h3> 구매제품정보 </h3>
		<table class="table buyer_info">
			<tr>
				<th width="10%"> 제품이름 </th> 
				<th width="80%"> 제품정보 </th> 
				<th width="10%"> 제품수량 </th> 
			</tr>
			<tr>
				<td> 
					<div><img class="order_img"  src="/pangpang/product/pimg/자몽.png" alt=""></div>
				</td>
				<td>
					 곰곰 칠레산 자몽, 50g			
				</td>
				<td>
					3봉
				</td>
			</tr>
			<tr>
				<th colspan="3"> 총 결제 금액 = 18,000 원 </th>
			</tr>
		</table>		
		
		<h3> 구매자정보 </h3>
		<table class="table buyer_info">
			<tr>
				<th  width="10%">이름		 </th> 
				<td class="member_name"> 유재석 </td>
			</tr>
			<tr>
				<th  width="10%">이메일	 </th> 
				<td class="member_email"> qweqwe@naver.com </td>
			</tr>
			<tr>
				<th  width="10%">휴대폰 번호 </th> 
				<td class="member_phone"> 
					010-1111-1111  <br>
					<span> 	* 쿠폰/티켓정보는 구매한 분의 번호로 전송됩니다.  				<br>
							* 인증 번호를 못 받았다면 번호 차단 및 스팸 설정을 확인해 주세요. 	</span>
				</td>
			</tr>			
		</table>
		
		<h3> 받는사람정보  <button class="updatebtn Rinfo" onclick="update_recieverinfo()" type="button"> 수정 </button> </h3>
		<table  class="table receiver_info">
			<tr>
				<th width="10%"> 이름	  </th> 
				<td class="member_name"> 유재석 <span>기본배송지</span></td>
			</tr>
			<tr>
				<th  width="10%">휴대폰 번호 </th> 
				<td  class="member_phone"> 
					010-1111-1111 
				</td>
			</tr>						
			<tr>
				<th width="10%"> 배송주소 </th> 
				<td class="member_phone"> 경기도 안산시 상록구 이젠학원 </td>
			</tr>
			<tr>
				<th width="10%"> 배송요청사항  </th> 
				<td> 일반 : 문앞 </td>
			</tr>				
		</table>
		
		<h3>  결제정보  </h3>
		<table  class="table payment_info">
			<tr>
				<th  width="10%"> 결제방법  </th> 
				<td> <button  type="button"> 선택 </button> </td>
			</tr>
			<tr>
				<th> 쿠폰할인 </th> 
				<td> <button  type="button"> 찾기 </button> </td>
			</tr>				
		</table>

	</div> <!-- container e -->

		<!-- 도로명 주소검색 모달 -->
		<div class="modal_wrap">	
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
					<button onclick="delivery_address()" class="modal_cancel modal_btn" type="button"> 입력 </button>
					<button onclick="closemodal()"       class="modal_cancel modal_btn" type="button"> 닫기 </button>
				</div>
					
				</div>	<!-- modal_box e -->
		</div>	<!-- modal_wrap e -->



	
	<script src="/pangpang/product/js/order.js" type="text/javascript"></script>

</body>
</html>