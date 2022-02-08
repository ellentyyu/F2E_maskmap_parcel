export default function dayId(day) {
    const validId = document.querySelector('.id-js');
    let str = '';
    if (day == 1 || day == 3 || day == 5) {
        str = '身分證末碼為<span>1,3,5,7,9</span>可購買';
    } else if (day == 2 || day == 4 || day == 6) {
        str = '身分證末碼為<span>2,4,6,8,0</span>可購買';
    } else {
        str = '<span>不限身分證號碼</span>皆可購買';
    }
    validId.innerHTML = str;
}