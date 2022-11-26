<h1>yourweathernow</h1>

<h3>Live at: https://kmsutula.github.io/YourWeatherNow/</h3>

<h2>📋 Summary:</h2> 
<p>A quiz application that pulls trivia questions/answers from the Open Trivia Database API and provides a score based on performance. 
Game options like number of questions, difficulty, and category are customizable by the user. The design is based on an 80s video game, drawing on this theme with on neon colors and pixelated text and elements. The site was built mobile-first.</p>



<h2>⚒️ Built with:</h2>
<ul>
<li>HTML 5</li>
<li>CSS 3</li>
<li>TypeScript</li>
<li>Angular</li>
<li>API(<a href="https://openweathermap.org/api">OpenWeather</a> & <a href="https://developers.google.com/maps/documentation/places/web-service/autocomplete">Google Places API</a>)</li>
</ul>

<h2>🚧 Obstacles/What I Learned:</h2>
<p>This project was my first application built with Angular, and gave me a chance to discover many of its features. Notably, I learned about the power of Injectables and passing data between components using Input and Output. I also had a chance to learn about transitions in Angular by creating a custom trigger. My biggest obstacles with Angular were deciding where I should do the fetching/transformation/assignment of data(child or parent), and determining how the handling of data affected the transition of DOM elements on enter and leave. Intially, I used "remove()" to remove each weather widget from the page on click, but this prevented my transition from triggering and kept the deleted data the array. This was fixed by splicing the removed element out of the data array, which fixed both problems.</p> <p>This project also greatly expanded my understanding of TypeScript, as I utilized custom types and constructor functions. I spent more time using class based components than I have in my use of React. </p>

<h2>📸 Screenshots:</h2>
<img src="https://res.cloudinary.com/de8tjvy2h/image/upload/v1669417944/Github%20Pages/YourWeatherNow.png">

