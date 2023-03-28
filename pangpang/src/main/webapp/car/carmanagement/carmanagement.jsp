<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<!-- 모달   -->
	<link href="/pangpang/car/css/Modal.css" rel="stylesheet">

</head>
<body>
	
	<%-- <%@ include file="/header.jsp" %> --%>
	
	<%String carmanage_no=	request.getParameter("carmanage_no");%>
	<input type="hidden" class="carmanage_no" value="<%=carmanage_no%>"> 
	
	
   <h3>차량관리페이지</h3>

   <table class="carmanage" style="border: 1px solid black;">
      
   </table>
   
   
   
      <!-- 등록버튼 모달 -->
   	<button onclick="onpenModal()" type="button">등록하기</button>
	<!-- 모달 HTML -->
	<div class="modal_wrap">
		<div class="modal_box">
			<h3 class="modal_title">
				등록하실내용을입력해주세요
			</h3>
			<div class="modal_content">
				   <form class="car_formdata">
				      차번호:       	<input name="carmanage_number" type="text">			  		<br>
				      차량이름:      	<input name="carmanage_name" type="text">			     	<br>
				      차이미지:        
				      	<div class="carmanage_img">
							<input type="file" class="cimg"	 name="carmanage_img">	<br>
						</div>
				      사용가능여부:    	<input name="carmanage_use_yn" type="text">			 		<br>
				      차량등록일자:    	<input name="carmanage_start" type="text">			     	<br>
				      차량폐기일자:    	<input name="carmanage_finish" type="text">			  		<br>
				</form> 	
			</div>
			<div class="modal_btns">
				<button onclick="regi()" class="modal_check" type="button">확인</button>
				<button onclick="closeModal()" class="modal_cencel" type="button">닫기</button>
			</div>
		</div>
	</div>
   
   
   


   
	<!--수정버튼구현  -->
		<h3>수정하기</h3>
			 <form class="updateForm">	      
			   	 차이미지:   <div class="update_img">
							<input type="file" class="cimg"	 name="update_img">	<br>
						</div>
				 사용가능여부:    	<input name="update_use_yn" type="text">		<br>	
	      		 차량폐기일자:    	<input name="update_finish" type="text">		<br>
			 	
			</form>
   
   
   
   
      <!--jquery -->
   <script src="http://code.jquery.com/jquery-latest.min.js"></script>   
   <script src="/pangpang/car/js/carmanagement.js" type="text/javascript"></script>
	
	<script src="/pangpang/car/js/Modal.js" type="text/javascript"></script>
	
	
</body>
</html>