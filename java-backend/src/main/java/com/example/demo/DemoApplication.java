package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
//レイヤードアーキテクチャ勉強して

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		System.out.println("aaaa");
		SpringApplication.run(DemoApplication.class, args);
	}

}
