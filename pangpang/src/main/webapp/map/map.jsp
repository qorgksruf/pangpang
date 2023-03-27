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
			<div class="member_info_main">
				<div> 이미지 </div>
				<div class="member_info">
					<div> 직급 </div>
					<div> 이름 </div>
				</div>
			</div>
			<div class="dispatch_main_box">
				<div> 차량이미지 </div>
				<div> 차량정보 </div>
				<div> 시작일자 </div>
				<div> 종료일자 </div>
				<div> 기타정보 </div>
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
			
				<div class="set_starting">
					<h3> 출발지/목적지 경유지설정 </h3>
					<table class="table">
						<tr>
							<th> 출발지 </th> <th> 목적지 </th>
						</tr>
						<tr>
							<td>
								<select>
									<option> 경기 안산시 단원구 광덕2로 121 </option>
									<option> 경기 안산시 상록구 한양대학로 80 </option>
								</select>
							</td> 
							<td>
								<select>
									<option> 경기 안산시 단원구 광덕2로 121 </option>
									<option> 경기 안산시 상록구 한양대학로 80 </option>
								</select>
							</td> 
						</tr>
					</table>
				</div>
				
				
				<div class="set_start_btn_box">
					<div class="btn_item">
						<button type="button"> <i class="fas fa-chevron-left"></i> </button>
					</div>
					<div class="btn_item">
						<button type="button"> <i class="fas fa-chevron-right"></i> </button>
					</div>
				</div>
				
				
				<div class="select_item_box">
					<h3> 선택정보 </h3>
					<table class="table">
						<tr>
							<th width="20%"> 상태 </th> <th width="65%"> 주소 </th> <th width="15%"> 비고 </th>
						</tr>
						<tr>
							<td> 배송대기 </td> <td> 경기 안산시 단원구 광덕2로 121 </td> <td> <button type="button" class="select_delete_btn"> <i class="fas fa-minus-circle"></i> </button>
						</tr>
						<tr>
							<td> 배송대기 </td> <td> 경기 안산시 상록구 한양대학로 80 </td> <td> <button type="button" class="select_delete_btn"> <i class="fas fa-minus-circle"></i> </button>
						</tr>
					</table>
				</div>
			</div>
			
			<div id="map_div"></div>
		</div>
		
	</div>

	
	
	<!-- 사용자정의 -->
	<script src="/pangpang/map/js/map.js" type="text/javascript"></script> 
</body>
</html>
