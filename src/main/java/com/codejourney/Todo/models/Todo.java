package com.codejourney.Todo.models;

public class Todo {

    private int id;
    private String Content;

    public Todo(int id, String content) {
        this.id = id;
        Content = content;
    }

    public Todo() {
    }

    public int getId() {
        return id;
    }

    public String getContent() {
        return Content;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setContent(String content) {
        Content = content;
    }

}
