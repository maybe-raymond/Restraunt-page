const Home = (() => {
  let name = "Hartig Gastrobar";
  let details = "High-end chain for prime beef & seafood";
  let details_2 = "Steakhouse  Nob Hill  $$$";
  let description =
    "These links of a national chain provide a classic steakhouse experience perfectly cooked chops, welcoming service, clubby atmospherics that works for both date night or business dining; no kidding, its a high-end experience with a guaranteed big bill at the finish, but most agree you cant go wrong here";

  const content = () => {
    let main = document.querySelector(".main-page");
    let content = document.createElement("div");
    content.classList.add("content");
    main.appendChild(content);
    let info = document.createElement("div");
    info.classList.add("info");
    content.appendChild(info);
    return info;
  };

  const Rest_info = (info) => {
    let head = document.createElement("h3");
    let sub1 = document.createElement("p");
    let sub2 = document.createElement("p");
    let desc = document.createElement("p");
    head.id = "info-name";
    sub1.id = "info-details";
    sub2.id = "info-details_2";
    desc.id = "description";
    head.innerHTML = name;
    sub1.innerHTML = details;
    sub2.innerHTML = details_2;
    desc.innerHTML = description;
    info.appendChild(head);
    info.appendChild(sub1);
    info.appendChild(sub2);
    info.appendChild(desc);
  };

  const put = () => {
    Rest_info(content());
  };
  return { put };
})();

const navbar = (() => {
  let list = ["home", "Menu", "Delivery and Pick-up", "About us"];

  let Create_div_class = () => {
    let element = document.createElement("div");
    element.classList.add("navbar");
    document.body.appendChild(element);
    return element;
  };
  let Create_list = (element) => {
    let ul = document.createElement("ul");
    element.appendChild(ul);
    for (let i of list) {
      let li = document.createElement("li");
      if (i === "About us") {
        li.classList.add("end");
      } else if (i === "home") {
        li.id = "line";
      }
      li.innerHTML = i;
      ul.appendChild(li);
    }
  };

  let create_nav = () => {
    Create_list(Create_div_class());
  };
  return { create_nav };
})();

const front = (() => {
  let head =
    "we are open 7 days a week! you can walk in with us, Reservations are not requried";

  let create_main = () => {
    let main = document.createElement("div");
    main.classList.add("main-page");
    document.body.appendChild(main);
  };

  const createFront = () => {
    let main = document.querySelector(".main-page");
    let element = document.createElement("div");
    element.classList.add("front");
    main.appendChild(element);
    return element;
  };

  const createContent = (element) => {
    let h1 = document.createElement("h1");
    h1.innerHTML = "Hartig Gastrobar";
    let p = document.createElement("p");
    p.innerHTML = head;
    p.id = "top-special";
    element.appendChild(h1);
    element.appendChild(p);
  };

  const front_screen = () => {
    createContent(createFront());
  };

  return { front_screen, create_main };
})();

let home = () => {
  navbar.create_nav();
  front.create_main();
  front.front_screen();
  Home.put();
};

let page = () => {
  front.front_screen();
  Home.put();
};

export { home, page };
