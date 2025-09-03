// src/main/java/com/example/NotesApp/Notes/App/Backend/dto/NoteDTO.java
package com.example.NotesApp.Notes.App.Backend.dto;

import lombok.Getter;
import lombok.Setter;
import jakarta.validation.constraints.NotBlank;

@Getter
@Setter
public class NoteDTO {
    @NotBlank(message = "Title cannot be empty")
    private String title;

    @NotBlank(message = "Content cannot be empty")
    private String content;
}
