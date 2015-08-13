import React from "react";
import Service from "../../services/CollegeService";

export default class CollegePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { college: null };
    }

    componentDidMount() {
        var collegeId = this.props.params.collegeId
        if (collegeId) {
            this.updateCollege(collegeId);
        }
    }

    componentWillReceiveProps(nextProps) {
        var collegeId = nextProps.params.collegeId;
        if (collegeId && collegeId !== this.props.params.collegeId) {
            this.updateCollege(collegeId);
        }
    }

    updateCollege(collegeId) {
        var college = Service.fetchById(collegeId);
        this.setState({ college });
    }

    render() {
        var college = this.state.college;
        if (!college) {
            return <p>Sorry, no college found</p>;
        }

        var deadlineMessage;
        if(college.hasApplicationDeadlinePassed()){
            deadlineMessage = <span className="deadline-msg alert">I guess I am NOT going here!</span>;
        } else {
            deadlineMessage = <span className="deadline-msg">Applications are still being accepted.</span>;
        }

        return (
            <div className="college-page">
                <h1>{college.title}</h1>
                <p>{college.location}</p>
                <img src={college.logo}/>
                <b>{deadlineMessage}</b>
                <p className="description">{college.description}</p>
                <p><b>Cost:</b> {college.costs}</p>
                <p><b>Common App?:</b> {college.commonApp}</p>
                <p><b>Application Deadline:</b> {this.dateString(college.applicationDeadline)}</p>
                <p><b>Financial Aid Deadline:</b> {this.dateString(college.financialAidDeadline)}</p>
                <p><b>Average SAT Score:</b> {college.averageSAT}</p>
                <p><b>School Size:</b> {college.schoolSize}</p>
                <p><b>School Setting:</b> {college.schoolSetting}</p>
            </div>
        );
    }

    dateString(date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return (monthIndex + 1) + "/" + day + "/" + year;
    }
}
