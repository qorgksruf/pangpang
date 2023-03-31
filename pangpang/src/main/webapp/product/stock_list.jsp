<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%@ include file = "/header.jsp" %>	
	
	<div class="container">
	
		<h3> 입력 </h3>
		<!-- 재고 입력 구역 -->
		<div >
			<table class="table table-hover" >
				<tr>
					<th> 제품번호 </th> <th> 구분 </th><th> 업체 </th><th> 일자 </th><th> 수량 </th><th> 단가 </th><th> 예정 폐기일 </th><th> 비고 </th>
				</tr>
				<tr>
					<th> <input type="text"> </th> 
					<th>  
						<select>
							<option> 구분 </option>
							<option> 입고 </option>
							<option> 출고 </option>
							<option> 폐기 </option>
						</select>
					</th>
					<th> <input type="text"> </th>
					<th> <input type="datetime-local"> </th>
					<th> <input type="text"> </th>
					<th> <input type="text"> </th>
					<th> 예정 폐기일 </th>
					<th> 비고 </th>
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
	
	</div> <!-- container e -->

	<script src="/pangpang/product/js/stock_list.js" type="text/javascript"></script>

</body>
</html>