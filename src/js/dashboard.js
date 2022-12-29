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
    this._getUserData();
  }

  _getTodayDate() {
    return moment().format("YYYY MM DD");
  }

  _getUserData() {
    this.userid = userData.userid;
    this.username = userData.username;
    this.avatarUrl = userData.avatarUrl;
    this.tasks = userData.tasks;
    this.tags = userData.tags;
  }
}
