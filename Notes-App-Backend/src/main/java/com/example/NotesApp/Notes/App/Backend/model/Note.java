// src/main/java/com/example/NotesApp/Notes/App/Backend/model/Note.java
package com.example.NotesApp.Notes.App.Backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;

@Document(collection = "notes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Note {

    @Id
    private String id;  // Mongo uses String/ObjectId, not Long

    private String title;
    private String content;
    private String shareId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Factory method for new notes
    public static Note create(String title, String content) {
        Note note = new Note();
        note.setTitle(title);
        note.setContent(content);
        note.setCreatedAt(LocalDateTime.now());
        note.setUpdatedAt(LocalDateTime.now());
        note.setShareId(UUID.randomUUID().toString());
        return note;
    }
}
