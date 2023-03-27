package pangpang.controller.product;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.model.Dao.product.ProductDao;
import pangpang.model.Dto.product.CategoryDto;

@WebServlet("/cart")
public class Cart extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Cart() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// 장바구니 출력
		// 로그인한 회원 정보 
		// int mno = MemberDao.getInstance().getMno((String)request.getSession().getAttribute("login"));
		int mno		= 1; // 추후 변경
		
		ArrayList<CategoryDto> list = ProductDao.getInstance().printCart(mno);
		ObjectMapper mapper = new ObjectMapper();
		String jsonarray = mapper.writeValueAsString(list);
		
		response.setCharacterEncoding("UTF8");
		response.setContentType("application/json");
		response.getWriter().print(jsonarray);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// 장바구니 등록 [ 제품번호, 수량 ] 
		int amount 	= Integer.parseInt(request.getParameter("amount")) ;
		int pno 	= Integer.parseInt(request.getParameter("pno")) ;
		// 로그인한 회원 정보 
		// int mno = MemberDao.getInstance().getMno((String)request.getSession().getAttribute("login"));
		int mno		= 1; // 추후 변경
		
		boolean result = ProductDao.getInstance().cartIn(amount, pno, mno);
		response.getWriter().print(result);
		
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		
	}


	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		// 장바구니 취소 [ 제품번호 ] 
		int pno 	= Integer.parseInt(request.getParameter("pno")) ;
		// 로그인한 회원 정보 
		// int mno = MemberDao.getInstance().getMno((String)request.getSession().getAttribute("login"));
		int mno		= 1; // 추후 변경
		
		boolean result = ProductDao.getInstance().cartOut(pno, mno);
		response.getWriter().print(result);

	}

}
