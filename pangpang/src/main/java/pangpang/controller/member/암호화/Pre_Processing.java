package pangpang.controller.member.암호화;

import java.util.BitSet;

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
    	return sb.toString();
	}
    
    private static String getBits2(int plengrh) {
    	StringBuilder sb = new StringBuilder();
    	int cnt = 0;
    	
    	for(int i = 1 ; i <64 ; i++) {
    		int pow = (int) Math.pow(2, i);
    		
    		if(plengrh < pow) {
    			cnt = i;
    			break;
    		}
    	}
    	
        for (int i = 0; i < cnt; i++) {
            sb.append((plengrh & 128) == 0 ? 0 : 1);
            plengrh <<= 1;
        }
        
        return sb.toString();
    }
    
    public static void main(String[] args) {
        String ptext = "abc";
        int plengrh = ptext.length()*8;
        
        String blengrh = getBits2(260);
        System.out.println("blengrh"+blengrh);
        
        System.out.println(toBinary(ptext));
        String binary = toBinary(ptext);
        
        System.out.println(padding(binary,plengrh));
        String padding = padding(binary,plengrh);
        
        
        
    }
}
