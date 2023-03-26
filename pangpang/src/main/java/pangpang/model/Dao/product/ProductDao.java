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
	// 카테고리별 제품 출력
	public ArrayList<ProductDto> getProduct_cate(int cno) {
		ArrayList<ProductDto> plist = new ArrayList<>();
		String sql = "select p.*, c.category_name from product p ,category c where p.category_no ="+cno;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			while(rs.next()){
				ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
										rs.getString(6), rs.getInt(7), rs.getString(8),0);
				plist.add(pdto); 
			}
			return plist;
		}catch (Exception e) { System.out.println(e);}
		return null;		
	}
	// 제품 1개 출력
	public ProductDto getProduct(int pno) {
		String sql = "select p.*, c.category_name from product p ,category c  where product_no ="+pno;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {				
				sql = "select sum(stockmanagementamount) from stockmanagement group by product_no having product_no = "+pno;
				ps  = con.prepareStatement(sql);
				ResultSet rs2 = ps.executeQuery();
				if(rs2.next()) {
					ProductDto pdto = new ProductDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
							rs.getString(6), rs.getInt(7), rs.getString(8), rs2.getInt(1));
					return pdto;
				}
			}			
		}catch (Exception e) { System.out.println(e);}
		return null;		
	} 
	// 검색된 제품 출력 
	public ArrayList<ProductDto> getProduct_search(String search) {
		ArrayList<ProductDto> plist = new ArrayList<>();
		String sql = "select p.*, c.category_name from product p ,category c where product_name like '%"+search+"%'";
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
	
}
