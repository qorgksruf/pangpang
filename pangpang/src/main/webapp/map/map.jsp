<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>PANGPANG : Map </title>
	<link href="/pangpang/map/css/map.css" rel="stylesheet">
	
	<!-- TMAP API -->
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=FTgL4h9DokizpClCioLn7EvI4rM9aVhU0GIvct20"></script>
	
	<!-- 폰트어썸 -->
	<script src="https://kit.fontawesome.com/ca0196c650.js" crossorigin="anonymous"></script>
</head>
<body>
	
	<%@ include file="/header.jsp" %>
	
	<div class="map_wrap">
		<div class="main_box">
			<div class="member_info_box">
				<div class="member_info_main">
					<div class="info_top">
						<h3> 배송지 설정 </h3>
						<div class="notice"> bongseong님, 오늘도 안전운행 하세요! </div>
					</div>
					<div>
						<a href="#"> 회원정보 수정 </a> 
					</div>
				</div>
				<div class="personal_info">
					<div> 직책 : 배송기사 </div>
					<div> 아이디 : bongseong </div>
					<div> 연락처 : 010-1234-5600 </div>
				</div>
			</div>
			
			<div class="dispatch_main_box">
				<div class="img_info_box">
					<img alt="" src="/pangpang/car/img/car2.png">
				</div>
				<div class="carmanage_number"> 69우1146 </div>
				<div class="etc_info_box">
					<div> 시작 : 2023-03-28 18:00 </div>
					<div> 반납 : 2023-03-29 08:00 </div>
					<div> 기타정보 </div>
				</div>
			</div>
			<div class="delivery_info_box">
				<div class="info_table_box">
					<h3> 배송정보 </h3>
					<table class="table d_info_table">
						<tr>
							<th width="15%"> 주문번호 <button type="button"> <i class="fa-solid fa-angle-up"></i> </button> </th>
							<th width="30%"> 주문일자 <button type="button"> <i class="fa-solid fa-angle-down"></i> </button> </th>
							<th width="15%"> 상태 <button type="button"> <i class="fa-solid fa-angle-up"></i> </button> </th>
							<th width="40%"> 주소 <button type="button"> <i class="fa-solid fa-angle-up"></i> </button> </th>
						</tr>
						<tr>
							<td> 1 </td> <td> 2023-03-27 16:00:09 </td> <td> 결제완료 </td> <td> 경기 안산시 단원구 광덕2로 121 </td>
						</tr>
						<tr>
							<td> 1 </td> <td> 2023-03-27 16:00:09 </td> <td> 결제완료 </td> <td> 경기 안산시 상록구 한양대학로 80 </td>
						</tr>
						<tr>
							<td> 1 </td> <td> 2023-03-27 16:00:09 </td> <td> 결제완료 </td> <td> 경기 안산시 단원구 초지로 128 </td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="set_starting_box">
				<div class="select_item_box">
					<h3> 선택정보 </h3>
					<table class="table select_table">
						<tr>
							<th width="20%"> 상태 </th> <th width="65%"> 주소 </th> <th width="15%"> 제거 </th>
						</tr>
						<tr draggable="true">
							<td> 배송대기 </td> <td> 경기 안산시 단원구 광덕2로 121 </td> <td> <button type="button" class="select_delete_btn"> <i class="fa-solid fa-minus"></i> </button>
						</tr>
						<tr>
							<td> 배송대기 </td> <td> 경기 안산시 상록구 한양대학로 80 </td> <td> <button type="button" class="select_delete_btn"> <i class="fa-solid fa-minus"></i> </button>
						</tr>
					</table>
				</div>
				<div class="map_box">
					<div id="map_div"></div>
				</div>
			</div>
			
			<div class="result_box">
				<table class="table">
					<tr>
						<th> 출발지 </th> <th>  </th>
					</tr>
					<tr>
						<th> 경유지 </th> <th>  </th>
					</tr>
					<tr>
						<th> 목적지 </th> <th>  </th>
					</tr>
				</table>
			</div>
			
			<div class="result_btn_box">
				<button type="button"> 경로설정 </button>
			</div>
			
		</div>
		
		
		
		
		
		
		<div class="footer">
		</div>
		
	</div>

	
	
	<!-- 사용자정의 -->
	<script src="/pangpang/map/js/map.js" type="text/javascript"></script> 
</body>
</html>
