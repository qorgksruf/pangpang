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
import pangpang.model.Dto.product.ProductDto;

@WebServlet("/product")
public class Product extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Product() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		int type = Integer.parseInt(request.getParameter("type"));

		ObjectMapper mapper = new ObjectMapper();
		String json = null;
		
		if (type == 1) {// 전체 제품 목록 가져오기
			ArrayList<ProductDto> list = ProductDao.getInstance().getProduct();
			json = mapper.writeValueAsString(list);
	
		}else if (type == 2) {// 카테고리별 제품 목록 가져오기
			int cno = Integer.parseInt(request.getParameter("cno"));
			ArrayList<ProductDto> list = ProductDao.getInstance().getProduct_cate(cno);
			json = mapper.writeValueAsString(list);
	
		}else if (type == 3) {// 제품 1개 가져오기
			int pno = Integer.parseInt(request.getParameter("pno"));
			ProductDto dto = ProductDao.getInstance().getProduct(pno);
			json = mapper.writeValueAsString(dto);
			
		}else if (type == 4) {// 검색된 제품 목록 가져오기 
			String keyword = request.getParameter("keyword");
			ArrayList<ProductDto> list =  ProductDao.getInstance().getProduct_search(keyword);
			json = mapper.writeValueAsString(list);
		}
		
		System.out.println(json);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

}
