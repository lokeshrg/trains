package com.train.cjone;

import ifaces.LGRules;

public class LgTvTwo extends LGTv implements LGRules {

	public int len;
	public static int width = 5;
	
	public void testM(){
		System.out.println("Inside LGTV abstract class");
	}
	@Override
	public void turnOn() {
		System.out.println("Overrriden inside Lg TV two!");

	}

	@Override
	public void showLGOptions() {
		System.out.println("Lg tv 2 options");
		
	}

}
