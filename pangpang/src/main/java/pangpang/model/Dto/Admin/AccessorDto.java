package pangpang.model.Dto.Admin;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.websocket.Session;

import pangpang.controller.Admin.Chatting;
import pangpang.model.Dao.member.MemberDao;


public class AccessorDto {
	
	private String member_id;			// 메시지 보낸회원아이디;
	private String member_name;
	
	
	
	public AccessorDto() {
		
	}
	
	// 클라이언트 에게 메시지 전송할때 사용하는 생성자 
	public AccessorDto( Session session ,  String msg) {
		// 메시지를 보낸 클라이언트세션를 통해서 회원아이디 얻기 
		for( ClientDto dto : Chatting.접속명단 ) {
			if( dto.getSession() == session ) {
				this.member_id = dto.getMember_id();
				this.member_name = dto.getMember_name();
			}
		} // end 
	}

	
	

	@Override
	public String toString() {
		return "MessageDto [member_id=" + member_id + ", member_name=" + member_name + "]";
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getMember_name() {
		return member_name;
	}

	public void setMember_name(String member_name) {
		this.member_name = member_name;
	}

	
	
	
}
