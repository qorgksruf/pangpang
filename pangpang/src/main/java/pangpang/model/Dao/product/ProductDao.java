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
		String sql = "select p.*, c.category_name, sum(s.stockmanagementamount) stock from product p, category c, stockmanagement s  where p.category_no = c.category_no and p.product_no = s.product_no  group by product_no";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
										rs.getString(6), rs.getInt(7), rs.getString(8),rs.getInt(9));
				plist.add(pdto); 
			}
			return plist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
	}
	
	// 카테고리별 제품 출력
	public ArrayList<ProductDto> getProduct_cate(int cno) {
		ArrayList<ProductDto> plist = new ArrayList<>();
		String sql = "select p.*, c.category_name, sum(s.stockmanagementamount) stock from product p, category c, stockmanagement s  where p.category_no = c.category_no and p.product_no = s.product_no and p.category_no = "+cno+" group by product_no";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
										rs.getString(6), rs.getInt(7), rs.getString(8),rs.getInt(9));
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
							rs.getString(6), rs.getInt(7), rs.getString(8), rs.getInt(9));
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
											rs.getString(6), rs.getInt(7), rs.getString(8), rs2.getInt(1));
					plist.add(pdto);
				}
			}
			return plist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
	}
	// 장바구니 추가
	public boolean cartIn(int amount,int pno,int mno) {
		String sql = "insert into cart (cart_amount,product_no,member_no) values (?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, amount);
			ps.setInt(2, pno);
			ps.setInt(3, mno);
			ps.executeUpdate();
			return true;			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 장바구니 출력
	public ArrayList<CartDto> printCart(int mno) {
		ArrayList<CartDto> list = new ArrayList<>(); 
		String sql = "select c.*, p.*, m.member_id from cart c, product p, member m where c.product_no = p.product_no and c.member_no = m.member_no and m.member_no = "+mno;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				CartDto dto = new CartDto(rs.getInt(1), rs.getInt(2), rs.getInt(3), rs.getInt(4), rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(12));
				list.add(dto); System.out.println(dto);
			}
			return list;			
		}catch (Exception e) {System.out.println(e);}		
		return null;
	}
	// 장바구니 취소
	public boolean cartOut(int pno,int mno) {
		String sql = "delete from cart where product_no = ? and member_no = ? ";		
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, pno);
			ps.setInt(2, mno);
			ps.executeUpdate();
			return true;			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 품목 등록
	public boolean item_register(ProductDto dto) {
		String sql = "insert into product (product_name,product_option,product_unit,product_img,product_content,category_no) values (?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getProduct_name());
			ps.setString(2, dto.getProduct_option());
			ps.setString(3, dto.getProduct_unit());
			ps.setString(4, dto.getProduct_content());
			ps.setString(5, dto.getProduct_img());
			ps.setInt(6, dto.getCategory_no());
			ps.executeUpdate();
			return true;			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 품목 수정
	public boolean item_update(ProductDto dto) {
		String sql = "insert into product (product_name,product_option,product_unit,product_img,product_content,category_no) values (?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getProduct_name());
			ps.setString(2, dto.getProduct_option());
			ps.setString(3, dto.getProduct_unit());
			ps.setString(4, dto.getProduct_content());
			ps.setString(5, dto.getProduct_img());
			ps.setInt(6, dto.getCategory_no());
			ps.executeUpdate();
			return true;			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	// 품목 삭제
	public boolean item_delete(int pno) {
		String sql = "delete from product where product_no = ? ";		
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, pno);
			ps.executeUpdate();
			return true;			
		}catch (Exception e) {System.out.println(e);}		
		return false;
	}
	
}