document.addEventListener('DOMContentLoaded', function () {

    const apiUrl = 'http://localhost:3000/news';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = ''; // Clear any existing content

            data.articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';

                const newsTitle = document.createElement('h2');
                newsTitle.textContent = article.title;

                const newsLink = document.createElement('a');
                newsLink.href = article.url;
                
                newsLink.textContent = 'Read more';
                newsLink.target = '_blank';

                const newsDescription = document.createElement('p');
                newsDescription.textContent = article.description;

                newsItem.appendChild(newsTitle);
                newsItem.appendChild(newsDescription);
                newsItem.appendChild(newsLink);

                newsList.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});
