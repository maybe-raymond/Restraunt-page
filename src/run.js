import {home, page}  from "./home.js"
import menu from "./Menu.js"
import delivery from "./Delivery.js"
import about from "./About.js"

const Run = ( () => {

  let init = () =>{
        home()
  }


  let line = (li) => {
    let id = document.querySelector("#line");
    id.removeAttribute("id");
    li.id = "line"
  }


  let destroy_info = () => {
      let main = document.querySelector(".main-page");

      while (main.lastElementChild){
        main.removeChild(main.lastElementChild);
      }
    }

  let get_list = () => {
      let nav_list = document.querySelectorAll("li");
      return nav_list
  }

  let go_home = (item) => {
      item.addEventListener("click", () => {
        line(item)
        destroy_info()
        page();
      })}

  let go_Menu = (item) => {
    item.addEventListener("click", () => {
      line(item)
      destroy_info()
      menu()
    })}

  let go_delivery = (item) => {
    item.addEventListener("click", () => {
      line(item)
      destroy_info()
      delivery()
    });
  }

  let go_about = (item) => {
    item.addEventListener("click", () => {
      line(item)
      destroy_info()
      about()
    });
  }

  let main = () => {
    init();
    go_home(get_list()[0])
    go_Menu(get_list()[1])
    go_delivery(get_list()[2])
    go_about(get_list()[3])
  }

  return { main }

})()

let run  = () => {
  Run.main()
}

export default run
