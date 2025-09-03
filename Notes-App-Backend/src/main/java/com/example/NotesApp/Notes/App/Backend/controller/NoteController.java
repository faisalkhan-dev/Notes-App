// src/main/java/com/example/NotesApp/Notes/App/Backend/controller/NoteController.java
package com.example.NotesApp.Notes.App.Backend.controller;

import com.example.NotesApp.Notes.App.Backend.dto.NoteDTO;
import com.example.NotesApp.Notes.App.Backend.model.Note;
import com.example.NotesApp.Notes.App.Backend.service.NoteService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<Note> create(@Valid @RequestBody NoteDTO dto) {
        return ResponseEntity.ok(noteService.createNote(dto));
    }

    @GetMapping
    public ResponseEntity<List<Note>> getAll() {
        return ResponseEntity.ok(noteService.getAllNotes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getById(@PathVariable String id) {
        return ResponseEntity.ok(noteService.getNoteById(id));
    }

    @GetMapping("/share/{shareId}")
    public ResponseEntity<Note> getByShareId(@PathVariable String shareId) {
        return ResponseEntity.ok(noteService.getNoteByShareId(shareId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> update(@PathVariable String id, @Valid @RequestBody NoteDTO dto) {
        return ResponseEntity.ok(noteService.updateNote(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }
}
