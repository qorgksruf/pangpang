package pangpang.controller.member;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.model.Dao.member.MemberDao;
import pangpang.model.Dto.member.MemberDto;

/**
 * Servlet implementation class Info
 */
@WebServlet("/member/info")
public class Info extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Info() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int type = Integer.parseInt(request.getParameter("type"));
		String json = "";
		ObjectMapper objectMapper = new ObjectMapper();
		
		if( type==1 ) {//  4. 회원가입 성공한 사람의 정보 가져오기 
			ArrayList<MemberDto> result = MemberDao.getInstance().getMemberList();
			json = objectMapper.writeValueAsString(result);
		}else if( type==2 ){ // 13. 회원 리스트 뽑기
			// 1. 세션[Object]에 담겨진 회원아이디 호출 
			int member_no = Integer.parseInt(request.getParameter("member_no"));
			// 2. 로그인한 회원의 정보 호출 [ 비밀번호 빼고 ] 
			MemberDto result =  MemberDao.getInstance().getMember(member_no);
			json = objectMapper.writeValueAsString(result);
		}
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String member_name = request.getParameter("member_name");
		String member_birth = request.getParameter("member_birth");
		String member_email = request.getParameter("member_email");
		String member_phone = request.getParameter("member_phone");
		String member_id = request.getParameter("member_id");
		String member_pwd = request.getParameter("member_pwd");
		String member_address = request.getParameter("member_address");
		
		MemberDto dto = new MemberDto(0, member_name, member_id, member_pwd, member_email, member_phone, member_address, member_birth, 0);
				
		System.out.println(dto);
		
		boolean result = MemberDao.getInstance().signup(dto);
		response.getWriter().print(result);
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		int member_no = Integer.parseInt(request.getParameter("member_no"));
		String member_name = request.getParameter("member_name");
		String member_birth = request.getParameter("member_birth");
		String member_email = request.getParameter("member_email");
		String member_phone = request.getParameter("member_phone");
		String member_id = request.getParameter("member_id");
		String member_address = request.getParameter("member_address");
		int member_rank = Integer.parseInt(request.getParameter("member_rank"));
		
		MemberDto dto = new MemberDto(member_no, member_name, member_id, null, member_email, member_phone, member_address, member_birth, member_rank);
		System.out.println(dto);
		boolean result = MemberDao.getInstance().update(dto);
		
		
		response.getWriter().print(result);	
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
