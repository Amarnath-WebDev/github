import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const date = moment().subtract(5, 'd').format();

const markCommit = (x, y) => {
    const date = moment()
    .subtract(1, 'y')
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

const data = {
    date: date,
};

jsonfile.writeFile(path, data,()=>{
    simpleGit().add([path]).commit(date,{'--date': date}).push();
   });
};

const makeCommit = (n) => {
    if(n===0) return simpleGit.push()
    const x = random.default.int(0, 54);
    const y = random.default.int(0, 7);
    const date = moment().subtract(1, y).add(1, "d").add(x,"w").add(y,"d").format();
    
    const data = {
        date: date,
    };

    jsonfile.writeFile(path, data,()=>{
        simpleGit().add([path]).commit(date,{'--date': date},makeCommit.bind(this,--n));
    });
};

const makeCommits = (n) => {

    const data = {
        date: date,
    };
    console.log(data);
    jsonfile.writeFile(path, data,()=>{
        simpleGit().add([path]).commit(date,{'--date': date},makeCommits.bind(this,--n));
    });
};
makeCommits(100);