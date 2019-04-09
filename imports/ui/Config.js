var Title = "keep your score !";

class Config {
    constructor(titleX) {
        this.titleX = titleX;
    }
    modTitle(dTitle) {
        return dTitle + " " + "in dynamic";
    }
}

var Players = [
    {
        _id: "1",
        name: "admin",
        score: 100
    },
    {
        _id: "2",
        name: "pugar",
        score: 10
    },
    {
        _id: "3",
        name: "doni",
        score: -20
    }
];

config1 = new Config("we show your score !")

export { Title, Players };
export default config1;