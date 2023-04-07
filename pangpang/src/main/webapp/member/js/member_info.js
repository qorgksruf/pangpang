getmemberlist()
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
			</tr>`
			r.forEach((o)=>{
				if(o.member_rank>1){
					html += `<tr>
							<td>${o.member_no}</td>
							<td>${o.member_name}</td>
							<td>${o.member_id}</td>
							<td>${o.member_email}</td>
							<td>${o.member_phone}</td>
							<td>${o.member_address}</td>
							<td>${o.member_birth}</td>
							<td>${o.member_rank}</td>
						</tr>`
				}
			})
			
			document.querySelector('.table').innerHTML = html;
			
		}
	})
}