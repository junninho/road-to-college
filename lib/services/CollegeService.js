import collegeJSON from "../data/college.json";
import College from "../model/College.js";

class CollegeService {
  constructor(collegeDB) {
      this.db = collegeDB;
      this.colleges = collegeDB.map(function(data) {
        return new College(data);
      });

  }
  fetchAll() {
      return this.colleges;
  }

  fetchById(id) {
      var college = null;
      this.colleges.forEach(function(potentialCollege){
        if(id === potentialCollege.id) {
          college = potentialCollege;
        }
      });
      return college;
  }
}

export default new CollegeService(collegeJSON);
