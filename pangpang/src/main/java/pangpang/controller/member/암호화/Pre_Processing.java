package pangpang.controller.member.암호화;


public class Pre_Processing {

	private static void getBits(StringBuilder sb, byte b) {
        for (int i = 0; i < 8; i++) {
            sb.append((b & 128) == 0 ? 0 : 1);
            b <<= 1;
        }
        sb.append(' ');
    }
 
    public static String toBinary(String s) {
        byte[] bytes = s.getBytes();
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            System.out.println(b);
        	getBits(sb, b);
        }
        return sb.toString().trim();
    }
    
    public static String padding(String binary,int plengrh) {
    	StringBuilder sb = new StringBuilder();
    	sb.append(binary); 
    	sb.append(' ');
    	for(int i = 1 ; i<=(512-plengrh-64);i++) {
    		sb.append(0);
    		if(i%8==0) {
    			 sb.append(' '); 
    		}
    	}
    	return sb.toString().trim();
	}

    public static String toBinary(int n)
    {
        if (n == 0) {
            return "";
        }
        return toBinary(n / 2) + (n % 2);
    }
 
   
    public static void main(String[] args) {
    	// 평문 문자
        String ptext = "abc";
        
        // 평문 문자를 바이너리로 변환 했을때 길이
        int plengrh = ptext.length()*8;
        
        // 평문 문자를 바이너리로 바꿈
        System.out.println(toBinary(ptext));
        String binary = toBinary(ptext);
        
        // 남은 공간을 0으로 채움
        System.out.println(padding(binary,plengrh));
        String padding = padding(binary,plengrh);
 
        // 문자의 길이를 이진수로 바꿈 (총 길이는 64bit)
        String blengrh = String.format("%0" + 64 + "d", Integer.valueOf(toBinary(plengrh)));
        System.out.println("blengrh"+blengrh);
        
        // 최종 pre_processing 값
        String pre_processing = padding+blengrh;
        System.out.println(pre_processing);
        
    }
}
