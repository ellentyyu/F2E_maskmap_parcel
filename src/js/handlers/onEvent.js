import utils, {dom} from '../model/utils';
import renderTowns from '../view/renderTowns';
import openMarker from '../view/openMarker';
import searchPharm from '../view/searchPharm';


function controlMenu(e){
    e.preventDefault;
    const container = document.querySelector('.container');
    const sideBtn = document.querySelector('.aside-btn');
    container.classList.toggle('active');
    sideBtn.classList.toggle('rotate');
}
function changeSearch(e){
    if(e.target == dom.countyList){
        renderTowns(e.target.value);
    }
    searchPharm(dom.countyList.value, dom.townList.value, dom.searchAdd.value);
}
function zoomToPharm(e){
    if (e.target.nodeName == 'A' && e.target.hasAttribute('data-lat')) {
        e.preventDefault();
        let lat = e.target.dataset.lat;
        let lng = e.target.dataset.lng;
        //zoom in到所選地點 將中心訂在畫面偏左
        let targetPoint = utils.map.project([lat, lng], 18).subtract([-(350 / 2), 0]);
        let targetLatLng = utils.map.unproject(targetPoint, 18);
        utils.map.setView(targetLatLng, 18);

        // 將藥局popup打開
        openMarker(utils.markers, lat, lng);
    }
}

export default function onEvent(){
    dom.sideBtn.addEventListener('click', controlMenu);
    dom.inputsContainer.addEventListener('change', changeSearch);
    dom.pharmList.addEventListener('click', zoomToPharm);
}
