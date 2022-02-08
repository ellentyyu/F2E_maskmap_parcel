import {dom} from '../model/utils';

export default function renderPharmList(ary){
    dom.resultsCount.innerHTML = `共 ${ary.length} 間藥局`;
    let str = '';
    ary.forEach(function (item, index) {
        //item.properties.note有資料顯示 沒資料('-')就不顯示
        let note = '';
        if (item.properties.note !== '-') {
            note = 1;
        }
        str += `<li class="pharm-item">
                            <div class="pharm-title">
                            <h3 class="pharm-name">${item.properties.name}</h3>
                            <div class="pharm-icons">
                                <a href="#" class="fas fa-map-marker-alt" data-lat="${item.geometry.coordinates[1]}" data-lng="${item.geometry.coordinates[0]}"></a>
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
    });
    dom.pharmList.innerHTML = str;
}