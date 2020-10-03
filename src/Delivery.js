const Delivery = (() => {
  let ask = [
    {
      title: "How does DoorDash work?",
      answer:
        "DoorDash connects you with the best nearby restaurants. Use the DoorDash website or app to browse eligible restaurants. Order and securely pay online and your food is on the way! You can even track your delivery right to your door. Getting your favorite foods delivered is",
    },
    {
      title: "how fast will I get my food?",
      answer:
        "How fast you'll get your food depends on a number of things. How far is the restaurant? How bad is traffic? Is it snowing out? The average time is approximately 40 minutes but it could be more or less. Either way,you can track where your driver is on the DoorDash website or app.",
    },
    {
      title: "What is a group order and how can I create one?",
      answer:
        "A group order allows multiple people to add items into an order at the same time. Once a group order is created through a DoorDash Account, the rest of the group doesn't need to have a DoorDash Account to use the group order link.Even better, you can pre-order up to four days in advance, which makes it great for events and meetings.",
    },
  ];

  let create_mainpage = () => {
    let main = document.querySelector(".main-page");
    return main;
  };

  let create_ask = (main) => {
    for (let i of ask) {
      let ask_div = document.createElement("div");
      ask_div.classList.add("ask");
      main.appendChild(ask_div);
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      h3.innerHTML = i.title;
      p.innerHTML = i.answer;
      ask_div.appendChild(h3);
      ask_div.appendChild(p);
    }
  };

  let main = () => {
    create_ask(create_mainpage());
  };

  return { main };
})();

let delivery = () => {
  Delivery.main();
};

export default delivery;
