package pangpang.model.Dao.map;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.map.MapOderDto;
import pangpang.model.Dto.map.MapcarDto;

public class MapDao extends Dao {
	//싱글톤
	private static MapDao dao= new MapDao();
	private MapDao() {}
	public static MapDao getInstance() {
		return dao;
	}
	
	
	// 1. 멤버 아이디로
		
	// 2. 차량 배차정보 가져오기
	public synchronized MapcarDto getBCarinfo( int mno ){
		
		String sql = "select b.* , c.carmanage_number , c.carmanage_name , c.carmanage_img from bookcar b , carmanage c "
				+ " where b.carmanage_no = c.carmanage_no  and bookcar_yn = 'Y' and member_no = ?";
		
		try {
			
			ps = con.prepareStatement(sql);
			
			ps.setInt(1, mno);
			
			rs = ps.executeQuery();
			
			if( rs.next() ) {
				
				//int String String String int int 
				return new MapcarDto( rs.getInt(1), rs.getString(2), rs.getString(3), 
						rs.getString(4), rs.getInt(5), rs.getInt(6), rs.getString(7) , 
						rs.getString(8) , rs.getString(9) );
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}
	
	
	// 3. 주문목록 가져오기
	public synchronized ArrayList<MapOderDto> getOrderList(){
		
		ArrayList<MapOderDto> list = new ArrayList<>();
		
		String sql = "select * from ordermanagement where ordermanagement_state = 2";
		
		try {
			
			ps = con.prepareStatement(sql);
			
			rs = ps.executeQuery();
			
			while( rs.next() ) {
				
				list.add(
						new MapOderDto(
								rs.getInt(1) , rs.getString(2) , 
								rs.getInt(3) , rs.getString(4) , rs.getInt(5) )
					
						);
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return list; 
	}
	
}
