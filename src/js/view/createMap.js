import utils from '../model/utils';
export default function createMap(){
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(utils.map);

    //start()為locatecontrol語法 載入地圖時即定位使用者位置
    let lc = L.control.locate({initialZoomLevel:18, keepCurrentZoomLevel: true}).addTo(utils.map);
    lc.start();
}