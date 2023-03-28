drop database if exists pangpang;
create database pangpang;
use pangpang;

drop table if exists drivecar;
drop table if exists bookcar;
drop table if exists carmanage;
drop table if exists cart;
drop table if exists payment;
drop table if exists orderdetail;
drop table if exists ordermanagement;
drop table if exists stockmanagement;
drop table if exists product;
drop table if exists category;
drop table if exists account;
drop table if exists member;
--  회원페이지 -------------------------------------------------------------------------------

create table member(
	member_no 		int auto_increment primary key,            	-- 회원번호    	기본키 자동입력
	member_name     varchar(20) not null,
	member_id 		varchar(20) not null unique,                -- 회원아이디      빈칸X 중복X
	member_pwd 		varchar(20) not null,                       -- 회원비밀번호    	빈칸X 중복O
	-- member_email 	varchar(100) not null unique,               -- 회원이메일      빈칸X 중복X
	member_phone 	varchar(20) not null,                       -- 회원전화번호   	빈칸X 중복O
	member_address 	longtext not null,                     		-- 회원주소      	빈칸X 중복O
	member_birth 	date not null,                             	-- 회원생일    	빈칸X 중복O
	member_rank 	int default 1                               -- 회원등급   	빈칸X 중복O
);


create table account(
	account_no 		int auto_increment primary key,             -- 계좌구분번호    	기본키 자동입력
	account_bank 	varchar(20),                                -- 은행명       	빈칸X 중복O
	account_number 	varchar(100),                           	-- 계좌번호      	빈칸X 중복O
	member_no 		int,                                        -- 회원번호      	빈칸X 중복O
	foreign key(member_no) references member(member_no) on delete cascade 		-- 멤버 지우면 같이 삭제 
);


-- 제품관리 ---------------------------------------------------------------------------------
-- 제품 카테고리 테이블
create table category(
   category_no          int   auto_increment primary key,    			-- 카테고리번호 pk
   category_name        varchar(30) not null ,                 			-- 카테고리명
   category_img         varchar(30) not null                  			-- 카테고리대표이미지
);
-- 제품 테이블                                        						-- 보관조건? 재고위치? // 추가 보완 사항?
create table product(               
   product_no          int auto_increment primary key,   	 			-- 제품번호 pk
   product_name        varchar(30) not null,                			-- 제품명
   product_option      varchar(10) not null,                			-- 규격/옵션         -- 100g / 500ml   
   product_unit        varchar(10)   not null,                			-- 단위             -- (개/봉/박스/곽/통/캔)   
   product_img         varchar(10)   not null,                			-- 제품이미지
   product_content     longtext not null,                  				-- 제품상세설명        -- 원산지 / 보관방법 
   category_no         int,                               				-- 카테고리번호 fk
   foreign key (category_no) references category( category_no ) on delete cascade
);
-- 입출고 테이블                                        			-- 제조년월 / 소비기한 / 폐기 예정일은 어떻게? -- 테이블 분리?
create table stockmanagement(
   stockmanagementno        int   auto_increment primary key,    			-- 재고관리번호 pk
   stockmanagementdate      datetime default now(),                			-- 일자
   stockmanagementenddate   datetime,                          				-- 예정 폐기 일자                      
   stockmanagementtype      int  not null,               					-- 구분   ( 입고 / 출고 / 폐기 / 반품 )	-- int 저장이 효율적인가? 
   stockmanagementcompany   varchar(20) not null,                			-- 업체   ( 입고처/출고처/ 폐기업체)       -- 출고처 = 회원번호? 주문번호?   
   stockmanagementamount   	int   not null,                      			-- 수량
   product_price       		int not null,                       			-- 단가    개당 단가                           
   product_no          		int not null,                        			-- 제품번호 fk
   foreign key (product_no) references product( product_no ) on delete no action
  
);

-- 입고
-- 입고일 제품명 수량 단가 담당직원 거래처 폐기일?제조일?
-- 출고 
-- 출고일 제품명 수량 단가 담당직원 판매처 
-- 폐기
-- 폐기일 제품명 수량 단가 담당직원 폐기처 

