package pangpang.model.Dao.product;

import java.sql.ResultSet;
import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.product.CartDto;
import pangpang.model.Dto.product.CategoryDto;
import pangpang.model.Dto.product.ProductDto;

public class ProductDao extends Dao{

	//싱글톤
	private static ProductDao dao= new ProductDao();
	private ProductDao() {}
	public static ProductDao getInstance() {
		return dao;
	}	
	
	// 카테고리 전체 출력
	public ArrayList<CategoryDto> getCategory() {
		ArrayList<CategoryDto> clist = new ArrayList<>();
		String sql = "select * from category";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				CategoryDto cdto = new CategoryDto(rs.getInt(1), rs.getString(2), rs.getString(3));
				clist.add(cdto);
			}
			return clist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
	}
	// 전체 제품 출력
	public ArrayList<ProductDto> getProduct() {
		ArrayList<ProductDto> plist = new ArrayList<>();
		String sql = "select p.*, c.category_name, sum(s.stockmanagementamount) stock from product p, category c, stockmanagement s  where p.category_no = c.category_no and p.product_no = s.product_no group by product_no";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
										rs.getString(6), rs.getInt(7),rs.getInt(8),rs.getInt(9), rs.getString(10),rs.getInt(11));
				plist.add(pdto); 
			}
			return plist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
	}
	
	// 카테고리별 제품 출력
	public ArrayList<ProductDto> getProduct_cate(int cno) {
		ArrayList<ProductDto> plist = new ArrayList<>();
		String sql = "select p.*, c.category_name, sum(s.stockmanagementamount) stock from product p, category c, stockmanagement s "
				+ "where p.category_no = c.category_no and p.product_no = s.product_no and p.category_no = "+cno+" group by product_no";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getInt(7),rs.getInt(8),rs.getInt(9), rs.getString(10),rs.getInt(11));
				plist.add(pdto); 
			}
			return plist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
	}
	// 제품 1개 출력
	public ProductDto getProduct(int pno) {
		String sql = "select p.*, c.category_name, sum(s.stockmanagementamount) stock from product p, category c, stockmanagement s  where p.category_no = c.category_no and p.product_no = s.product_no and p.product_no = "+pno+" group by product_no";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {					
				ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getInt(7),rs.getInt(8),rs.getInt(9), rs.getString(10),rs.getInt(11));
				return pdto;
			}			
		}catch (Exception e) { System.out.println(e);}
		return null;		
	} 
	// 검색된 제품 출력 
	public ArrayList<ProductDto> getProduct_search(String keyword) {
		ArrayList<ProductDto> plist = new ArrayList<>();
		String sql = "select p.*, c.category_name from product p ,category c where p.category_no = c.category_no and product_name like '%"+keyword+"%'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()){
				sql = "select sum(stockmanagementamount) from stockmanagement group by product_no having product_no = "+rs.getInt(1);
				ps  = con.prepareStatement(sql);
				ResultSet rs2 = ps.executeQuery();
				if(rs2.next()) {
					ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
											rs.getString(6), rs.getInt(7), rs.getInt(8),rs.getInt(9),rs.getString(10), rs2.getInt(1));
					plist.add(pdto);
				}
			}
			return plist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
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
	// 품목 등록
	public boolean item_register(ProductDto dto) {
		String sql = "insert into product (product_name,product_option,product_unit,product_img,product_content,product_price,product_discount,category_no) values (?,?,?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getProduct_name());
			ps.setString(2, dto.getProduct_option());
			ps.setString(3, dto.getProduct_unit());
			ps.setString(4, dto.getProduct_img());
			ps.setString(5, dto.getProduct_content());			
			ps.setInt(6, dto.getProduct_price());
			ps.setInt(7, dto.getProduct_discount());
			ps.setInt(8, dto.getCategory_no());
			int count = ps.executeUpdate();
			if(count==1) {return true;}			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 품목 수정
	public boolean item_update(ProductDto dto) {
		String sql = "insert into product (product_name,product_option,product_unit,product_img,product_content,product_price,product_discount,category_no) values (?,?,?,?,?,?,?,?) where product_no = ? ";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getProduct_name());
			ps.setString(2, dto.getProduct_option());
			ps.setString(3, dto.getProduct_unit());
			ps.setString(4, dto.getProduct_img());
			ps.setString(5, dto.getProduct_content());
			ps.setInt(6, dto.getProduct_price());
			ps.setInt(7, dto.getProduct_discount());
			ps.setInt(8, dto.getCategory_no());
			ps.setInt(9, dto.getProduct_no());
			int count = ps.executeUpdate();
			if(count==1) {return true;}			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 품목 삭제
	public boolean item_delete(int pno) {
		String sql = "delete from product where product_no = "+pno;		
		try {
			ps = con.prepareStatement(sql);
			int count = ps.executeUpdate();
			if(count==1) {return true;}			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	
}