// Initialize empty array to store chapters
const favChapters = [];

// DOM elements
const form = document.querySelector('#chapterForm');
const input = document.querySelector('#favchap');
const messageDiv = document.querySelector('#message');
const list = document.querySelector('#chaptersList');

// Update footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent += document.lastModified;

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const chapter = input.value.trim();

  if (chapter === '') {
    messageDiv.textContent = 'Please enter a valid scripture chapter.';
    messageDiv.style.color = '#dc2626';
    return;
  }

  // Add to array
  favChapters.push(chapter);

  // Create list item
  const li = document.createElement('li');
  li.textContent = chapter;

  // Optional: Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => {
    favChapters.splice(favChapters.indexOf(chapter), 1);
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear input and reset message
  input.value = '';
  messageDiv.textContent = 'Chapter added successfully!';
  messageDiv.style.color = '#16a34a';
  input.focus();
});