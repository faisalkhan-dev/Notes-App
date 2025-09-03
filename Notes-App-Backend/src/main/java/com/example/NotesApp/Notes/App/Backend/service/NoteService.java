// src/main/java/com/example/NotesApp/Notes/App/Backend/service/NoteService.java
package com.example.NotesApp.Notes.App.Backend.service;

import com.example.NotesApp.Notes.App.Backend.dto.NoteDTO;
import com.example.NotesApp.Notes.App.Backend.model.Note;
import com.example.NotesApp.Notes.App.Backend.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note createNote(NoteDTO dto) {
        Note note = Note.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .shareId(UUID.randomUUID().toString())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        return noteRepository.save(note);
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note getNoteById(String id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found with id " + id));
    }

    public Note getNoteByShareId(String shareId) {
        return noteRepository.findByShareId(shareId)
                .orElseThrow(() -> new RuntimeException("Note not found with shareId " + shareId));
    }

    public Note updateNote(String id, NoteDTO dto) {
        Note note = getNoteById(id);
        note.setTitle(dto.getTitle());
        note.setContent(dto.getContent());
        note.setUpdatedAt(LocalDateTime.now());
        return noteRepository.save(note);
    }

    public void deleteNote(String id) {
        noteRepository.deleteById(id);
    }
}
