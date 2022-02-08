
import utils from './model/utils';
import renderDateId from './view/renderDateId';
import renderCounties from './view/renderCounties';
import renderTowns from './view/renderTowns';
import createMap from './view/createMap';
import renderMarkers from './view/renderMarkers';
import renderPharmList from './view/renderPharmList';
import onEvent from './handlers/onEvent';



renderDateId();
renderCounties();
renderTowns('臺北市'); //因為renderCounties()第一個為臺北市 預設顯示臺北市行政區
createMap();

axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
    .then(function (response) { 
        utils.pharmData = response.data.features;
        renderMarkers(utils.pharmData);  
        renderPharmList(utils.pharmData.filter(item => item.properties.county == '臺北市')); 
        
    });


onEvent();






