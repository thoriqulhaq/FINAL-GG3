# TOKOPEDIA PLAY CLONE (FE)

  

The objective for the mid-term project within Generasi Gigih 3.0 is to craft an interactive live shopping platform. This platform's primary purpose is to facilitate user engagement during live shopping events, providing them with opportunities to explore diverse product offerings and actively participate by sharing comments throughout the live sessions.


&nbsp;
&nbsp;
&nbsp;
&nbsp;

## - Setting Up Project -

&nbsp;
  

Clone Project (If you have not done so), preferably set up the backend first.

  

```bash
git clone https://github.com/thoriqulhaq/FINAL-GG3.git
cd FINAL-GG3/fe
```

  &nbsp;

Initialize ENV File

  

```bash
mv .env.example .env
```

  &nbsp;

Install Dependencies

  

```bash
npm install
```

  &nbsp;

Start the server

  

```bash
npm start
```

  
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;

## - Feature - 

&nbsp;

The web application consists of two main pages: the home page and the product's video detail page. 

- The home page serves as the landing page for the application, displaying a list of product's video that users can view. 
- The product's video detail page is where the product is displayed, along with the video, product sales link and comments section.

All the page development is done using ReactJS, a JavaScript library for building user interfaces. UI Library such as Ant Design is also used to help with the development of the application's user interface. The data is fetched from the backend using Axios, a promise-based HTTP client for the browser and Node.js.


  
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## - Bonus Feature -

  &nbsp;

As what already mentioned above, the objective of this project is to craft an interactive live shopping platform. Therefore, the bonus feature that I have implemented is the comments section. This section allows users to share their thoughts and opinions about the product's video that they are currently watching. The comments section is also equipped with a live chat feature, which allows users to see other users' comments in real-time.

This feature developed using Websocket, which is a computer communication protocol that provides full-duplex communication channels over a single TCP connection. By using this protocol, the comments section can be updated in real-time without the need to refresh the page.
