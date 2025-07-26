// 📂 data/books.ts
export interface BookType {
  id: number;
  title: string;
  color: string;
  author?: string;
  content?: string;
  image?: string;
  isPublic: boolean;
}

// Initial books list (no longer hardcoded state)
const BookList: BookType[] = [
  {
    id: 1,
    author: "CKCarr",
    title: "Poem Collection 1",
    color: "#702632",
    content:
      "Ocean of chaos and contemplation,\nSailing to the destination,\nwave after wave...",
    image: "/images/beachglass.jpg",
    isPublic: true,
  },
  { id: 2, title: "Poem Collection 2", color: "#362023", isPublic: true },
  { id: 3, title: "Dreams & Verses", color: "#273469", isPublic: true },
  { id: 4, title: "Midnight Thoughts", color: "#1E2749", isPublic: true },
  { id: 5, title: "Echoes of the Heart", color: "#084C61", isPublic: true },
];

export default BookList;
