import Enum from "./Enum";

const RoleType = {
    admin: new Enum("Administrator"),
    moderator: new Enum("Moderator"),
    analyst: new Enum("Analyst"),
    user: new Enum("User"),
    sdmMember: new Enum("SDM member")
};
export default RoleType;
