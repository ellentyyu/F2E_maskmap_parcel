import utils, {dom} from '../model/utils';
import renderPharmList from './renderPharmList';
import openMarker from './openMarker';



export default function searchPharm(county, town, add){
    let dataFiltered;
    let lat; 
    let lng;
    //有無鄉鎮
    if(town == '所有區域'){
        dataFiltered = utils.pharmData.filter(item => item.properties.county == dom.countyList.value);
    }else{
        dataFiltered = utils.pharmData.filter(item => item.properties.county == dom.countyList.value && item.properties.town == dom.townList.value);
    }
    //有無輸入地址
    if(add){
        dataFiltered = dataFiltered.filter(item=>item.properties.address.includes(add));
        
    }
    if (dataFiltered.length == 0){
        dom.resultsCount.innerHTML = `共有 ${dataFiltered.length} 間藥局`;
        dom.pharmList.innerHTML = ``;
        return;
    }
    lat = dataFiltered[0].geometry.coordinates[1];
    lng = dataFiltered[0].geometry.coordinates[0];
    renderPharmList(dataFiltered);
    openMarker(utils.markers, lat, lng); //地圖顯示列表第一間藥局資料
}