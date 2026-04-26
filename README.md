# 🚀 Notes App (React + LocalStorage)

A simple and clean **Notes App** built using React.  
Users can create, view, and delete notes, with data saved in **localStorage** so it persists even after refresh.

---

## 📌 Features

- 📝 Create notes (Title + Description)
- 💾 Data stored in localStorage (persistent)
- 🗑️ Delete notes
- ⚡ Instant UI updates using React state
- 🎯 Clean and minimal UI

---

## 🛠️ Tech Stack

- React (useState, useEffect)
- JavaScript (ES6)
- CSS (Custom Styling)
- LocalStorage (for data persistence)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Form.jsx
│   ├── Card.jsx
│
├── style/
│   ├── base.css
│   ├── form.css
│   ├── card.css
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ How It Works

### 1. State Initialization

Notes are stored in `formData` and fetched from localStorage on first render.

```js
const [formData, setFormData] = useState(() => {
  const data = localStorage.getItem('formData')
  return data ? JSON.parse(data) : []
})
```

---

### 2. Data Persistence

Every time `formData` changes, it's saved in localStorage.

```js
useEffect(() => {
  localStorage.setItem('formData', JSON.stringify(formData))
}, [formData])
```

---

### 3. Adding Notes

```js
setFormData(prev => [...prev, { title, description }])
```

---

### 4. Deleting Notes

```js
setFormData(prev => prev.filter((_, i) => i !== index))
```

Removes the selected note using its index.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/notes-app.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## ✨ Future Improvements

- ✏️ Edit notes functionality
- 🔍 Search notes
- 📌 Pin important notes
- 🎨 Dark mode
- 🗂️ Categories / Tags

---

## 💡 Learning Outcome

- Controlled components (forms)
- React state management
- Handling arrays in state
- localStorage integration
- Component-based architecture



---

## 📌 Author

Built by **Chetan Kumawat**  
Learning by building real projects 🚀
