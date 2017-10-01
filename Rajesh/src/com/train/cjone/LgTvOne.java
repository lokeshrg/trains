package com.train.cjone;

import ifaces.LGRules;
import ifaces.TelevisionRules;

public class LgTvOne extends LGTv implements TelevisionRules, LGRules {

	@Override
	public void turnOn() {
		System.out.println("Overriden inside LG TV One method");
		
	}

	@Override
	public void showLGOptions() {
		System.out.println("LG has these options: LG One");
		
	}

	@Override
	public void turnOff() {
		System.out.println("Impl goes here!");
	}
	

}
