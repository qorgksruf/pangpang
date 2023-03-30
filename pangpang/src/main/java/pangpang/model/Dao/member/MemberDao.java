package pangpang.model.Dao.member;

import java.util.ArrayList;

import pangpang.model.Dao.Dao;
import pangpang.model.Dto.member.MemberDto;

public class MemberDao extends Dao{
	private static MemberDao dao = new MemberDao();
	private MemberDao() {}
	public static MemberDao getInstance() { return dao; }
	
	// 1. 회원가입
		public boolean signup( MemberDto dto ) {
			String sql = "insert into member(member_name, member_birth, member_email, member_phone, member_id, member_pwd, member_address) values(?,?,?,?,?,?,?);";
			try {
				ps = con.prepareStatement(sql);
				ps.setString( 1 , dto.getMember_name() );
				ps.setString( 2 , dto.getMember_birth() );
				ps.setString( 3 , dto.getMember_email() );
				ps.setString( 4 , dto.getMember_phone() );
				ps.setString( 5 , dto.getMember_id() );
				ps.setString( 6 , dto.getMember_pwd() );
				ps.setString( 7 , dto.getMember_address());
				int cnt = ps.executeUpdate(); 
				if(cnt == 1) {return true;}
			}catch (Exception e) {System.out.println(e);}
			return false;
		}
		
	// 2. 이메일 중복검사
	public boolean getEmail( String member_email ) {
		String sql = "select * from member where member_email='"+member_email+"';";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				return true;
			}
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
	
	// 3. 아이디 중복검사
	public boolean getId( String member_id ) {
		String sql = "select * from member where member_id='"+member_id+"';";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				return true;
			}
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
	
	// 4. 로그인
	public String login( String member_id , String member_pwd ) {
		String sql = "select member_rank from member where member_id='"+member_id+"' and member_pwd='"+member_pwd+"';";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				return rs.getString(1);
			}
		}catch (Exception e) {System.out.println(e);}
		return null;
	}
	
	
	
	
	// 5. 로그인한 회원 정보찾기
	public MemberDto getMember( int member_no ) {
		String sql = "select member_no, member_name, member_id, member_email, member_phone, member_address, member_birth, member_rank "
				+ "from member m where member_no = ?;";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, member_no);
			rs = ps.executeQuery();
			if( rs.next() ) {
				MemberDto dto = new MemberDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7), rs.getInt(8));
				return dto;
			}
		}catch (Exception e) {System.out.println(e);} 
		return null;
	}
	
	// 6. 회원 리스트 뽑기
	public ArrayList<MemberDto> getMemberList() {
		ArrayList<MemberDto> list = new ArrayList<>();
		String sql = "select member_no , member_name, member_id,  member_email, "
				+ "member_phone, member_address ,member_birth,member_rank "
				+ "from member;";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while( rs.next() ) {
				MemberDto dto = new  MemberDto(rs.getInt(1), rs.getString(2), rs.getString(3), 
						rs.getString(4), rs.getString(5), rs.getString(6), 
						rs.getString(7), rs.getInt(8));
				list.add(dto);
			}return list;
		}catch (Exception e) {System.out.println(e);} 
		return list;
		
	}
	
	// 7. 회원id --> 회원mno 반환
	public int getMno( String member_id ) {
		String sql = "select member_no from member where member_id = ? ";
		try {
			ps = con.prepareStatement(sql);
			ps.setString( 1 , member_id );
			rs = ps.executeQuery();
			if( rs.next()  ) return rs.getInt(1);
		}catch (Exception e) {System.out.println(e);} 
		return 0;
	}
	
	// 8. 회원정보 수정
	public boolean update( MemberDto dto) {
		String sql = "update member set member_no=?,member_name=?,member_birth=?,member_email=?,member_phone=?,member_id=?,member_address=?,member_rank=? where member_no=? ;";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, dto.getMember_no());
			ps.setString( 2 , dto.getMember_name() );
			ps.setString( 3 , dto.getMember_birth() );
			ps.setString( 4 , dto.getMember_email() );
			ps.setString( 5 , dto.getMember_phone() );
			ps.setString( 6 , dto.getMember_id() );
			ps.setString( 7 , dto.getMember_address());
			ps.setInt(8, dto.getMember_rank());
			ps.setInt(9, dto.getMember_no());
			int cnt = ps.executeUpdate();
			if(cnt==1) {return true;}
		}catch (Exception e) {System.out.println(e);}
		return false;
	}
		
}
