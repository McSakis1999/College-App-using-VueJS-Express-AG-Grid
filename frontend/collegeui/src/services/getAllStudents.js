import api from "./api";

export default{
    getStudents(){
        return api().get('get-students')
    }
}