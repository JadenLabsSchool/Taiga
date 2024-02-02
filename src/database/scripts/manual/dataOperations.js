const User = require("../../models/user");

async function getAverageBeans() {
    // Get data
    const userArray = await User.findAll();
    const beanArray = await userArray.map((user) => user.beans);

    // Average
    const sum = beanArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    const average = sum / beanArray.length;

    // Return
    return average;
}

getAverageBeans().then((average) => {
    console.log(`Average global bean count: ${Math.round(average)}`);
});
