import jsonfile from "jsonfile";
import moment from "moment";

const path = "./data.json";
let date = moment().format();

const data = {
    date: date,
};

jsonfile.writeFile(path, data);