Page({
    data: {
        name: "Prm612",
        age: 22,
        students: [
            { id: 110, name: 'kobe', age: 22 },
            { id: 120, name: 'james', age: 26 },
            { id: 130, name: 'why', age: 18 },
            { id: 140, name: 'honey', age: 30 },
        ],
        counter: 0
    },
    handleBtnClick() {
        // console.log("按钮被点击");
        let that = this;
        that.setData({
            counter: that.data.counter + 1
        })
    },
    handleSubtraction() {
        // console.log("按钮被点击");
        let that = this;
        that.setData({
            counter: that.data.counter - 1
        })
    }
})