import {
    ACTION_CHANGE_ACTIVE_FIRST_TAB,
    ACTION_CHANGE_ACTIVE_SECOND_TAB,
    ACTION_CHANGE_CHOOSE_FABRIC,
    ACTION_PUT_ALL_FABRICS
} from "./actions";


const initialState = {
    firstTabs: [
        {
            id: 1,
            name: 'Дизайн'
        },
        {
            id: 2,
            name: 'Детали'
        },
        {
            id: 3,
            name: 'Вышивка'
        },
        {
            id: 4,
            name: 'Размеры'
        }],
    activeFirstTab: {
        id: 1,
        name: 'Дизайн'
    },
    secondTabs: [
        {
            idThis: 1,
            parentId: 1,
            id: 1,
            name: 'Ткань'
        },
        {
            idThis: 2,
            parentId: 1,
            id: 2,
            name: 'Фасон'
        },
        {
            idThis: 3,
            parentId: 1,
            id: 3,
            name: 'Воротник'
        },
        {
            idThis: 4,
            parentId: 1,
            id: 4,
            name: 'Рукав'
        },
        {
            idThis: 5,
            parentId: 1,
            id: 5,
            name: 'Манжеты'
        },
        {
            idThis: 6,
            parentId: 1,
            id: 6,
            name: 'Застежки'
        },
        {
            idThis: 1,
            parentId: 2,
            id: 7,
            name: 'Элементы отделки'
        },
        {
            idThis: 2,
            parentId: 2,
            id: 8,
            name: 'Карманы'
        },
        {
            idThis: 3,
            parentId: 2,
            id: 9,
            name: 'Контрасты'
        },
        {
            idThis: 4,
            parentId: 2,
            id: 10,
            name: 'Пуговицы'
        },
        {
            idThis: 5,
            parentId: 2,
            id: 11,
            name: 'Обметка петель'
        },
        {
            idThis: 1,
            parentId: 3,
            id: 12,
            name: 'Место вышивки'
        },
        {
            idThis: 2,
            parentId: 3,
            id: 13,
            name: 'Вышивка'
        },
        {
            idThis: 3,
            parentId: 3,
            id: 14,
            name: 'Цвет вышивки'
        },
        {
            idThis: 1,
            parentId: 4,
            id: 15,
            name: 'Выбор вариантов'
        },
        {
            idThis: 2,
            parentId: 4,
            id: 16,
            name: 'Снятие мерок'
        },
        {
            idThis: 3,
            parentId: 4,
            id: 17,
            name: 'Умная мерка'
        }
        ],
    activeSecondTab: {
        idThis: 1,
        parentId: 1,
        id: 1,
        name: 'Ткань'
    },
    allFabrics: [],
    chooseFabric: null
};

const rootReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ACTION_CHANGE_CHOOSE_FABRIC:
            return { ...state, chooseFabric: action.payload };
        case ACTION_PUT_ALL_FABRICS:
            return { ...state, allFabrics: action.payload };
        case ACTION_CHANGE_ACTIVE_FIRST_TAB:
            return { ...state, activeFirstTab: action.payload};
        case ACTION_CHANGE_ACTIVE_SECOND_TAB:
            return { ...state, activeSecondTab: action.payload};
    }
    return state;
};
export default rootReducer;