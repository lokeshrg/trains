package com.ooc.two.threads;

import com.ooc.one.LgTV;
import com.ooc.one.LgTvOne;

public class PerformSomeThreadActions {

	public int actionCount = 1;
	public String actionName = "void";
	
	public synchronized void testOnOff() throws InterruptedException{
		//System.out.println("Hi");
		LgTV l1 = new LgTvOne();
		l1.turnOn();
		Thread.sleep(3000);
		l1.turnOff();
	}
	
	public synchronized int getActionCount(){
		System.out.println("current Action count in Thread:"+ Thread.currentThread().getName() + " is :" + actionCount++);
		return actionCount;
	} 
	
}
