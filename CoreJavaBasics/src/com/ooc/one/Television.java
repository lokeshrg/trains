package com.ooc.one;

public class Television {
	public static void main(String[] args) {
		
		System.out.println("Hello!");
		
		LgTV tv1 = new LgTvOne();
		
		LgTV tv2 = new LgTvOne(1, 13);
		
		LgTvOne.test = 5;
		LgTvOne.testStatic();
		
		//tv1.
		
		LgTvOne tv3 = new LgTvOne();
		tv3.test = 10;
		tv3.height = 11;
		
		LgTvOne tv4 = new LgTvOne();
		tv4.test = 13;
		tv4.height = 12;
		
		System.out.println(tv4.test + " " + tv4.height + " " + tv3.height + " " + tv3.test);
		
		tv1.turnOff();
		tv1.turnOn();
		tv1.testTV();
	}

}
