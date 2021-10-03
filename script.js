const roomFee = Number(prompt(`Nhập tiền thuê trọ`));
const electric = Number(prompt(`Nhập tiền điện`));
const water = Number(prompt(`Nhập tiền nước`));
const bikes = Number(prompt(`Nhập số lượng xe`));
const garbage = 30;
const internet = 260;
const memHomes = ["Lam", "Luan", "Huy", "Bao", "Thanh"];
function calcRoomFee(money) {
    return money / memHomes.length;
}
function calcElectric(name, money) {
    if (name !== "Lam") return (money * 0.5) / (memHomes.length - 1);
    else return money * 0.5;
}
function calcWater(name, money) {
    if (name !== "Lam") return 0;
    else return money;
}
function calcBikes(number) {
    return (number * 150) / memHomes.length;
}
function calcGarbage(money) {
    return money / memHomes.length;
}
function calcInternet(money) {
    return money / memHomes.length;
}
function showMoneyMember(arr, room, electric, water, bikes, garbage, internet) {
    for (let i = 0; i < arr.length; i++) {
        let money =
            calcRoomFee(room) +
            calcElectric(arr[i], electric) +
            calcWater(arr[i], water) +
            calcBikes(bikes) +
            calcGarbage(garbage) +
            calcInternet(internet);
        console.log(`${arr[i]} : ${money.toFixed(0)}`);
    }
}
showMoneyMember(memHomes, roomFee, electric, water, bikes, garbage, internet);
