<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<%-- <%@ include file="/header.jsp" %> --%>
	
	<%String carmanage_no=	request.getParameter("carmanage_no");%>
	<input type="hidden" class="carmanage_no" value="<%=carmanage_no%>">
	
	
   <h3>차량관리페이지</h3>

   <table class="carmanage" style="border: 1px solid black;">
      
   </table>
   

  	<button onclick="regi()" type="button">등록</button>
   <form class="car_formdata">
	      차번호:       	<input class="carmanage_number" type="text">		</input>   <br>
	      차량이름:      	<input class="carmanage_name" type="text">			</input>      <br>
	      차이미지:       	<input class="carmanage_img" type="text">			</input>      <br>
<!-- 	      	<div class="carmanage_img">
				<input onchange="premimg(this)" type="file" name="carmanage_img"	 	class="carmanage_img">		
			</div> -->
	      사용가능여부:    	<input class="carmanage_use_yn" type="text">		</input>   <br>
	      차량등록일자:    	<input class="carmanage_start" type="text">			</input>      <br>
	      차량폐기일자:    	<input class="carmanage_finish" type="text">		</input>   <br>
	</form> 
   
   
      <!--jquery -->
   <script src="http://code.jquery.com/jquery-latest.min.js"></script>   
   <script src="/pangpang/car/js/carmanagement.js" type="text/javascript"></script>

	
	
</body>
</html>