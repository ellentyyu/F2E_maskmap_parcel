import jsonData from './locationsData.json';

//dom元素

export const dom = {
    
    sideBtn: document.querySelector('.aside-btn'),
    pharmList: document.querySelector('.pharm-list'),
    countyList: document.querySelector('.county-js'),
    townList: document.querySelector('.town-js'),
    inputsContainer: document.querySelector('.input-all-js'),
    searchAdd: document.querySelector('.search-js'),
    resultsCount: document.querySelector('.results-count-js'),
};

//variables
export default {
    pharmData: '',
    locationsData: jsonData,
    map: L.map('map', {
        center: [25.0522529, 121.516039],
        zoom: 14
    }),
    markers: L.markerClusterGroup()
};