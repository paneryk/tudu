import moment from "moment";
import { userData } from "./userdata";

export class Dashboard {
  userid;
  username;
  avatarUrl;
  tasks;
  tags;
  todayDate;

  constructor() {
    this.todayDate = this._getTodayDate();
    this._requestLocalStorage();
  }

  _getTodayDate() {
    return moment().format("YYYY MM DD");
  }

  _requestLocalStorage() {
    if (!!localStorage.getItem("tuduLocalData"))
      this._getUserData(JSON.parse(localStorage.getItem("tuduLocalData")));
    else {
      this._getUserData(userData);
      localStorage.setItem("tuduLocalData", JSON.stringify(userData));
    }
  }

  _getUserData(data) {
    this.userid = data.userid;
    this.username = data.username;
    this.avatarUrl = data.avatarUrl;
    this.tasks = data.tasks;
    this.tags = data.tags;
  }
}
