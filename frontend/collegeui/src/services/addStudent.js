import api from "./api";

export default{
    addStudent(data){
        return api().post('submit',data)
    }
}