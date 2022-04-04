export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.add('show-right');
      section.classList.remove('ativo');
    });
    tabcontent[index].classList.add('ativo');
  }

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('show-right');
    tabcontent[0].classList.add('ativo');

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
