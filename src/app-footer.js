var template = document.createElement("template");
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
    align-items: center;
  }
  .contactinfo p a {
    display: block;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    padding: 14px 16px;
    border-radius: 14px;
    background-color: #000055;
    text-decoration: none;
  }
  .contactinfo button {
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    padding: 14px 16px;
    border-radius: 14px;
    color: white;
    background-color: #000055;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 100%;
  }
  .contactinfo p a:link, a:visited {
    color: white;
  }
  .contactinfo button:hover {
    cursor: pointer;
  }
  .contactinfo p a:focus, .contactinfo p a:hover, .contactinfo p a:active, .contactinfo button:hover {
    color: white;
    background-color: #000033;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>
  
<footer id="contact">
  <h1>Contact</h1>
  <div class="contactinfo">
    <div class="tooltip">
      <button onclick="emailButton()">
        <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
        Email
      </button>
    </div>
    <p><a href="https://www.linkedin.com/in/collin-strauch/" target=”_blank”>LinkedIn</a></p>
    <p><a href="Collin.Strauch Resume.pdf" target=”_blank”>Resume</a></p>
  </div>
  <h2></h2>
</footer>
`;

var script = document.createElement('script');
script.textContent = `
  function emailButton() {
    navigator.clipboard.writeText("cstrauch01@gmail.com");
    alert("Copied email: cstrauch01@gmail.com");
  }
`;

class AppFooter extends HTMLElement{
    constructor(){
      super();
      // 1 - attach a shadow DOM tree to this instance - this creates `.shadowRoot` for us
      this.attachShadow({mode: "open"});

      // 2 - Clone `template` and append it
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.appendChild(script);

      // grab the attribute values, and assign a default value if necessary
      const year = this.getAttribute('data-year') ? this.getAttribute('data-year') : "1995";

      this.shadowRoot.querySelector("h2").innerHTML = `&copy; Copyright ${year}, Collin Strauch`;
    }
  } 
	
  customElements.define('app-footer', AppFooter);