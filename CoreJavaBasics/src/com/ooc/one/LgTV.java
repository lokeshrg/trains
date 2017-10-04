package com.ooc.one;

public abstract class LgTV {
	
	
	int size;
	public void turnOff(){
		System.out.println("Turned Off in main TV!");
	}

	
	void testTV(){
		System.out.println("Test Television in main TV!");
	}
	
	public abstract void turnOn();

}
