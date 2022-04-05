import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus,events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define touchstart e click como padrao
    // caso o usuario não defina
    this.activeClass = 'active'
    if(events === undefined)
    {
      this.events = ['touchstart', 'click']
    } else {
      this.events = events
    }

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }
  
  // Ativa o dropdownmenu e adiciona a função 
  // que observa clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdown menu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init(){
    if(this.dropdownMenus.length) {
      this.addDropDownMenusEvent()
    }

    return this
  }
  
}
