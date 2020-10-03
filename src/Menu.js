const Menu = (() => {
    const drinks = [
        "Espresso £2.80",
        "Macchiato £2.80",
        "Filter coffee £2.80",
        "Americano £2.80",
        "Long black £2.80",
        "Cortado £2.80",
        "Cappuccino £2.80",
        "Latte £2.80",
        "Flat white £3.30",
        "Teafrom £2.50",
        "Hot chocolate £3.00",
        "Mocha £3.80",
        "Matcha latte £2.80",
    ];

    const food = [
        {
            name: "JUICY LUCY",
            summary:
                "beef short rib blend stuffed with pimento cheese, caramelized onion,  bibb lettuce, tomato, spicy pickles, special sauce, on sesame bun",
        },
        {
            name: "BLUICY",
            summary:
                "Beef short rib blend stuffed with crumbled blue cheese; red onion, arugula, tomato, pickles, special sauce, on sesame bun",
        },
        {
            name: "WHITMANS CLASSIC",
            summary:
                "beef short rib blend patty, seared onion, bibb lettuce, tomato, new pickles, special sauce on potato bun",
        },
        {
            name: "THE HOUND",
            summary:
                "applewood smoked bacon infused patty, arugula, smoked gruyere, potato crips on potato bun",
        },
    ];

    let menu_sidebar = () => {
        let main = document.querySelector(".main-page");
        let h1 = document.createElement("h1");
        let menu = document.createElement("div");
        h1.classList.add("browser");
        menu.classList.add("menu");
        h1.innerHTML = "Browse Our Menu";
        main.appendChild(h1);
        main.appendChild(menu);
    };

    let sidebar = () => {
        let menu = document.querySelector(".menu");
        let side = document.createElement("div");
        side.classList.add("sidebar");
        menu.appendChild(side);
    };

    let make_drinks = () => {
        let side = document.querySelector(".sidebar");
        let ul = document.createElement("ul");
        ul.classList.add("drinks");
        side.appendChild(ul);
        for (let i of drinks) {
            let li = document.createElement("li");
            li.innerHTML = i;
            ul.appendChild(li);
        }
    };

    let make_menu = () => {
        let menu = document.querySelector(".menu");
        let main_menu = document.createElement("div");
        main_menu.classList.add("drinks");
        menu.appendChild(main_menu);
        for (let i of food) {
            let item = document.createElement("div");
            item.classList.add("item-menu");
            main_menu.appendChild(item);
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            h3.innerHTML = i.name;
            p.innerHTML = i.summary;
            item.appendChild(h3);
            item.appendChild(p);
        }
    };

    let main = () => {
        menu_sidebar();
        sidebar();
        make_drinks();
        make_menu();
    };
    return { main };
})();

let menu = () => {
    Menu.main();
};

export default menu;
