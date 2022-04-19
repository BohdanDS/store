import {CatalogActionType} from "./actions-types";
import {InferValueTypes} from "../../../models/common";
import * as actions from "./actions";
import {v4 as uuidv4} from 'uuid';
import {IItem} from "../../../models/catalogItems";


// const initialState: TCatalogState = {
//     'c6c43956-38ee-4ed8-bfc4-5e7d1faf8fc8': {
//         'uploadedImages': [],
//         "id": "c6c43956-38ee-4ed8-bfc4-5e7d1faf8fc8",
//         "title": "Test",
//         "description": "TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
//         "cost": 81,
//         "available": true,
//         "added_date": "5/7/2018",
//         "maker": "ZooParadise",
//         "category": [],
//         "subcategory": "Фильрация",
//         'rating': 3.8,
//         'comment': {}
//     },
//     'e474c35a-17db-4d9f-be53-863a63a683fd': {
//         'uploadedImages': [],
//         "id": "e474c35a-17db-4d9f-be53-863a63a683fd",
//         "title": "eget rutrum at lorem",
//         "description": "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
//         "cost": 19,
//         "available": true,
//         "added_date": "5/28/2018",
//         "maker": "ZooParadise",
//         "category": [],
//         "subcategory": "Поилки, кормушки",
//         'rating': 4.3,
//         'comment': {}
//     },
//     '37853343-a4ee-451e-add1-ed32bc2a9270':
//         {
//             'uploadedImages': [],
//             "id": "37853343-a4ee-451e-add1-ed32bc2a9270",
//             "title": "sapien varius ut blandit non interdum in ante",
//             "description": "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus",
//             "cost": 16,
//             "available": true,
//             "added_date": "4/23/2018",
//             "maker": "RoyalConin",
//             "category": [],
//             "subcategory": "Витамины",
//             'rating': 4,
//             'comment': {}
//         },
//     'efdfb6fe-d77f-4ae7-a30e-ce17f2848125':
//         {
//             'uploadedImages': [],
//             "id": "efdfb6fe-d77f-4ae7-a30e-ce17f2848125",
//             "title": "sapien ut nunc vestibulum ante ipsum primis",
//             "description": "quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
//             "cost": 89,
//             "available": true,
//             "added_date": "7/12/2017",
//             "maker": "Дружок",
//             "category": [],
//             "subcategory": "Консервы",
//             'rating': 3,
//             'comment': {}
//         },
//     '60a09064-57b4-4725-9e45-c9f70c81dbfc':
//         {
//             'uploadedImages': [],
//             "id": "60a09064-57b4-4725-9e45-c9f70c81dbfc",
//             "title": "ante vestibulum ante ipsum primis in",
//             "description": "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere",
//             "cost": 75,
//             "available": true,
//             "added_date": "6/20/2018",
//             "maker": "Рога и копыта",
//             "category": [],
//             "subcategory": "Сухой корм",
//             'rating': 4.9,
//             'comment': {}
//         },
//     '322621f3-1376-4970-ad44-9b78399beb8b':
//         {
//             'uploadedImages': [],
//             "id": "322621f3-1376-4970-ad44-9b78399beb8b",
//             "title": "nec nisi volutpat eleifend donec ut",
//             "description": "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
//             "cost": 12,
//             "available": false,
//             "added_date": "10/18/2017",
//             "maker": "ZooParadise",
//             "category": [],
//             "subcategory": "Корма",
//             'rating': 3.8,
//             'comment': {}
//         },
//     '65ba003e-4253-4a1c-a579-6f4c19fa944b':
//         {
//             'uploadedImages': [],
//             "id": "65ba003e-4253-4a1c-a579-6f4c19fa944b",
//             "title": "curae nulla dapibus",
//             "description": "dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
//             "cost": 75,
//             "available": false,
//             "added_date": "9/15/2017",
//             "maker": "Fisherman",
//             "category": [],
//             "subcategory": "Средства по уходу",
//             'rating': 3.5,
//             'comment': {}
//         },
//     'dc97b1ac-66c7-414d-a9c9-20109e20124b':
//         {
//             'uploadedImages': [],
//             "id": "dc97b1ac-66c7-414d-a9c9-20109e20124b",
//             "title": "in imperdiet et commodo vulputate justo in blandit",
//             "description": "et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie",
//             "cost": 9,
//             "available": true,
//             "added_date": "3/12/2018",
//             "maker": "Рога и копыта",
//             "category": [],
//             "subcategory": "Сухой корм",
//             'rating': 5,
//             'comment': {
//                 '1': {
//                     author: 'bhh2',
//                     textComment: 'Pdz'
//                 }
//             }
//         },
// }

export type CommentType = {
    author: string,
    textComment: string
}

export type ItemType = {
    'uploadedImages': any,
    "id": string
    "title": string
    "description": string
    "cost": number
    "available": boolean
    "added_date": string
    "maker": string
    "category": string[],
    "subcategory": string
    'rating': number,
    comment: {
        [commendId: string]: CommentType
    }
}

export type TCatalogState = {
    items: IItem[],
    pageSize: number,
    totalCount: number | undefined
    currentPage: number
}

const initialState: TCatalogState = {
    items: [],
    pageSize: 1,
    totalCount: undefined,
    currentPage: 1
}

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export default function reducer(state: TCatalogState = initialState, action: ActionTypes): TCatalogState {
    switch (action.type) {
        case CatalogActionType.LOAD_ARTICLES_SUCCESS: {
            return {
                ...state,
                items: action.articles,
                totalCount: action.totalCount,
                currentPage: action.currentPage
            }
        }
        case CatalogActionType.CREATE_NEW_ARTICLE: {
            return {...state, items: [...state.items, action.article]}
        }
        default:
            return state
    }
}