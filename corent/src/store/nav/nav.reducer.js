import navdata from "../../mock/navdata";
import {
    GET_NAV_TOP,
    REMOVE_NAV_TOP
} from "../action.type"
const defaultState = {
    navdata,
    selectedNavData: []
}
const nav = (state = defaultState, action) => {
    // console.log(action)
    switch (action.type) {
        case GET_NAV_TOP:
           {
            let { path, name } = action;
            let { selectedNavData } = state;
            let index=selectedNavData.findIndex(item=>item.path===path);
            if(index!==-1){
                let target=selectedNavData[index];
                selectedNavData.splice(index,1);
                selectedNavData.unshift(target);
            }else{
                selectedNavData.unshift({
                    path,
                    name
                })
            }
            return {
                ...state,
                selectedNavData: [...selectedNavData]
            }
           }
            case REMOVE_NAV_TOP:
                {
                    let {path} =action;
                    let { selectedNavData } = state;
                    let index=selectedNavData.findIndex(item=>item.path===path);
                    selectedNavData.splice(index,1);
                    return{
                        ...state,
                        selectedNavData: [...selectedNavData]
                    }
                }
        default:
            return state
    }

}
export default nav;