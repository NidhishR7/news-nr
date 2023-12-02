const apiKey = '6a786bc59c92415a9689a5e5f6409ea9';
const newsArticles = document.getElementById('newsArticles');
const backToTopBtn = document.getElementById('backToTopBtn');
// Fetch news data from News API
fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    displayNews(data.articles);
  })
  .catch(error => {
    console.error('Error fetching news:', error);
  });

// Function to display news articles
function displayNews(articles) {
  newsArticles.innerHTML = ''; // Clear previous content

  articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const { title, description, url, urlToImage } = article;

    const articleContent = `
      <h2>${title}</h2>
      <img src="${urlToImage}" alt="${title}" />
      <p>${description}</p>
      <a href="${url}" target="_blank">Read more</a>
    `;

    articleDiv.innerHTML = articleContent;
    newsArticles.appendChild(articleDiv);
  });
 backToTopBtn.style.display = 'block';
}

// Scroll to top when back to top button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});