!DOCTYPE html>
<html>
  <head>
    <title>My Homepage</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>Welcome to My Homepage</h1>
      <nav>
        <ul>
          <li><a href="about">About</a></li>
          <li><a href="palvelut">Services</a></li>
          <li><a href="yhteystiedot">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Here's some information about me and what I do.</p>
      </section>
      
      <section id="palvelut">
        <h2>My Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      
      <section id="yhteystiedot">
        <h2>Contact Me</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"><br>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br>
          
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea><br>
          
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 My Homepage</p>
    </footer>
  </body>
</html>
