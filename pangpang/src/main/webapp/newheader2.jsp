<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<title> header </title>

	<!-- 모든 페이지 공통 css -->
	<!-- 부트스트랩  -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
	<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"> -->
	
	<!-- 아이콘  -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
	<!-- 사용자정의   -->
	<link href="/pangpang/css/newheader2.css" rel="stylesheet">

</head>
<body>
	
	<div class="newheader_wrap">
		<div class="header_top_box">
			<span class="comp_name"> PANGPANG </span>
			<span class="inc">.inc</span>
			<a href="#"> <span class="homeicon"> <i class="fas fa-home"> </i> </span> </a>
			<a href="#"> <span class="logouticon"> <i class="fas fa-sign-out-alt"> </i> </span> </a>
			<a href="#"> <span class="usericon"> <i class="fas fa-user"> </i> </span> </a>
		</div>
		
		<div class="side_bar">
			<div class="main_menu_box">
				<button class="menu_title top_title" onclick="viewMenu()"> 인사관리 </button>
				<ul class="main_menu">	
					<li><a href="#"> 직원정보 보기 </a> </li>
					<li><a href="#"> 회원관리 </a> </li>
					<li><a href="#"> 등급관리 </a> </li>
					<li><a href="#"> 연차관리 </a> </li>
				</ul>
			</div>
			
				<button class="sidebar_onoff" onclick="sidebar_onoff()"><i class="fas fa-chevron-left"></i></button>
				
			<div>
				<!-- 접속명단 표시 --> 
				<div class="connectlistbox"> 
					<!-- 접속명단 1명  표시 --> 
					<div class="connectbox">
						<div><img src="/jspweb/member/pimg/default.webp" class="hpimg" > </div>
						<div class="name"> 유재석	</div>
					</div>
					<!-- 접속명단 1명  표시 --> 
					<div class="connectbox">
						<div><img src="/jspweb/member/pimg/default.webp" class="hpimg" > </div>
						<div class="name"> 유재석	</div>
					</div>
					<!-- 접속명단 1명  표시 --> 
					<div class="connectbox">
						<div><img src="/jspweb/member/pimg/default.webp" class="hpimg" > </div>
						<div class="name"> 유재석	</div>
					</div>
				</div>
				<!-- 로그인 정보 표시 --> 
				<div class="loginbox"> 
					<div><img src="/jspweb/member/pimg/default.webp" class="hpimg" > </div>
					<div> 강호동 </div>
				</div>					
			</div>
	
		</div>

	</div>
	




	<!-- 모든 페이지 공통 js -->
	<!-- jquery -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<!-- 부트스트랩 -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" ></script> 
	<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"></script> -->
	<script src="/pangpang/js/newheader2.js" type="text/javascript"></script>
</body>
</html>