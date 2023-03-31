package pangpang.model.Dao.product;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.product.StockDto;

public class StockDao extends Dao{

	//싱글톤
	private static StockDao dao= new StockDao();
	private StockDao() {}
	public static StockDao getInstance() {
		return dao;
	}	
	
	// 
	public ArrayList<StockDto> getStockList() {
		ArrayList<StockDto> list = new ArrayList<>();
		String sql = "select *from stockmanagement order by stockmanagementno desc";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				StockDto dto = new StockDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4),
						rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getInt(8));
				list.add(dto);
			}
			return list;
		}catch (Exception e) { System.out.println(e);}
		return null;	
	}
}
