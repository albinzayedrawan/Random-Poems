 document.addEventListener("DOMContentLoaded", async function() {
    const container = document.getElementById("poem-container");
  
    try {      const response = await fetch("https://poetrydb.org/random/5/title,author,lines");
       const poems = await response.json();
  
      poems.forEach(poem => {
        const preview = poem.lines.slice(0, 6).join(' '); 
  
        const card = `
          <div class="col-md-4 mb-4">
         <div class="card">
        <div class="card-body">
        <h5 class="card-title">${poem.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${poem.author}</h6>
        <p class="card-text">${preview}...</p>
        <a href="details.html?title=${encodeURIComponent(poem.title)}&author=${encodeURIComponent(poem.author)}&lines=${encodeURIComponent(poem.lines.join('|'))}" class="btn btn-primary">Read More..</a>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    } catch (error) {
      console.error("try again failed to get poems:", error);
    }
  });
  