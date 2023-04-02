<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<!-- 사용자정의   -->
	<link href="/pangpang/product/css/stockmanagement.css" rel="stylesheet">
	
</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
	
		<h3> 입력 </h3>
		<!-- 재고 입력 구역 -->
		<div >
			<table class="table table-hover inputtable" >
				<tr>
					<th width="10%"> 제품번호 </th> <th width="10%"> 구분 </th><th width="10%"> 업체      </th><th width="20%"> 시행일자 </th>
					<th width="5%" > 수량    </th> <th width="5%" > 단가 </th><th width="20%"> 예정 폐기일 </th><th width="10%"> 비고    </th>
				</tr>
				<tr>
					<td> <input type="text"> </td> 
					<td>  
						<select>
							<option> 구분 </option>
							<option> 입고 </option>
							<option> 출고 </option>
							<option> 폐기 </option>
						</select>
					</td>
					<td> <input type="text"> </td>
					<td> <input type="datetime-local"> </td>
					<td> <input type="text"> </td>
					<td> <input type="text"> </td>
					<td> <input type="datetime-local"> </td>
					<td> 비고 </td>
				</tr>				
			</table>
		</div>	
	
		<h3> 재고 내역 </h3>
		<!-- 상단 메뉴 구역 -->
		<div class="topbox"> 
			<div class="searchbox">
				<select>
					<option> 제품번호 	</option>
					<option> 시행일자 	</option>
					<option> 대상업체 	</option>
				</select>
				<input  class="keyword" type="text">
				<button class="searchbtn" onclick="search()" type="button"> 검색 </button>
			</div>
		</div>
		
		<!-- 재고 내역 출력 구역 -->
		<div class="stocklistbox">
			<table class="stocklist table table-hover" >
				<tr>
					<th> 관리번호 </th><th> 제품번호 </th> <th> 구분 </th><th> 업체 </th><th> 일자 </th><th> 수량 </th><th> 단가 </th><th> 예정 폐기일 </th><th> 비고 </th>
				</tr>
			</table>
		</div>	
		<!-- 페이지버튼 출력 구역 -->
		<nav class="Page navigation example">
			 <ul class="pagination">
			    
			  </ul>		
		</nav>	
	</div> <!-- container e -->

	<script src="/pangpang/product/js/stockmanagement.js" type="text/javascript"></script>

</body>
</html>