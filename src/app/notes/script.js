/*export default function Notes() {
    return (
      <div>
        <h1>Notes Page</h1>
      </div>
    );
}*/
const entries = [];
const unfinishedProjects = [];

function showView(view) {
    const views = document.querySelectorAll('.view');
    views.forEach(v => {
        v.style.display = 'none';
    });

    document.getElementById(view).style.display = 'block';
    if (view === 'pastEntries') {
        displayEntries();
    } else if (view === 'unfinishedProjects') {
        displayUnfinishedProjects();
    }
}

function saveEntry() {
    const entryText = document.getElementById('entryText').value;
    const entryCategory = document.getElementById('entryCategory').value;

    if (entryText) {
        if (entryCategory) {
            entries.push({ text: entryText, category: entryCategory });
        } else {
            unfinishedProjects.push(entryText);
        }
        
        // Clear the input
        document.getElementById('entryText').value = '';
        document.getElementById('entryCategory').value = '';
        alert('Entry saved!');
        
        // Automatically switch back to past entries view
        showView('pastEntries');
    } else {
        alert('Please enter some text.');
    }
}

function displayEntries() {
    const entriesList = document.getElementById('entriesList');
    entriesList.innerHTML = '';

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.textContent = `${entry.category}: ${entry.text}`;
        entriesList.appendChild(entryDiv);
    });
}

function displayUnfinishedProjects() {
    const unfinishedList = document.getElementById('unfinishedList');
    unfinishedList.innerHTML = '';

    unfinishedProjects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.textContent = project;
        unfinishedList.appendChild(projectDiv);
    });
}

// Default view
showView('pastEntries');
  