-- 장바구니 테이블
create table cart(
	cart_no         			int auto_increment primary key,    		-- 장바구니번호 pk
    cart_amount					int not null,                        	-- 제품수량
	product_no          		int not null,                        	-- 제품코드 fk
	member_no         			int not null,                        	-- 주문회원 fk   
	foreign key (product_no)  references product( product_no ) on delete no action, 
	foreign key (member_no)   references member( member_no ) on delete no action
);
-- 주문 테이블    
create table ordermanagement(
   ordermanagement_no         	int   auto_increment primary key,    	-- 주문번호 pk
   ordermanagement_date       	datetime default now(),              	-- 주문일자      
   ordermanagement_state      	int	  not null,               			-- 주문상태                                   -- 결제확인중/결제확인/배송지연/배송중/배송완료/거래완료/     
   ordermanagement_address    	varchar(20) not null,                	-- 배송주소       
   member_no         			int not null,                        	-- 주문회원 fk     
   foreign key (member_no)   references member( member_no ) on delete no action 
);
-- 주문상세 테이블
create table orderdetail(
   orderdetaildno         	int   auto_increment primary key,   	-- 주문상세번호 pk
   orderdetaildamount      	int   not null,                     	-- 주문수량 
   orderdetaildprice        int   not null,                     	-- 주문단가
   ordermanagement_no      	int   not null,                       	-- 주문번호 fk
   product_no          		int not null,                        	-- 제품코드 fk
   foreign key (product_no) references product( product_no ) on delete no action, 
   foreign key (ordermanagement_no)   references ordermanagement( ordermanagement_no ) on delete cascade
);
-- 결제 테이블 
create table payment(
   payment_no         	int   auto_increment primary key,   	-- 결제번호 pk
   payment_date      	datetime default now(),               	-- 결제일자      
   payment_how         	varchar(20) not null,               	-- 결제방법      ( 무통장거래 / 신용카드 / 네이버페이 / 카카오페이 )
   payment_price    	int   not null,                     	-- 결제금액   
   ordermanagement_no   int   ,                              	-- 주문번호 fk 
   foreign key (ordermanagement_no)   references ordermanagement( ordermanagement_no ) on delete cascade
);

-- 차량관리 페이지 -------------------------------------------------------------------------------------------
-- 차량관리
CREATE TABLE carmanage (
	carmanage_no       			int auto_increment primary key,   		-- 차량일련번호 (PK)
	carmanage_number    			varchar(10),             			-- 차량번호
	carmanage_name      			varchar(40),              			-- 차량명
    carmanage_img					varchar(40),              			-- 차량이미지
	carmanage_use_yn   	 			varchar(1),                 		-- 차량사용여부 (배차때 쓰는 여부)
	carmanage_start   				datetime default now(),          	-- 차량등록일자
	carmanage_finish				datetime,							-- 차량폐기일자				
    carmanage_cumulative_mileage 	bigint								-- 누적주행거리
);

-- 배차관리 
create table bookcar(
	bookcar_no 			int auto_increment primary key,           	--  배차일련번호
	bookcar_str_date 	datetime,                              		--  배차시작일자 3/24(2315) 
	bookcar_end_date 	datetime,                            		--  배차종료일자 3/26(2225)
	bookcar_yn      	varchar(1),                                 --  배차승인여부
	carmanage_no 		int,                                        --  차량일련번호
    member_no 		int,                                       		--  회원번호      	빈칸X 중복O
	foreign key(member_no) references member(member_no) on delete cascade, 		-- 멤버 지우면 같이 삭제 
	foreign key (carmanage_no) references carmanage(carmanage_no) --  차량일련번호fk--   foreign key (mno) references member(mno)    --  사용자일련번호fk -- 배차승인여부?
);

-- 운행일지
create table drivecar(
	drivecar_no    			int auto_increment primary key,            	-- 운행일지일련번호 
	drivecar_str_date 		datetime,                        			-- 운행시작일자
	drivecar_end_date 		datetime,                        			-- 운행종료일자
	drivecar_distance 		int,										-- 운행거리
	drivecar_parking 		varchar(50),   								-- 주차위치
	bookcar_no   			int,     									-- 배차일련번호
	foreign key (bookcar_no) references bookcar(bookcar_no)   			-- 배차일련번호  fk
); 
