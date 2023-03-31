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
 		
		if( type==1 ) {// 회원 리스트 뽑기 
			ArrayList<MemberDto> result = MemberDao.getInstance().getMemberList();
			json = objectMapper.writeValueAsString(result);
		}else if( type==2 ){ // 회원정보 상세보기
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
		int type = Integer.parseInt(request.getParameter("type"));
		boolean result = false;
		
		if( type == 1 ) {
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
			result = MemberDao.getInstance().update(dto);
		}else if( type == 2 ){
			String member_npwd = request.getParameter("member_npwd");
			String member_pwd = request.getParameter("member_pwd");
			String member_id = (String)request.getSession().getAttribute("login");
			
			System.out.println(member_npwd+"/"+member_pwd+"/"+member_id);
			result = MemberDao.getInstance().updatepwd(member_npwd,member_id,member_pwd);
		}
		
		
		
		response.getWriter().print(result);	
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		int type = Integer.parseInt(request.getParameter("type"));
		boolean result = false;
		
		if( type==1 ) {
			String member_id = (String)request.getSession().getAttribute("login");
			String member_pwd = request.getParameter("member_pwd");
			
			result = MemberDao.getInstance().delete(member_id,member_pwd);
		}else if( type==2 ) {
			int member_no = Integer.parseInt(request.getParameter("member_no"));
			
			result = MemberDao.getInstance().dropMember(member_no);
		}
		response.getWriter().print(result);	
	}

}
