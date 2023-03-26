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
				<table class="table d_info_table">
					<tr>
						<th> 번호 <button type="button"> <i class="fa-solid fa-angle-up"></i> </button> </th>
						<th> 주문일자 <button type="button"> <i class="fa-solid fa-angle-down"></i> </button> </th>
						<th> 주소 <button type="button"> <i class="fa-solid fa-angle-up"></i> </button> </th>
					</tr>
				</table>
			</div>
			<div id="map_div"></div>
		</div>
		
	</div>

	
	
	<!-- 사용자정의 -->
	<script src="/pangpang/map/js/map.js" type="text/javascript"></script> 
</body>
</html>