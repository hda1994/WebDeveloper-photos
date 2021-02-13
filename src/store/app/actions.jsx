export const ACTION_CHANGE_CHOOSE_FABRIC = 'ACTION_CHANGE_CHOOSE_FABRIC';
export const ACTION_LOAD_ALL_FABRICS = 'ACTION_LOAD_ALL_FABRICS';
export const ACTION_PUT_ALL_FABRICS = 'ACTION_PUT_ALL_FABRICS';
export const ACTION_CHANGE_ACTIVE_FIRST_TAB = 'ACTION_CHANGE_ACTIVE_FIRST_TAB';
export const ACTION_CHANGE_ACTIVE_SECOND_TAB = 'ACTION_CHANGE_ACTIVE_SECOND_TAB';


export const changeChooseFabric = (newChooseFabric: any) => {
    return {
        type: ACTION_CHANGE_CHOOSE_FABRIC,
        payload: newChooseFabric
    };
};

export const loadAllFabrics = () => {
    return {
        type: ACTION_LOAD_ALL_FABRICS
    };
};

export const putAllFabrics = (data: any) => {
    return {
        type: ACTION_PUT_ALL_FABRICS,
        payload: data
    };
};

export const changeActiveFirstTab = (tab: any) => {
    return {
        type: ACTION_CHANGE_ACTIVE_FIRST_TAB,
        payload: tab
    };
};
export const changeActiveSecondTab = (tab: any) => {
    return {
        type: ACTION_CHANGE_ACTIVE_SECOND_TAB,
        payload: tab
    };
};