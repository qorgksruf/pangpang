package pangpang.model.Dao.product;

import java.sql.ResultSet;
import java.util.ArrayList;

import pangpang.model.Dao.Dao;
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
	
}