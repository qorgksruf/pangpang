getmemberlist()

function onpenModal(member_no ){
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "get" , 
		data : { "type":2 , "member_no":member_no } ,
		success : (r)=>{ 
			console.log(r)
			
			document.querySelector('.member_no').value =r.member_no
			document.querySelector('.member_name').value =r.member_name
			document.querySelector('.member_id').value =r.member_id
			document.querySelector('.member_email').value =r.member_email
			document.querySelector('.member_phone').value =r.member_phone
			document.querySelector('.member_address').value =r.member_address
			document.querySelector('.member_birth').value =r.member_birth
			document.querySelector('.member_rank').value =r.member_rank
		}
	})
	document.querySelector('.modal_wrap').style.display ='flex';
}
function closeModal(){
	document.querySelector('.modal_wrap').style.display ='none';
}

function getmemberlist(){
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "get" , 
		data : { "type":1 } ,
		success : (r)=>{ 
			console.log(r)
			html =`<tr>
				<th>번호</th>
				<th>이름</th>
				<th>아이디</th>
				<th>이메일</th>
				<th>전화번호</th>
				<th>주소</th>
				<th>생일</th>
				<th>등급</th>
				<th width="20%">비고</th>
			</tr>`
			r.forEach((o)=>{
				html += `<tr>
							<td>${o.member_no}</td>
							<td>${o.member_name}</td>
							<td>${o.member_id}</td>
							<td>${o.member_email}</td>
							<td>${o.member_phone}</td>
							<td>${o.member_address}</td>
							<td>${o.member_birth}</td>
							<td>${o.member_rank}</td>
							<td>
								<button type="button" class="btn" style="width: 100px;" onclick="onpenModal(${o.member_no})">수정</button>
								<button type="button" class="btn" style="width: 100px;" onclick="drop(${o.member_no})">삭제</button>
							</td>
						</tr>`
			})
			
			document.querySelector('.table').innerHTML = html;
			
		}
	})
}

function update(){
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

function drop(member_no){
	$.ajax({
		url : "/pangpang/member/info" ,
		method : "delete" , 
		data : { "type":2 , "member_no":member_no } ,
		success : (r)=>{ 
			console.log(r)
			if(r=="true"){
				alert('회원탈퇴 성공')
				getmemberlist()
			}
		}
	})
}
