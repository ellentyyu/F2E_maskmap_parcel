import dayId from './dayId';

//顯示日期 星期 可購買id
export default function renderDateId() {
    const currDate = document.querySelector('.date-js');
    const currDay = document.querySelector('.day-js');
    const validId = document.querySelector('.id-js');
    //日期
    let date = new Date();
    let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    currDate.textContent = fullDate;
    //星期轉中文
    let day = date.getDay();
    let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    let dayCn = weekday[day];
    currDay.textContent = dayCn;
    //對應id
    dayId(day);
}