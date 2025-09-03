// src/main/java/com/example/NotesApp/Notes/App/Backend/repository/NoteRepository.java
package com.example.NotesApp.Notes.App.Backend.repository;

import com.example.NotesApp.Notes.App.Backend.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface NoteRepository extends MongoRepository<Note, String> {
        Optional<Note> findByShareId(String shareId);
}
