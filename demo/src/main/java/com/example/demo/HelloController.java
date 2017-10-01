package com.example.demo;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.domain.SampleData;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Controller
public class HelloController {
	@RequestMapping("/hello")
	public String hello(Model model,
			@RequestParam(value = "param1", required = false, defaultValue = "World") String name) {
		model.addAttribute("param1", getData());//mapObjectFromJson());
		return "hello";
	}

	private Map<String, String> mapObjectFromJson() {
		//return "{ \"name\": \"Imperial Stout\", \"description\": \"Tasty Stout Beer\"}";
		//return getData().toString();
		Gson gson = new Gson();
		//Type type = new TypeToken<Map<String, String>>(){}.getType();
		String json = getData();//"{'k1':'apple','k2':'orange'}"
		Map<String, String> myMap = gson.fromJson(getData(), new TypeToken<Map<String, String>>(){}.getType());
		return myMap;
	}
	
	private String getData(){
		SampleData sampleObj = new SampleData("TestName", "Description");
		Gson gson = new Gson();
		String jsonStr = gson.toJson(sampleObj);
		System.out.println(jsonStr);
		//return new SampleData("TestName", "Description");
		return jsonStr;
	}
}
