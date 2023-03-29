package pangpang.model.Dao.map;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.car.BookcarDto;
import pangpang.model.Dto.map.MapOderDto;
import pangpang.model.Dto.member.MemberDto;

public class MapDao extends Dao {
	//싱글톤
	private static MapDao dao= new MapDao();
	private MapDao() {}
	public static MapDao getInstance() {
		return dao;
	}
		
	
	// 1. 멤버 정보 가져오기
	public ArrayList<MemberDto> getMifo(){
		
		ArrayList<MemberDto> list = new ArrayList<>();
		
		String sql = "select * from member";
		
		try {
			
			ps = con.prepareStatement(sql);
			
			rs = ps.executeQuery();
			
			while( rs.next() ) {
				
				//int string string string string string string int
				
				list.add(
						new MemberDto( rs.getInt(1) , rs.getString(2) , rs.getString(3) , rs.getString(4) , 
								rs.getString(5) , rs.getString(6) , rs.getString(7) , rs.getInt(8) ) 
						);	
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}
	
	
	// 2. 차량 배차정보 가져오기
	public BookcarDto getBCarinfo( int mno ){
		
		String sql = "select * from bookcar where bookcar_yn = 'Y' and member_no = ?";
		
		try {
			
			ps = con.prepareStatement(sql);
			
			ps.setInt(1, mno);
			
			rs = ps.executeQuery();
			
			if( rs.next() ) {
				
				//int String String String int int 
				BookcarDto dto = new BookcarDto( rs.getInt(1) , rs.getString(2), rs.getString(3) , rs.getString(4) , rs.getInt(5) , rs.getInt(6) );
				
				return dto ;
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return null;
	}
		
	public ArrayList<MapOderDto> getOrderList(){
		
		ArrayList<MapOderDto> list = new ArrayList<>();
		
		String sql = "select * from ordermanagement";
		
		try {
			
			ps = con.prepareStatement(sql);
			
			rs = ps.executeQuery();
			
			while( rs.next() ) {
				
				list.add(
						new MapOderDto(
								rs.getInt(1) , rs.getString(2) , rs.getInt(3) , rs.getString(4) , rs.getInt(5) )
					
						);
			}
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return list; 
	}
	
}
