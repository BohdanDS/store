import React from 'react';

const Menu = () => {

    const menu = {
        category1: [
            "item1",
            "item2",
            "item3",
            "item3",
            "item3",
            {subC:['subI1', 'subI2']}
        ],
        category2: ["item4", "item5"],
        category3: ["item6", "item7"],
        category4: ["str"],
    };

    const myRecursion = (menu: any) => {
        const objKeys = Object.keys(menu);
        for (let i = 0; i < objKeys.length; i++) {
            if (typeof menu[objKeys[i]] === "object") {
                console.log('Category:', objKeys[i])
                myRecursion(menu[objKeys[i]]);
            } else {
                console.log('Item: ', menu[objKeys[i]])
            }
        }
    };
    myRecursion(menu)

    return (
        <div>

        </div>
    )
        ;
};

export default Menu;