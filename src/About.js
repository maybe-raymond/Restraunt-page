const About = (() => {
  let info = [
    "London Café 18 Chiltern Street W1U 7QA +44 20 7135 2040",
    "Opening Hours: Mon-Fri: 07:00-19:00 Sat-Sun: 08:00-19:00",
    "We’re open – Monocle’s summer menu has arrived. Pop in for food, coffee and cocktails. Plus: all of our latest print releases.",
  ];

  let create_main_about = () => {
    let main = document.querySelector(".main-page");
    let about = document.createElement("div");
    let address = document.createElement("div");
    about.classList.add("about");
    address.classList.add("adress");
    main.appendChild(about);
    about.appendChild(address);
    return address;
  };

  let create_info = (address) => {
    for (let i of info) {
      let p = document.createElement("p");
      p.innerHTML = i;
      address.appendChild(p);
    }
  };

  let main = () => {
    create_info(create_main_about());
  };

  return { main };
})();

let about = () => {
  About.main();
};

export default about;
