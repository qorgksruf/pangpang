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
						
					</div>
				</div>
				<div class="personal_info">
					
				</div>
			</div>
			
			<div class="dispatch_main_box">
				
			</div>
			<div class="delivery_info_box">
				<div>
					<h3> 배송정보 </h3>
					<div class="info_table_box">
						<table class="table d_info_table">
							
						</table>
					</div>
				</div>
				<div class="selectbtn">
					<button type="button" onclick="addrSelect()"> 선택완료 </button>
				</div>
			</div>
		
			
			<div>
				<h3> 운행정보 </h3>
				<div class="set_starting_box">
					<div class="select_item_box">
						<h3> 차고지 선택 </h3>
						<p> 2개 선택시 출발지/목적지를 설정할 수 있습니다. </p>
						<p class="notice_info"> [주의] 세개 이상의 차고지를 선택할 수 없습니다. </p>
						<div class="distribution_center">
							<input type="checkbox"> 서울
							<input type="checkbox"> 안산
							<input type="checkbox"> 부천
							<input type="checkbox"> 시흥 
						</div>
						
						<div class="start_end_point">
							<table class="table">
								<tr>
									<th> 출발지 </th> <th> 도착지 </th>
								</tr>
								<tr>
									<td> 부천 팡팡물류센터 </td> <td> 부천 팡팡물류센터 </td>
								</tr>
							</table>
						</div>
						
						<h3> 경유지 정보 </h3>
						<div class="select_table_box">
							<table class="table select_table">
								
							</table>
						</div>
					</div>
					
					<div class="map_box">
						<div id="map_div"></div>
					</div>
				</div>
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
