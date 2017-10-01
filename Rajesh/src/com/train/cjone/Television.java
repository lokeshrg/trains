package com.train.cjone;

public final class Television {

	int size1, size2, size3;

	static LGTv lg = new LgTvOne();
	LgTvOne lg1;
	static LgTvTwo t1 = new LgTvTwo();
	static LgTvTwo t2 = new LgTvTwo();

	public static void main(String[] args) {
		lg.testM();
		// lg.turnOn();
		listTvs(new LgTvOne(), new LgTvOne());
		listTvs(new LgTvTwo(), new LgTvOne());
		testStaticVariables();
		System.out.println(add(1, 2));
		System.out.println(add(13, 342));

	}

	public static void listTvs(LGTv lgTV, LgTvOne lgt1 ) {
		lgTV.turnOn();
	}
	
	public static int add(int i, int j){
		return i+j;
	}

	public static void testStaticVariables() {
		t1.len = 10;
		t2.len = 15;
		t1.width = 3;
		t2.width = 21;
		System.out.println(t1.len);
		System.out.println(t1.width);
		System.out.println(t2.len);
		System.out.println(t2.width);
	}

}
