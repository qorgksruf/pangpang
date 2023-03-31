package pangpang.model.Dao.product;

import java.sql.ResultSet;
import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.product.CartDto;
import pangpang.model.Dto.product.OrderDto;

public class OrderDao extends Dao{

	//싱글톤
	private static OrderDao dao= new OrderDao();
	private OrderDao() {}
	public static OrderDao getInstance() {
		return dao;
	}	
	
	// 장바구니 추가
	public int cartIn(int amount,int pno,int mno) {
		// 기존 장바구니 동일 제품 존재 확인
		String sql = "select c.*, p.* from cart c, product p where c.product_no = p.product_no and c.member_no = "+mno;	
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				if(rs.getInt(3)==pno) {return 3;}
			}
			// 장바구니 추가
			sql = "insert into cart (cart_amount,product_no,member_no) values (?,?,?)";
			ps = con.prepareStatement(sql);
			ps.setInt(1, amount);
			ps.setInt(2, pno);
			ps.setInt(3, mno);
			int count = ps.executeUpdate();
			if(count==1) {return 1;}			
		}catch (Exception e) {System.out.println(e);}		
		return 2;
	}
	// 장바구니 출력 // 제품 출력
	public ArrayList<CartDto> printCart(int mno) {
		ArrayList<CartDto> list = new ArrayList<>(); 
		String sql = "select c.*, p.* from cart c, product p where c.product_no = p.product_no and c.member_no = "+mno;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				sql = "select sum(s.stockmanagementamount) stock from product p, stockmanagement s  where p.product_no = s.product_no and s.product_no = "+rs.getInt(3)+" group by s.product_no";
				ps = con.prepareStatement(sql);
				ResultSet rs2 = ps.executeQuery();
				if(rs2.next()) {
					CartDto dto = new CartDto(rs.getInt(1), rs.getInt(2), rs.getInt(3), rs.getInt(4), rs.getString(6), 
							rs.getString(7), rs.getString(8), rs.getString(9), rs.getInt(11), rs.getInt(12), null, rs2.getInt(1));
					list.add(dto); System.out.println(dto);	
				}
			}
			return list;			
		}catch (Exception e) {System.out.println(e);}		
		return null;
	}
	// 장바구니 전체 취소
	public boolean cartOutAll(int mno) {
		String sql = "delete from cart where member_no = "+mno;		
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate();
			ps.executeUpdate();
			return true;			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 장바구니 취소
	public boolean cartOut(int pno,int mno) {
		String sql = "delete from cart where product_no = "+pno+" and member_no = "+mno;		
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if(count==1) {return true;}		
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 주문 목록 출력
	// 로그인한 회원 주문 내역 
	// 전체 주문목록 
	// 상태타입별 주문목록?
	public ArrayList<OrderDto> getOrderList() {
		ArrayList<OrderDto> list = new ArrayList<>();
		String sql = "select o.*, member_id from ordermanagement o natural join member order by ordermanagement_no desc";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				OrderDto dto = new OrderDto(rs.getInt(1), rs.getString(2), rs.getInt(3), rs.getString(4), 
						rs.getInt(5), null,null, 0, rs.getString(6), null);
				list.add(dto);
			}
			return list;
		}catch (Exception e) { System.out.println(e);}
		return null;		
}
	
}
