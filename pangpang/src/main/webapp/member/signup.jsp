<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@ include file = "/header.jsp" %>	<!-- JSP 별도의 페이지를 현재 페이지에 삽입 -->
	<div class="signup_wrap container" style="margin-bottom: 50px;">
		<div class="signup_name h2">
			회원정보 입력
		</div>
		<form class="signupForm">
		
			<!-- 테이블 세트 1개 -->
			<div class="input_box container">
				<div class="box_title">
					<div class="input_title h3">
						기본입력
					</div>
				</div>
				
				<div class="input_table_box">
					<table  class="input_table table table-success table-striped-columns table-bordered">
						<tr>
							<th class="table_mid">
								<div class="box1">
									<div>
										<span class="red">*</span> 이름 
									</div>
									<span class="confirm red"></span>
								</div>
							</th>
							<td class="table_mid">
								<input class="name member_name form-control" name="member_name" type="text">
							</td>
						</tr>
						<tr>
							<th class="table_mid mid">
								<div class="box1">
									<div>
										<span class="red">*</span> 생년월일 
									</div>
									<span class="confirm red"></span>
								</div>
							</th>
							<td class="table_mid birth_box">
								<div style="display: flex;">
									<div class="birthYear_box">
										<select class="birthYear form-control">
											<option>선택</option>
											<option>2004</option>
											<option>2003</option>
											<option>2002</option>
											<option>2001</option>
											<option>2000</option>
											<option>1999</option>
											<option>1998</option>
											<option>1997</option>
											<option>1996</option>
											<option>1995</option>
											<option>1994</option>
											<option>1993</option>
											<option>1992</option>
											<option>1991</option>
											<option>1990</option>
											<option>1989</option>
											<option>1988</option>
											<option>1987</option>
											<option>1986</option>
											<option>1985</option>
											<option>1984</option>
											<option>1983</option>
											<option>1982</option>
											<option>1981</option>
											<option>1980</option>
											<option>1979</option>
											<option>1978</option>
											<option>1977</option>
											<option>1976</option>
											<option>1975</option>
											<option>1974</option>
											<option>1973</option>
											<option>1972</option>
											<option>1971</option>
											<option>1970</option>
											<option>1969</option>
											<option>1968</option>
											<option>1967</option>
											<option>1966</option>
											<option>1965</option>
											<option>1964</option>
											<option>1963</option>
											<option>1962</option>
											<option>1961</option>
											<option>1960</option>
											<option>1959</option>
											<option>1958</option>
											<option>1957</option>
											<option>1956</option>
											<option>1955</option>
											<option>1954</option>
											<option>1953</option>
											<option>1952</option>
											<option>1951</option>
											<option>1950</option>
											<option>1949</option>
											<option>1948</option>
											<option>1947</option>
											<option>1946</option>
											<option>1945</option>
											<option>1944</option>
											<option>1943</option>
											<option>1942</option>
											<option>1941</option>
											<option>1940</option>
											<option>1939</option>
											<option>1938</option>
											<option>1937</option>
											<option>1936</option>
											<option>1935</option>
											<option>1934</option>
											<option>1933</option>
											<option>1932</option>
											<option>1931</option>
											<option>1930</option>
											<option>1929</option>
											<option>1928</option>
											<option>1927</option>
											<option>1926</option>
											<option>1925</option>
											<option>1924</option>
											<option>1923</option>
											<option>1922</option>
											<option>1921</option>
											<option>1920</option>
											<option>1919</option>
											<option>1918</option>
											<option>1917</option>
											<option>1916</option>
											<option>1915</option>
											<option>1914</option>
											<option>1913</option>
										</select>
									</div>
									<div class="birthMonth_box">
										<select class="uiform birthMonth form-control">
											<option>선택</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											<option>6</option>
											<option>7</option>
											<option>8</option>
											<option>9</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div class="birthDay_box">
										<select class="uiform birthDay form-control">
											<option>선택</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											<option>6</option>
											<option>7</option>
											<option>8</option>
											<option>9</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
											<option>13</option>
											<option>14</option>
											<option>15</option>
											<option>16</option>
											<option>17</option>
											<option>18</option>
											<option>19</option>
											<option>20</option>
											<option>21</option>
											<option>22</option>
											<option>23</option>
											<option>24</option>
											<option>25</option>
											<option>26</option>
											<option>27</option>
											<option>28</option>
											<option>29</option>
											<option>30</option>
											<option>31</option>
										</select>
									</div>
								
								</div>
							</td>
						</tr>
						<tr>
							<th class="table_mid">
								<div class="box1">
									<div>
										<span class="red">*</span> 이메일 
									</div>
									<span class="confirm red"></span>
								</div>
							</th>
							<td class="table_mid">
								<div class="email_input_box" style="display: flex;">
									<div class="email_box" style="display: flex;">
										<input class="email form-control" type="text">
										<div class="atsign">@</div>
										<input class="domain form-control" type="text">
									</div>
									<div class="domain_select_box" >
										<select onchange="setdomain()" class="domain_select form-control">
											<option>직접입력</option>
											<option>naver.com</option>
											<option>daum.net</option>
											<option>gmail.com</option>
										</select>
									</div>
									<button type="button" class="checkEmail btns btn" id="checkEmail" onclick="emailcheck()">이메일 인증</button>
								</div>
								<div class="authbox">
								
								</div>
							</td>
						</tr>
						<tr>
							<th class="table_end">
								<div class="box1">
									<div>
										<span class="red">*</span> 휴대전화 
									</div>
									<span class="confirm confirm1 red"></span>
								</div>
							</th>
							<td class="table_end">
								<div class="email_input_box" style="display: flex;">
									<div class="domain_select_box" >
										<select class="number_select form-control">
											<option>010</option>
											<option>016</option>
											<option>011</option>
											<option>017</option>
										</select>
									</div>
									<div style="display: flex;">
										<input class="input1 member_phone1 form-control" name="member_phone" type="text">
										<input class="input1 member_phone2 form-control" name="member_phone" type="text">
									</div>
								</div>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<!-- 테이블 세트 1개 -->
			<div class="input_box container">
				<div class="box_title">
					<div class="input_title h3">
						웹사이트 비밀번호 입력
					</div>
				</div>
				
				<div class="input_table_box">
					<table  class="input_table table table-success table-striped-columns table-bordered">
						<tr>
							<th class="table_mid">
								<div class="box1">
									<div>
										<span class="red">*</span> 아이디 
									</div>
									<span class="confirm red"></span>
								</div>
							</th>
							<td class="table_mid" >
								<div style="display: flex;">
									<input maxlength="12px;" class="input1 member_id form-control" name="member_id" type="text">
									<button type="button" class="checkmId btns btn" onclick="idcheck()">아이디 중복확인</button>
								</div>
								<span>5~12자  이내 영문 또는 영문/숫자 조합</span>
							</td>
						</tr>
						<tr>
							<th class="table_mid">
								<div class="box1">
									<div>
										<span class="red">*</span> 비밀번호 
									</div>
									<span class="confirm red pwdcheck"></span>
								</div>
							</th>
							<td class="table_mid pwd_info_box" >
								<input maxlength="20px;" class="input1 member_pwd form-control" name="member_pwd" type="password">
								<span>8~20자  이내 영문/숫자 조합(특수문자 입력 가능)</span>
							</td>
						</tr>
						<tr>
							<th class="table_end">
								<div class="box1">
									<div>
										<span class="red">*</span> 비밀번호 확인 
									</div>
									<span class="confirm red confirm2"></span>
								</div>
							</th>
							<td class="table_end">
								<input class="input1 member_pwdconfirm form-control" type="password">
							</td>
						</tr>
					</table>
				</div>
			</div>	
		</form>
		<div class="rwPromotion">
          	<span>※ 신라리워즈 가입 고객께는 모바일 카드가 발급 되며 혜택 및 약관은 홈페이지에서 확인 가능합니다.</span>
      	</div>	
      	<div class="signup_btn_box">
      		<!-- <a href="/hotel/member/completed.jsp"> --><button onclick="signup()" class="singup_btn btn">가입 신청</button><!-- </a>  -->
      	</div>
	</div>
	
	<script src="/pangpang/member/js/signup.js" type="text/javascript"></script>
</body>
</html>