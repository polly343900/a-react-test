
import * as ACT from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case ACT.UPDATE_LIST:
            state = state.concat(action.list.items_onsale_get_response.items.item);
            return state;
        default:
            return state;
    }
}