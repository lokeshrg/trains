package com.ooc.one;

public class Television {
	public static void main(String[] args) {

		System.out.println("Hello!");
		
		LgTV tv1 = new LgTvOne();
		
		LgTV tv2 = new LgTvOne(1, 13);
		
		
		tv1.turnOff();
		tv1.turnOn();
		tv1.testTV();
	}
}
