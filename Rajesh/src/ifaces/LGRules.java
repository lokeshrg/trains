package ifaces;

public interface LGRules {

	int i = 5;
	void showLGOptions();
	
	default void testEight(){
		System.out.println("Hello i am from java 8");
	}
}
