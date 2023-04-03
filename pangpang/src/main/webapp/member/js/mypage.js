getMember()
function getMember(){
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "get" , 
		data : { "type":2 ,"member_no":memberInfo.member_no} ,
		success : (r)=>{ 
			console.log(r)
			
			
			document.querySelector('.member_address').value = r.member_address;
			document.querySelector('.member_email').value = r.member_email;
			document.querySelector('.member_id').value = r.member_id;
			document.querySelector('.member_name').value = r.member_name;
			document.querySelector('.member_no').value = r.member_no;
			document.querySelector('.member_phone').value = r.member_phone;
			//document.querySelector('.member_pwd').value = r.member_pwd;
			document.querySelector('.member_rank').value = r.member_rank;
			document.querySelector('.member_birth').value = r.member_birth;
		
		}
	})
}

function update(){
	console.log('마이페이지 수정')
	let info = {
		type:1,
		member_no : document.querySelector('.member_no').value,
		member_name : document.querySelector('.member_name').value,
		member_birth : document.querySelector('.member_birth').value,
		member_email : document.querySelector('.member_email').value,
		member_phone : document.querySelector('.member_phone').value,
		member_id : document.querySelector('.member_id').value,
		member_address : document.querySelector('.member_address').value,
		member_rank: document.querySelector('.member_rank').value
	}
	console.log(info)
	
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "put" , 
		data : info ,
		success : (r)=>{ 
			console.log(r)
			if(r=="true"){
				alert('수정 성공')
				location.reload();
			}else{
				alert('수정실패')
				location.reload();
			}
			
		}
	}) // ajax end	*/ 
}

function drop(){
	let member_pwd = prompt('비밀번호')
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "delete" , 
		data : {"type":1,"member_pwd":member_pwd} ,
		success : (r)=>{ 
			console.log(r)
			if(r=="true"){
				alert('탈퇴 성공')
				location.href='/pangpang/main.jsp'
			}else{
				alert('탈퇴 실패[비밀번호가 다릅니다]')
				location.href='/pangpang/main.jsp'
			}
			
		}
	}) // ajax end	*/ 
}


function updatepwd(){
	let member_pwd = prompt('현재 비밀번호')
	let member_npwd = prompt('새 비밀번호')
	
	let info = {
		type : 2,
		member_npwd : member_npwd,
		member_pwd : member_pwd
	}
	console.log(info)
	
	$.ajax({
		url : "/pangpang/member/info" ,	// 서블릿 클래스의 @WebServlet("/member")
		method :"put" ,			// 메소드 선택
		data : info ,
		success : (r)=>{ 
			console.log(r)
			if( r == 'true'){
				alert('비밀번호 변경 성공');
				location.href="/pangpang/member/logout.jsp"; // 해당 페이지 이동 */
			}else{ alert('비밀번호 변경 실패[비밀번호가 틀렸습니다]') }
		} // success end 
	}) // ajax end 
}
