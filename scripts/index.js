import projects from "./projects.js";

document.body.addEventListener("click", (e) => {
  if (e.target.id === "ham-btn" || e.target.id === "nav-drawer-close-btn") {
    document.querySelector("#nav-drawer").classList.toggle("hidden");
  }
});

const getCardContents = (arr) => {
  let html = "";

  arr.forEach((project) => {
    html += `
    <div class="card card--projects">
      <div class="card-left">
        <div class="card-inner">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="tags">
            <ul class="flex tags-ul">
              <li class="tag">HTML</li>
              <li class="tag">CSS</li>
              <li class="tag">JS</li>
              <li class="tag">Firebase</li>
            </ul>
          </div>
          <div class="project-links__container flex">
            <a
              href="${project.link}"
              class="btn btn--primary"
              target="_blank"
              >View Project</a
            >
            <a
              href="${project.github}"
              class="btn btn--alt"
              target="_blank"
              >View GitHub</a
            >
          </div>
        </div>
      </div>
      <div class="card-right">
        <img
          class="project-img"
          src="${project.thumbnail}"
          alt=""
        />
      </div>
    </div>
    `;
  });

  renderProjects(html);
};

const renderProjects = (html) => {
  document.querySelector("#projects__list").innerHTML = html;
};

getCardContents(projects);

const renderCopyright = () => {
  document.querySelector(
    "#copyright"
  ).innerHTML = `<p>&copy ${new Date().getFullYear()} Matt Colen. All Rights Reserved `;
};

renderCopyright();
