import utils, {dom} from '../model/utils';

export default function renderCounties(){
    let countyStr = utils.locationsData.map(item=>`<option value="${item.county}">${item.county}</option>`).join("");
    dom.countyList.innerHTML = countyStr;
}