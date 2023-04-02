package pangpang.model.Dao.product;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.product.OrderDto;
import pangpang.model.Dto.product.StockDto;

public class StockDao extends Dao{

	//싱글톤
	private static StockDao dao= new StockDao();
	private StockDao() {}
	public static StockDao getInstance() {
		return dao;
	}	
	
	// 전체 재고내역 레코드 개수
	public int totalsize_stock(String key,String keyword) {
		String sql = "";
		if(key.equals("key") && keyword.equals("keyword")) {
			sql = "select count(*) from stockmanagement";
		}else {
			sql = "select count(*) from stockmanagement where "+key+" like '%"+keyword+"%' ;";
		}
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {return rs.getInt(1);}			
		}catch(Exception e) { System.out.println(e);}
		return 0;
	}	
	
	// 재고 내역 전부 출력
	public ArrayList<StockDto> getStockList(int type,String key,String keyword,int startrow,int listsize) {
		ArrayList<StockDto> list = new ArrayList<>();
		String sql = "";
		if(key.equals("key") && keyword.equals("keyword")) {
			if(type==0){
				sql = "select *from stockmanagement order by stockmanagementno desc limit "+startrow+","+listsize;
			}else {	// 1: 입고 / 2: 출고 /3 : 폐기
				sql = "select *from stockmanagement where stockmanagementtype = "+type+" order by stockmanagementno desc limit "+startrow+","+listsize;
			}			
		}else {
			sql = "select *from stockmanagement where "+key+" like '%"+keyword+"%'  order by stockmanagementno desc limit "+startrow+","+listsize;
		}

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
