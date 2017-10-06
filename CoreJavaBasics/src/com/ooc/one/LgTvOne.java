package com.ooc.one;

public class LgTvOne extends LgTV{
	int height;
	int width;
	static int test;
	
	public LgTvOne(){
		System.out.println("Created an LgTvOne object!");
	}
	
	public LgTvOne(int i, int j){
		this.width = i;
		System.out.println("Created an LgTvOne object!");
		
	}
	@Override
	public void turnOn() {
		System.out.println("Turned on in TV One!");
		
	}

	
	@Override
	public void turnOff(){
		System.out.println("Turned off in TV One!");
	}
	
	public static void testStatic(){
		System.out.println("Static call!");
		//turnOff();
	}
	
}
