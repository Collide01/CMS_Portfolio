const template = document.createElement("template");
template.innerHTML = `
<style>
  #contact {
    margin-top: 2vh;
    padding-bottom: 1vh;
    background-color: lightblue;
    color: black;
    text-align: center;
    border-top: 3px solid black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .contactinfo {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
  }
  .contactinfo > p a {
   display: block;
   text-align: center;
   padding: 14px 16px;
   background-color: #000055;
   text-decoration: none;
  }
  .contactinfo > p > a:link, a:visited {
    color: white;
  }
  .contactinfo > p > a:focus {
    color: white;
    background-color: #000033;
  }
  .contactinfo > p > a:hover {
    color: white;
    background-color: #000033;
  }
  .contactinfo > p > a:active {
    color: white;
    background-color: #000033;
  }
  </style>
  
  <footer id="contact">
    <h1>Contact</h1>
    <div class="contactinfo">
      <p><a href="mailto:cstrauch01@gmail.com">Email</a></p>
      <p><a href="https://www.linkedin.com/in/collin-strauch/" target=”_blank”>LinkedIn</a></p>
      <p><a href="Collin.Strauch Resume.pdf" target=”_blank”>Resume</a></p>
    </div>
    <h2></h2>
  </footer>
`;

class AppFooter extends HTMLElement{
    constructor(){
      super();
      // 1 - attach a shadow DOM tree to this instance - this creates `.shadowRoot` for us
      this.attachShadow({mode: "open"});

      // 2 - Clone `template` and append it
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // grab the attribute values, and assign a default value if necessary
      const year = this.getAttribute('data-year') ? this.getAttribute('data-year') : "1995";

      this.shadowRoot.querySelector("h2").innerHTML = `&copy; Copyright ${year}, Collin Strauch`;
    }
  } 
	
  customElements.define('app-footer', AppFooter);