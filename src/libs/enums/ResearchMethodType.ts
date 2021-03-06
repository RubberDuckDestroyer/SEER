import Enum from "./Enum";

const ResearchMethodType = {
    caseStudy: new Enum("Case study"),
    fieldObservation: new Enum("Field observation"),
    experiment: new Enum("Experiment"),
    interview: new Enum("Interview"),
    survey: new Enum("Survey")
};
export default ResearchMethodType;
