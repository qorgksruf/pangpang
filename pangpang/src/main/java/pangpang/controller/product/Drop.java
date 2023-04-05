package pangpang.controller.product;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import pangpang.model.Dao.product.StockDao;
import pangpang.model.Dto.product.StockDto;

@WebServlet("/drop")
public class Drop extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Drop() {

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		Date today = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(today);
		
		ArrayList<StockDto> list = StockDao.getInstance().getDropList(date); System.out.println(list);
		
		ObjectMapper mapper = new ObjectMapper();
		String jsonarray = mapper.writeValueAsString(list);
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(jsonarray);
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Date today = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(today);
		
		ArrayList<StockDto> list = StockDao.getInstance().getDropList(date);
		
		boolean result = StockDao.getInstance().drop(list);
		
		response.getWriter().print(result);
		
	}

}
