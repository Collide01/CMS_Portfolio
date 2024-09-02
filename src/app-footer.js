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
  
  #fcf-form {
    display:block;
}

.fcf-body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: black;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
    max-width: 70%;
}

.fcf-form-group {
    margin-bottom: 1rem;
}

.fcf-input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
}

.fcf-form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    outline: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.fcf-form-control:focus {
    border: 1px solid #313131;
}

select.fcf-form-control[size], select.fcf-form-control[multiple] {
    height: auto;
}

textarea.fcf-form-control {
    font-family: -apple-system, Arial, sans-serif;
    height: auto;
}

label.fcf-label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.fcf-credit {
    padding-top: 10px;
    font-size: 0.9rem;
    color: #545b62;
}

.fcf-credit a {
    color: #545b62;
    text-decoration: underline;
}

.fcf-credit a:hover {
    color: #0056b3;
    text-decoration: underline;
}

.fcf-btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .fcf-btn {
        transition: none;
    }
}

.fcf-btn:hover {
    color: #212529;
    text-decoration: none;
}

.fcf-btn:focus, .fcf-btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.fcf-btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.fcf-btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
}

.fcf-btn-primary:focus, .fcf-btn-primary.focus {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.fcf-btn-lg, .fcf-btn-group-lg>.fcf-btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
}

.fcf-btn-block {
    display: block;
    width: 100%;
}

.fcf-btn-block+.fcf-btn-block {
    margin-top: 0.5rem;
}

input[type="submit"].fcf-btn-block, input[type="reset"].fcf-btn-block, input[type="button"].fcf-btn-block {
    width: 100%;
}
  </style>
  <footer id="contact">
    <div class="contactinfo">
      <p><a href="https://github.com/Collide01" target=”_blank”>GitHub</a></p>
      <p><a href="https://www.linkedin.com/in/collin-strauch/" target=”_blank”>LinkedIn</a></p>
      <p><a href="Collin.Strauch Resume.pdf" target=”_blank”>Resume</a></p>
    </div>

    <h1>Contact</h1>

    <div class="fcf-body">
      <div id="fcf-form">
        <form id="fcf-form-id" class="fcf-form-class" method="post" action="src/contact-form-process.php">
  
          <div class="fcf-form-group">
              <label for="Name" class="fcf-label">Your name</label>
              <div class="fcf-input-group">
                  <input type="text" id="Name" name="Name" class="fcf-form-control" required>
              </div>
          </div>
          <div class="fcf-form-group">
              <label for="Email" class="fcf-label">Your email address</label>
              <div class="fcf-input-group">
                  <input type="email" id="Email" name="Email" class="fcf-form-control" required>
              </div>
          </div>
          <div class="fcf-form-group">
              <label for="Message" class="fcf-label">Your message</label>
              <div class="fcf-input-group">
                  <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
              </div>
          </div>
          <div class="fcf-form-group">
              <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
          </div>
          <div class="fcf-credit" id="fcf-credit">
          Simple HTML email form provided by <a href="https://www.majesticform.com" target="_blank">MajesticForm</a>
          </div>
        </form>
      </div>
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
      const text = this.getAttribute('data-text') ? this.getAttribute('data-text') : "Nobody";

      this.shadowRoot.querySelector("h2").innerHTML = `&copy; Copyright ${year}, Collin Strauch`;
    }
  } 
	
  customElements.define('app-footer', AppFooter);