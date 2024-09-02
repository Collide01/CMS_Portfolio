const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
<style>
  nav {
    background-repeat: no-repeat;
    background-size: cover;
    height: 3rem;
    color: white;
  }
  #nav-links {
    color: white;
    background-color: #7a7a7a;
  }
  img {
    max-height: 30px;
  }
  span {
    color: white;
  }
</style>
<nav class="navbar is-fixed-top has-background-grey">
    <!-- logo / page name -->
    <div class="navbar-brand">
      <a class="navbar-item" href="index.html">
        <img src="" alt="site logo">
      </a>
      <app-header data-name=" " id="header-name"></app-header>
      <a class="has-text-white-ter navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" id="nav-links">
      <div class="navbar-end">
        <a class="navbar-item has-text-white-ter" href="index.html" id="index">Home</a>
        <a class="navbar-item has-text-white-ter" href="personal.html" id="personal">Personal Projects</a>
        <a class="navbar-item has-text-white-ter" href="projects.html" id="projects">Class Projects</a>
        <a class="navbar-item has-text-white-ter" href="game-jams.html" id="gameJams">Game Jams</a>
      </div>
    </div>
</nav>
`;

class AppNavbar extends HTMLElement{
    constructor(){
      super();
      // 1 - attach a shadow DOM tree to this instance - this creates `.shadowRoot` for us
      this.attachShadow({mode: "open"});

      // 2 - Clone `template` and append it
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // grab the attribute values, and assign a default value if necessary
      const name = this.getAttribute('data-name') ? this.getAttribute('data-name') : "Unknown";
      const projectPage = this.getAttribute('data-projectPage') ? this.getAttribute('data-projectPage') : false;

      this.burger = this.shadowRoot.querySelector("#burger");
      this.navbarMenu = this.shadowRoot.querySelector("#nav-links");

      // Change the link paths depending on the page
      if (!projectPage) {
        this.shadowRoot.querySelector(".navbar-brand").innerHTML = `
          <a class="navbar-item" href="index.html">
            <img src="./media/logo.png" alt="site logo">
          </a>
          <app-header data-name=" " id="header-name"></app-header>
          <a class="has-text-white-ter navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        `;
        this.shadowRoot.querySelector(".navbar-end").innerHTML = `
          <a class="navbar-item has-text-white-ter" href="index.html" id="index">Home</a>
          <a class="navbar-item has-text-white-ter" href="personal.html" id="personal">Personal Projects</a>
          <a class="navbar-item has-text-white-ter" href="projects.html" id="projects">Class Projects</a>
          <a class="navbar-item has-text-white-ter" href="game-jams.html" id="gameJams">Game Jams</a>
        `;
      }
      else {
        this.shadowRoot.querySelector(".navbar-brand").innerHTML = `
          <a class="navbar-item" href="../index.html">
            <img src="../media/logo.png" alt="site logo">
          </a>
          <app-header data-name=" " id="header-name"></app-header>
          <a class="has-text-white-ter navbar-burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        `;
        this.shadowRoot.querySelector(".navbar-end").innerHTML = `
          <a class="navbar-item has-text-white-ter" href="../index.html" id="index">Home</a>
          <a class="navbar-item has-text-white-ter" href="../personal.html" id="personal">Personal Projects</a>
          <a class="navbar-item has-text-white-ter" href="../projects.html" id="projects">Class Projects</a>
          <a class="navbar-item has-text-white-ter" href="../game-jams.html" id="gameJams">Game Jams</a>
        `;
      }

      if (name == "HOME") {
        this.shadowRoot.querySelector("#index").style.backgroundColor = "#000041";
      }
      else {
        this.shadowRoot.querySelector("#index").style.backgroundColor = "#7a7a7a";
      }
      if (name == "PERSONAL") {
        this.shadowRoot.querySelector("#personal").style.backgroundColor = "#000041";
      }
      else {
        this.shadowRoot.querySelector("#personal").style.backgroundColor = "#7a7a7a";
      }
      if (name == "PROJECTS") {
        this.shadowRoot.querySelector("#projects").style.backgroundColor = "#000041";
      }
      else {
        this.shadowRoot.querySelector("#projects").style.backgroundColor = "#7a7a7a";
      }
      if (name == "GAMEJAMS") {
        this.shadowRoot.querySelector("#gameJams").style.backgroundColor = "#000041";
      }
      else {
        this.shadowRoot.querySelector("#gameJams").style.backgroundColor = "#7a7a7a";
      }
    }

    connectedCallback() {
        if (this.burger) this.burger.onclick = () => this.navbarMenu.classList.toggle("is-active");
    }

    disconnectedCallback() {
        this.burger.onclick = null;
    }
} 
	
  customElements.define('app-navbar', AppNavbar);