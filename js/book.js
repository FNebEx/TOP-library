export function Book(title, author) {
  this.id = '_' + Math.random().toString(36).substr(2, 9);
  this.title = title;
  this.author = author;
}