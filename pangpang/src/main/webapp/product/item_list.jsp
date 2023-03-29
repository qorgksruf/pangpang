<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> 품목 리스트 </title>
	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/item_list.css" rel="stylesheet">

</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
	
		<!-- 상단 메뉴 구역 -->
		<div class="topbox"> 
			<div class="searchbox">
				<input  class="keyword" type="text">
				<button class="searchbtn" onclick="search()" type="button"> 검색 </button>
			</div>
			<button class="registerbtn" onclick="openmodal_R()" type="button"> 제품 등록 </button>
		</div>
		<!-- 품목 출력 구역 -->
		<div class="itemlistbox">
			<table class="itemlist table table-hover" >
	
			</table>
		</div>	
	
	</div> <!-- container e -->
	
	<!-- 제품 등록 모달 구역 -->
	<div class="modal_wrap modalregister">	
		<div class="modal_box">
			
			<h3  class="modal_title"> 제품정보등록 </h3>		
			<div class="modal_content">
				<form class="registerForm">
					<div class="title"> 카테고리 
						<select class="categorylist1" name="category_no" >
						
						</select>
					</div>		
					<div class="title"> 제품명 
						<input type="text" 	   name="product_name"   	class="product_name">
					</div>			
					<div class="title"> 제품규격 
						<input type="text" 	   name="product_option" 	class="product_option">
					</div>		
					<div class="title"> 포장단위 
						<input type="text" 	   name="product_unit"   	class="product_unit">		
					</div>
					<div class="title"> 제품상세 
						<textarea name="product_content"   				class="product_content" rows="" cols=""></textarea>		
					</div>
					<div class="title"> 제품이미지 
						<input type="file" 	   name="product_img"  		class="product_img">		
					</div>
					<div class="title"> 판매가격설정
						<input type="text" 	   name="product_price"   	class="product_price">		
					</div>
					<div class="title"> 최대할인율설정 
						<input type="text" 	   name="product_discount"  class="product_discount">		
					</div>
					<div class="modalbtnbox">
						 <button onclick="item_register()" class="modal_cancel btns" type="button"> 등록 </button>	
		  				 <button onclick="closemodal_R()"   class="modal_cancel btns" type="button"> 닫기 </button>
					</div>
				</form>
				
			</div>
				
		</div>	<!-- modal_box e -->
	</div>	<!-- modal_wrap e -->
	
	<!-- 제품 수정 모달 구역 -->
	<div class="modal_wrap modalupdate">	
		<div class="modal_box">
			
			<h3  class="modal_title"> 제품정보수정 </h3>		
			<div class="modal_content">
				<form class="updateForm">
					<div class="title"> 카테고리 
						<select class="categorylist2">
						
						</select>
					</div>		
					<div class="title"> 제품명 
						<input type="text" 	   name="product_name"   	class="product_name">
					</div>		
					<div class="checkconfirm"></div>	
					<div class="title"> 제품규격 
						<input type="text" 	   name="product_option" 	class="product_option">
					</div>		
					<div class="title"> 포장단위 
						<input type="text" 	   name="product_unit"   	class="product_unit">		
					</div>
					<div class="title"> 제품상세 
						<textarea name="product_content"   class="product_content" rows="" cols=""></textarea>		
					</div>
					<div class="title"> 제품이미지 
						<input type="file" 	   name="product_img"  		class="product_img">		
					</div>
					<div class="title"> 판매가격설정
						<input type="text" 	   name="product_price"   	class="product_price">		
					</div>
					<div class="title"> 최대할인율설정 
						<input type="text" 	   name="product_discount"  class="product_discount">		
					</div>
					<div class="modalbtnbox">
						<button onclick="item_update(pno)" class="modal_cancel btns" type="button"> 수정 </button>	
			   			<button onclick="closemodal_U()"  class="modal_cancel btns" type="button"> 닫기 </button>
					</div>
				</form>				
			</div>
				
		</div>	<!-- modal_box e -->
	</div>	<!-- modal_wrap e -->
	
	<!-- 제품 삭제 모달 구역 -->
	<div class="modal_wrap modaldelete">	
		<div class="modal_box_delete">
			<!-- pno 숨겨서 js 전달 -->
			<input type="hidden" class="pno" value="">
			
			<h3  class="modal_title">   해당 품목의 삭제를 진행하시겠습니까? </h3>		
			<div class="modal_content">
			
			</div>
			<div class="modalbtnbox">
				<button onclick="item_delete(pno)" class="modal_cancel btns" type="button"> 삭제 </button>	
		   		<button onclick="closemodal_D()"   class="modal_cancel btns" type="button"> 닫기 </button>
			</div>	
		</div>	<!-- modal_box e -->
	</div>	<!-- modal_wrap e -->
	
	
	
	<script src="/pangpang/product/js/item_list.js" type="text/javascript"></script>
	
</body>
</html>