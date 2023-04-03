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
	
	 <%@ include file="/header.jsp" %> 
	
	<%String carmanage_no=	request.getParameter("c armanage_no");%>
	<input type="hidden" class="carmanage_no" value="<%=carmanage_no%>"> 
	
	

	
   <h3>차량관리페이지</h3>

   <table class="carmanage" style="border: 1px solid black;">
      
   </table>
   
   
    
 	등록모달 
   	<button onclick="onpenModal(1 , 0)" type="button">등록하기</button>
	<div class="modal_wrap">
	<!-- 	<div class="modal_box">
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
		</div> -->
	</div>  
  

     <!-- 수정하기모달 -->
   	<button onclick="onpenModal2()" style="display: none" type="button">수정하기</button>
	
	<div class="modal_wrap2">
		<div class="modal_box">
			<h3 class="modal_title">
				수정하실내용을입력해주세요
			</h3>
			<div class="modal_content">
				<input name="update_number" disabled></input>
				<input name="update_name" disabled></input>
				 <form class="updateForm">
				  차이미지:        
				      	<div class="carupdate_img">
							<input type="file" class="cimg"	 name="carupdate_img">	<br>
						</div>	      
					 차량등록여부:    	<input name="update_use_yn" type="text">		<br>	
		      		 차량폐기일자:    	<input name="update_finish" type="text">		<br>
				</form> 	
			</div>
			<div class="modal_btns">
				<button onclick="carupdate()" class="modal_check" type="button">확인</button>
				<button onclick="closeModal2()" class="modal_cencel" type="button">닫기</button>
			</div>
		</div>
	</div>


   
      <!--jquery -->
   <script src="http://code.jquery.com/jquery-latest.min.js"></script>   
   <script src="/pangpang/car/js/carmanagement.js" type="text/javascript"></script>
	
	<script src="/pangpang/car/js/Modal.js" type="text/javascript"></script>
	
	
</body>
</html>




<!--

		
 
 -->