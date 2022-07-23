// ******** Create Data object********

const project = [
  {
    id: 1,
    img: './Images/SnapshootPortfolio.png',
    img_desktop: './Images/SnapshootPortfolio-desktop1.png',
    title: 'Tonic',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class1: '',
    class2: 'hide',
  },
  {
    id: 2,
    img: './Images/SnapshootPortfolio1.png',
    img_desktop: './Images/SnapshootPortfolio-desktop2.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class1: 'hide',
    class2: '',

  },
  {
    id: 3,
    img: './Images/SnapshootPortfolio2.png',
    img_desktop: './Images/SnapshootPortfolio-desktop3.png',
    title: 'Tonic',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class1: '',
    class2: 'hide',

  },
  {
    id: 4,
    img: './Images/SnapshootPortfolio3.png',
    img_desktop: './Images/SnapshootPortfolio-desktop4.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    class1: 'hide',
    class2: '',

  },
];

const workSection = document.querySelector('.works-container');

project.forEach((work) => {
  const cards = document.createElement('div');
  cards.classList.add('cards');
  cards.innerHTML = `
  <div class="card">
      <img src=${work.img} class="img1">
      <img src=${work.img_desktop} class="img2 ${work.class1}">
      <img src=${work.img} class="img3 ${work.class1}">

    <div>
      <h2>${work.title}</h2>
      <ol class="card-skill-1">
        <li>CANOPY</li>
      </ol>

      <ol class="card-skill-2">
        <li><img src="./Images/Counter.png" alt="Counter"></li>
        <li>Back End Dev</li>
      </ol>

      <ol class="card-skill-2">
        <li><img src="./Images/Counter.png" alt="Counter"></li>
        <li>2015</li>
      </ol>

      <p>${work.supportingText}</p>
      <ul class="tech-skills">
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
        <button type="button" onclick="popup(id)" id=${project.indexOf(work)}>see project</button>
      </div>
      <img src=${work.img_desktop} class="img2 ${work.class2}">
      <img src=${work.img} class="img3 ${work.class2}">

    </div>
  `;

  workSection.appendChild(cards);
});

// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
/* eslint-disable */
const popup_container = document.getElementById('popup');

function popup(id) {
  popup_container.innerHTML = `
   
  <div class="bg-modal">
    <div class="modal-contents">

      <div class="close">+</div>
      <div class="modal-grid">
        <h2>Tonic</h2>
        <div class="modal-card-skills">

          <ol class="card-skill-1">
            <li>CANOPY</li>
          </ol>

          <ol class="card-skill-2">
            <li><img src="./Images/Counter.png" alt="Counter"></li>
            <li>Back End Dev</li>
          </ol>

          <ol class="card-skill-2">
            <li><img src="./Images/Counter.png" alt="Counter"></li>
            <li>2015</li>
          </ol>

        </div>

        <div class="popup-img">
          <img src=${project[id].img} class="img1">
          <img src=${project[id].img_desktop} class="img2">
        </div>

        <p>${project[id].supportingText}</p>

        <ul class="tech-skills">
          <li>html</li>
          <li>css</li>
          <li>javaScript</li>
        </ul>

        <div class="divider"></div>

        <div class="popup-btn">
          <button class="btn2" type="button"><img src="./Images/Vector6.png" alt="vector6">See
            Project</button>
          <button class="btn2" type="button"><img src="./Images/Vector4.png" alt="vector4">See
            Project</button>
        </div>


      </div>
    </div>
  </div>

  `;
  document.querySelector('.close').addEventListener('click', () => {
    popup_container.innerHTML = '';
  });
}
