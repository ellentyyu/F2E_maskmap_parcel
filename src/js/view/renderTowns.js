import utils, {dom} from '../model/utils';


export default function renderTowns(county){
    let countyObj = utils.locationsData.filter(item=>item.county == county)[0];
    let townStr = `<option value="所有區域">所有區域</option>${countyObj.towns.map(item=>`<option value="${item}">${item}</option>`).join("")}`;
    dom.townList.innerHTML = townStr;
}