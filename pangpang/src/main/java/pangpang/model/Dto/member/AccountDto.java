package pangpang.model.Dto.member;

public class AccountDto {
	private int account_no;
	private String account_bank;
	private String account_number;
	private int member_no; 
	
	private String member_id;
	
	public AccountDto() {
		// TODO Auto-generated constructor stub
	}

	public AccountDto(int account_no, String account_bank, String account_number, int member_no, String member_id) {
		super();
		this.account_no = account_no;
		this.account_bank = account_bank;
		this.account_number = account_number;
		this.member_no = member_no;
		this.member_id = member_id;
	}

	public int getAccount_no() {
		return account_no;
	}

	public void setAccount_no(int account_no) {
		this.account_no = account_no;
	}

	public String getAccount_bank() {
		return account_bank;
	}

	public void setAccount_bank(String account_bank) {
		this.account_bank = account_bank;
	}

	public String getAccount_number() {
		return account_number;
	}

	public void setAccount_number(String account_number) {
		this.account_number = account_number;
	}

	public int getMember_no() {
		return member_no;
	}

	public void setMember_no(int member_no) {
		this.member_no = member_no;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	@Override
	public String toString() {
		return "AccountDto [account_no=" + account_no + ", account_bank=" + account_bank + ", account_number="
				+ account_number + ", member_no=" + member_no + ", member_id=" + member_id + "]";
	}
	
	
}	
