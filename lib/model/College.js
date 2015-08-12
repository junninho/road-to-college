export default class College {

    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.logo = data.logo;
        this.location = data.location;
        this.youVisitUrl = data.youVisitUrl;
        this.hasTourLink = !!data.youVisitUrl;
        this.description = data.description;
        this.costs = data.costs;
        this.hasCommonApp = !!data.commonApp;
        this.applicationDeadline = new Date(data.applicationDeadline);
        this.financialAidDeadline = new Date(data.financialAidDeadline);
        this.averageSAT = data.averageSAT;
        this.schoolSize = data.schoolSize;
        this.schoolSetting = data.schoolSetting;
        this.hasOnCampusHousing = !!data.onCampusHousing;
    }

    hasApplicationDeadlinePassed() {
        return new Date() > this.applicationDeadline;
    }


    hasFinancialAidDeadlinePassed() {
        return new Date() > this.financialAidDeadline;
    }

}

