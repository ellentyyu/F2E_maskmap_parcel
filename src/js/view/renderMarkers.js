import utils from '../model/utils';
export default function renderMarkers(ary) {
    let popupContent = '';
    ary.forEach(function (item, index) {
        //item.properties.note有資料顯示 沒資料('-')就不顯示
        let note = '';
        if (item.properties.note !== '-') {
            note = 1;
        }
        //單一popup內容
        popupContent = `<li class="pharm-item">
                            <div class="pharm-title">
                            <h3 class="pharm-name">${item.properties.name}</h3>
                            <div class="pharm-icons">
                                <a href="https://www.google.com.tw/maps/dir//${item.properties.address}" target="_blank" class="fas fa-location-arrow"></a>
                            </div>
                            </div>
                            <div class="pharm-info">
                                <p>${item.properties.address}</p>
                                <p>${item.properties.phone}</p>
                                ${note && `<p>${item.properties.note}</p>`}
                            </div>
                            <div class="mask-info">
                                <div class="${item.properties.mask_adult == 0 ? `mask-gray` : `mask-adult`}">
                                    <span class="ms-name">成人口罩</span>
                                    <span class="ms-quan">${item.properties.mask_adult}</span>
                                </div>
                                <div class="${item.properties.mask_child == 0 ? `mask-gray` : `mask-child`}">
                                    <span class="ms-name">兒童口罩</span>
                                    <span class="ms-quan">${item.properties.mask_child}</span>
                                </div>
                            </div>
                        </li>`
        //將藥局座標加入圖層集合中
        utils.markers.addLayer(L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]]).bindPopup(popupContent));
        
    });
    utils.map.addLayer(utils.markers);
}