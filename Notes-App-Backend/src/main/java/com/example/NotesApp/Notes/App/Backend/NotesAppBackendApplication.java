package com.example.NotesApp.Notes.App.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class NotesAppBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(NotesAppBackendApplication.class, args);
	}

}
