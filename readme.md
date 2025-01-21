# **Library Management System API Server**

**Objective:**  
The main objective of the Library Management System is to manage the details of Books, Members, Issues, and Returns. It manages all the information about Books, Library, and Returns. The project is totally built at the administrative end and thus only the administrator is guaranteed the access. The purpose of the project is to build an application program to reduce the manual work for managing the Books, Members, Issues, and Returns. It tracks all the details about the Returns, Books, Library.

---

## **Technologies Stack**

- **Prisma ORM**
- **Node.js**
- **PostgreSQL**
- **Express.js**
- **TypeScript**

---

## **Instructions on How to run the Application Locally**.

**if you use npm then execute**

```javascript
npm install
npm run build
npm run start:dev

```

**or if you want to use yarn then execute**

```javascript
yarn
yarn build
yarn start:dev

```

## **Database Schema**

Used Prisma ORM to design the following schema:

### **1. Book Table**

| Field             | Type   | Description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| `bookId`          | UUID   | Unique identifier for each book                    |
| `title`           | String | Title of the book                                  |
| `genre`           | String | Genre or category of the book                      |
| `publishedYear`   | Int    | Year the book was published                        |
| `totalCopies`     | Int    | Total copies of the book in the library            |
| `availableCopies` | Int    | Number of copies currently available for borrowing |

### **2. Member Table**

| Field            | Type     | Description                        |
| ---------------- | -------- | ---------------------------------- |
| `memberId`       | UUID     | Unique identifier for each member  |
| `name`           | String   | Name of the library member         |
| `email`          | String   | Member’s email (unique)            |
| `phone`          | String   | Member’s contact number            |
| `membershipDate` | DateTime | Date the member joined the library |

### **3. BorrowRecord Table**

| Field        | Type     | Description                                |
| ------------ | -------- | ------------------------------------------ |
| `borrowId`   | UUID     | Unique identifier for each borrow record   |
| `borrowDate` | DateTime | Date when the book was borrowed            |
| `returnDate` | DateTime | Date when the book was returned (nullable) |
| `bookId`     | UUID     | Foreign key referencing `Book`             |
| `memberId`   | UUID     | Foreign key referencing `Member`           |

---

## **Features & Endpoints**

#### **1. Book CRUD Operations**

- **Create Book**  
  Created a new book record in the library’s database.

  **Endpoint:** `POST /api/books`

  **Request Body:**

  ```json
  {
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 201,
    "message": "Book created successfully",
    "data": {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird",
      "genre": "Fiction",
      "publishedYear": 1960,
      "totalCopies": 10,
      "availableCopies": 10
    }
  }
  ```

- **Read All Books**  
  Retrieves a list of all books in the library.

  **Endpoint:** `GET /api/books`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Books retrieved successfully",
    "data": [
      {
        "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publishedYear": 1960,
        "totalCopies": 10,
        "availableCopies": 10
      }
    ]
  }
  ```

- **Read Book by ID**  
  Fetches details of a specific book by its `bookId`.

  **Endpoint:** `GET /api/books/:bookId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book retrieved successfully",
    "data": {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird",
      "genre": "Fiction",
      "publishedYear": 1960,
      "totalCopies": 10,
      "availableCopies": 10
    }
  }
  ```

- **Update Book**  
  Updates information of an existing book by its `bookId`.

  **Endpoint:** `PUT /api/books/:bookId`

  **Request Body:**

  ```json
  {
    "title": "To Kill a Mockingbird - Revised",
    "genre": "Classic Fiction",
    "publishedYear": 1961,
    "totalCopies": 12,
    "availableCopies": 8
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book updated successfully",
    "data": {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird - Revised",
      "genre": "Classic Fiction",
      "publishedYear": 1961,
      "totalCopies": 12,
      "availableCopies": 8
    }
  }
  ```

- **Delete Book**  
  Deletes a book from the library by its `bookId`.

  **Endpoint:** `DELETE /api/books/:bookId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book successfully deleted"
  }
  ```

---

#### **2. Members**

- **Create Member**  
  Added a new member to the library.

  **Endpoint:** `POST /api/members`

  **Request Body:**

  ```json
  {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "123-456-7890",
    "membershipDate": "2024-01-01T00:00:00.000Z"
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 201,
    "message": "Member created successfully",
    "data": {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "123-456-7890",
      "membershipDate": "2024-01-01T00:00:00.000Z"
    }
  }
  ```

- **Read All Members**  
  Retrieved a list of all members in the library.

  **Endpoint:** `GET /api/members`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Members retrieved successfully",
    "data": [
      {
        "memberId": "8765-4321-1098",
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "phone": "123-456-7890",
        "membershipDate": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
  ```

- **Read Member by ID**  
  Fetched details of a specific member by their `memberId`.

  **Endpoint:** `GET /api/members/:memberId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Member retrieved successfully",
    "data": {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "123-456-7890",
      "membershipDate": "2024-01-01T00:00:00.000Z"
    }
  }
  ```

- **Update Member**  
  Updated information for a specific member by their `memberId`.

  **Endpoint:** `PUT /api/members/:memberId`

  **Request Body:**

  ```json
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "098-765-4321"
  }
  ```

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Member updated successfully",
    "data": {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "098-765-4321"
    }
  }
  ```

- **Delete Member**  
  Deleted a member from the library by their `memberId`.

  **Endpoint:** `DELETE /api/members/:memberId`

  **Response:**

  ```json
  {
    "success": true,
    "status": 200,
    "message": "Member successfully deleted"
  }
  ```

---

### **3. Borrow & Return Books**

#### **Borrow a Book**

- **Endpoint:** `POST /api/borrow`
- **Request Body:**
  ```json
  {
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "memberId": "a24df67b-1234-5678-9101-b2a3c5d7f098"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book borrowed successfully",
    "data": {
      "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f",
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "memberId": "8765-4321-1098",
      "borrowDate": "2024-09-01T10:00:00.000Z"
    }
  }
  ```

#### **Return a Book**

- **Endpoint:** `POST /api/return`
- **Request Body:**
  ```json
  {
    "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "status": 200,
    "message": "Book returned successfully"
  }
  ```

---

### **Overdue Borrow List**

- Endpoint: GET /api/borrow/overdue
- **Description**: Tracked overdue borrowed books. A list of books that are past the due date for return.
- **Functionality**:

  - Calculate overdue books based on the due date.
  - Provide a list of overdue items with borrower details.

- **Return Policy:** All borrowed books must be returned within 14 days from the borrow date.

- **Response**:
  - If overdue books exist:
    ```json
    {
      "success": true,
      "status": 200,
      "message": "Overdue borrow list fetched",
      "data": [
        {
          "borrowId": "b1234",
          "bookTitle": "To Kill a Mockingbird",
          "borrowerName": "John Doe",
          "overdueDays": 5
        }
      ]
    }
    ```
  - If no overdue books:
    ```json
    {
      "success": true,
      "status": 200,
      "message": "No overdue books",
      "data": []
    }
    ```

---
