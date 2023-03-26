-- 카테고리 추가
insert into category(category_name,category_img) values ('과일','과일.png');
insert into category(category_name,category_img) values ('정육/계란','정육.png');
insert into category(category_name,category_img) values ('밀키트','밀키트.png');
insert into category(category_name,category_img) values ('샐러드','샐러드.png');
insert into category(category_name,category_img) values ('수산','수산.png');
insert into category(category_name,category_img) values ('통조림/즉석밥','통조림.png');
insert into category(category_name,category_img) values ('쌀/잡곡','잡곡.png');
insert into category(category_name,category_img) values ('베이커리','베이커리.png');
insert into category(category_name,category_img) values ('우유/유제품','유제품.png');
insert into category(category_name,category_img) values ('간식/떡/빙과','간식.png');
insert into category(category_name,category_img) values ('커피/음료','음료.png');
insert into category(category_name,category_img) values ('양념','양념.png');

select * from category;

-- 제품 추가
insert into product(product_name,product_option,product_unit,product_img,product_content,category_no) 
values ('곰곰 안동 시나노 골드사과','1.5kg','봉','골드사과.png','입과 눈 모두 즐거운 시나노 골드 사과 골든데리셔스와 천추를 교배하여 개발한 시나노 골드 사과입니다.',1);
insert into product(product_name,product_option,product_unit,product_img,product_content,category_no) 
values ('곰곰 당도선별 성주참외','1kg','봉','참외.png','풍부한 영양을 품은 당도선별 성주참외
건강하게 자란 성주참외는 기분 좋은 시원한 맛과 풍부한 영양으로 입맛을 돋게 합니다.
먹음직스러운 색감으로 입과 눈 모두 즐겁게 즐겨보세요.',1);
insert into product(product_name,product_option,product_unit,product_img,product_content,category_no) 
values ('곰곰 달콤한 스테비아 대추방울토마토','1kg','봉','방울토마토.png','달달한 스윗토
탄탄한 과육 속 진한 단맛이 매력적인 스윗토예요. 입안에서 맛있게 톡톡 터지는 식감이 일품이지요. 탱글한 과육을 씹으면 톡 하고 달콤한 과즙이 입안 가득 퍼진답니다. 생과 그대로 즐기거나, 샐러드, 파스타 등 다양한 요리로 활용해보세요.',1);
insert into product(product_name,product_option,product_unit,product_img,product_content,category_no) 
values ('곰곰 이스라엘 자몽','2kg','봉','자몽.png','새콤하고 쌉가름한 과즙을 가득 머금은 곰곰 이스라엘 자몽!
영롱한 붉은빛 과육 속 새콤한 자몽의 향을 느껴보세요! 
이스라엘 자몽 특유의 새콤하고 쌉싸름한 향미는 에이드, 베이킹 등 다양한 재료와 잘 어울려요!',1);

select * from product;

-- 입고 
insert into stockmanagement(stockmanagementdate , stockmanagementenddate , stockmanagementtype , stockmanagementcompany , stockmanagementamount  , product_price ,product_no)
values ('2023-03-25','2023-03-27',1,'GOMGOM',20,4000,1);  
insert into stockmanagement(stockmanagementdate , stockmanagementenddate , stockmanagementtype , stockmanagementcompany , stockmanagementamount  , product_price ,product_no)
values ('2023-03-25','2023-03-27',1,'GOMGOM',20,4000,2);   
insert into stockmanagement(stockmanagementdate , stockmanagementenddate , stockmanagementtype , stockmanagementcompany , stockmanagementamount  , product_price ,product_no)
values ('2023-03-26','2023-04-01',1,'GOMGOM',20,4000,3);      
-- 출고
insert into stockmanagement(stockmanagementdate ,stockmanagementtype , stockmanagementcompany , stockmanagementamount  , product_price ,product_no)
values ('2023-03-26',2,'GOMGOM',-2,5000,1);  
insert into stockmanagement(stockmanagementdate ,stockmanagementtype , stockmanagementcompany , stockmanagementamount  , product_price ,product_no)
values ('2023-03-26',2,'GOMGOM',-5,6000,2);
insert into stockmanagement(stockmanagementdate ,stockmanagementtype , stockmanagementcompany , stockmanagementamount  , product_price ,product_no)
values ('2023-03-26',2,'GOMGOM',-6,7000,3);

select * from stockmanagement;

-- 잔여 재고 추적 ( 잔여재고 = 누적 입고 - 누적 출고 )
-- 입고 
select product_no, sum(stockmanagementamount) from stockmanagement where stockmanagementtype = 1 group by product_no;
-- 출고
select product_no, sum(stockmanagementamount) from stockmanagement where stockmanagementtype = 2 group by product_no ;
-- 재고
select product_no, sum(stockmanagementamount) from stockmanagement group by product_no ;
-- 1번 제품 잔여재고 
select product_no, sum(stockmanagementamount) from stockmanagement group by product_no having product_no = 1 ;