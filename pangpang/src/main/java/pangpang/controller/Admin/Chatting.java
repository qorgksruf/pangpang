package pangpang.controller.Admin;

import java.util.ArrayList;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.model.Dao.member.MemberDao;
import pangpang.model.Dto.Admin.ClientDto;
import pangpang.model.Dto.Admin.MessageDto;
import pangpang.model.Dto.member.MemberDto;

@ServerEndpoint(value = "/chatting/{mid}")
public class Chatting {
	// *-* 접속한 클라이언트명단[목록] ( 클라이언트소켓 여러개 저장 )
		public static ArrayList< ClientDto > 접속명단 = new ArrayList<>();
		
		// 클라이언트 소켓이 접속했을때의 실행되는 메소드/함수 
		@OnOpen		// session[ 접속한 클라이언트소켓 객체 ] // 서버 엔드포인트의 URL 매개변수[ @PathParam ]  가져오기 
		public void onOpen( Session session , @PathParam("mid") String mid ) throws Exception {
			int member_no = MemberDao.getInstance().getMno(mid);
			MemberDto dto = MemberDao.getInstance().getMember(member_no);
			
			if(dto.getMember_rank()>1) {
				// 접속한 클라이언트소켓 들을 보관 
				ClientDto clientDto = new ClientDto( session , mid );
				접속명단.add( clientDto  );
			}
			
			
			onMessage(session, "enter");
			
		}// end 
		
		@OnClose 	// 클라이언트소켓이 나갔을때
		public void onClose( Session session ) throws Exception {
			// 접속이 끊긴 세션의 dto 찾아서 제외 
			for( ClientDto dto : 접속명단 ) {
				// 회원명단 에서 세션과 접속이 끊긴 세션과 일치하면 
				if( dto.getSession() == session ) { 
					접속명단.remove(dto);	// 접속 명단에서 제외 시키지
					// "param1":"data1","param2":"data2"
					String msg = "{\"type\":\"alarm\",\"msgbox\":\""+dto.getMid()+"님이 채팅방에서 나갔습니다.\"}";
					onMessage(session, msg);
					onMessage(session, "enter");
					break;
				}
			}
		}// end 
		
		// 클라이언트 소켓이 메시지를 보냈을때[ 서버가 메시지 받기 ]
		@OnMessage // [ Session[누가] , String[내용물] ]
		public void onMessage( Session session , String msg ) throws Exception {
			ObjectMapper mapper = new ObjectMapper();
			String json = null;
			//접속명단
			if(msg.equals("enter")) {
				//회원명단[이미지,아이디] 리스트
				ArrayList<MessageDto> list = new ArrayList<>();
				for(ClientDto dto : 접속명단) {
					list.add(new MessageDto(dto.getSession(), null));
				}
				json = mapper.writeValueAsString( list );//여러개
			}else {
				// 메시지 형식 구성 
				MessageDto messageDto = new MessageDto(session, msg);
					System.out.println( messageDto.toString() );
				// 메시지 받는 프로그램[JS] : JSON 으로 형변환 // 세션은 불가능
				json = mapper.writeValueAsString( messageDto ); //1개
			}
			System.out.println( json );
			
			// ** 서버가 클라이언트 소켓에게 메시지를 보내기 
			// 현재 서버소켓과 연결된 클라이언트소켓 모두에게 서버가 받은 내용물 전달 
			for( ClientDto dto : 접속명단 ) {
										// json형식[모양]의 타입은 문자열로 전송됨
											// String a = "10";	숫자형식[모양]의 타입은 문자열
				dto.getSession().getBasicRemote().sendText( json );	// ---> 클라이언트소켓.onmessage
			}
			
		}// end 
		
}
