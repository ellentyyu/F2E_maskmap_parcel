// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"KNFQ":[function(require,module,exports) {
module.exports = [{
  "county": "臺北市",
  "towns": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"]
}, {
  "county": "新北市",
  "towns": ["萬里區", "金山區", "板橋區", "汐止區", "深坑區", "石碇區", "瑞芳區", "平溪區", "雙溪區", "貢寮區", "新店區", "坪林區", "烏來區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "八里區", "淡水區", "三芝區", "石門區"]
}, {
  "county": "基隆市",
  "towns": ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"]
}, {
  "county": "宜蘭縣",
  "towns": ["宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉"]
}, {
  "county": "新竹市",
  "towns": ["東區", "北區", "香山區"]
}, {
  "county": "新竹縣",
  "towns": ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉"]
}, {
  "county": "桃園市",
  "towns": ["中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區", "觀音區", "桃園區", "龜山區", "八德區", "大溪區", "復興區", "大園區", "蘆竹區"]
}, {
  "county": "苗栗縣",
  "towns": ["竹南鎮", "頭份市", "三灣鄉", "南庄鄉", "獅潭鄉", "後龍鎮", "通霄鎮", "苑裡鎮", "苗栗市", "造橋鄉", "頭屋鄉", "公館鄉", "大湖鄉", "泰安鄉", "銅鑼鄉", "三義鄉", "西湖鄉", "卓蘭鎮"]
}, {
  "county": "臺中市",
  "towns": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區"]
}, {
  "county": "彰化縣",
  "towns": ["彰化市", "芬園鄉", "花壇鄉", "秀水鄉", "鹿港鎮", "福興鄉", "線西鄉", "和美鎮", "伸港鄉", "員林市", "社頭鄉", "永靖鄉", "埔心鄉", "溪湖鎮", "大村鄉", "埔鹽鄉", "田中鎮", "北斗鎮", "田尾鄉", "埤頭鄉", "溪州鄉", "竹塘鄉", "二林鎮", "大城鄉", "芳苑鄉", "二水鄉"]
}, {
  "county": "南投縣",
  "towns": ["南投市", "中寮鄉", "草屯鎮", "國姓鄉", "埔里鎮", "仁愛鄉", "名間鄉", "集集鎮", "水里鄉", "魚池鄉", "信義鄉", "竹山鎮", "鹿谷鄉"]
}, {
  "county": "嘉義市",
  "towns": ["東區", "西區"]
}, {
  "county": "嘉義縣",
  "towns": ["番路鄉", "梅山鄉", "竹崎鄉", "阿里山鄉", "中埔鄉", "大埔鄉", "水上鄉", "鹿草鄉", "太保市", "朴子市", "東石鄉", "六腳鄉", "新港鄉", "民雄鄉", "大林鎮", "溪口鄉", "義竹鄉", "布袋鎮"]
}, {
  "county": "雲林縣",
  "towns": ["斗南鎮", "大埤鄉", "虎尾鎮", "土庫鎮", "褒忠鄉", "東勢鄉", "臺西鄉", "崙背鄉", "麥寮鄉", "斗六市", "林內鄉", "古坑鄉", "莿桐鄉", "西螺鎮", "二崙鄉", "北港鎮", "水林鄉", "口湖鄉", "四湖鄉", "元長鄉"]
}, {
  "county": "臺南市",
  "towns": ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"]
}, {
  "county": "高雄市",
  "towns": ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "楠梓區", "小港區", "左營區", "仁武區", "大社區", "岡山區", "路竹區", "阿蓮區", "田寮區", "燕巢區", "橋頭區", "梓官區", "彌陀區", "永安區", "湖內區", "鳳山區", "大寮區", "林園區", "鳥松區", "大樹區", "旗山區", "美濃區", "六龜區", "內門區", "杉林區", "甲仙區", "桃源區", "那瑪夏區", "茂林區", "茄萣區"]
}, {
  "county": "澎湖縣",
  "towns": ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉"]
}, {
  "county": "金門縣",
  "towns": ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"]
}, {
  "county": "屏東縣",
  "towns": ["屏東市", "三地門鄉", "霧臺鄉", "瑪家鄉", "九如鄉", "里港鄉", "高樹鄉", "鹽埔鄉", "長治鄉", "麟洛鄉", "竹田鄉", "內埔鄉", "萬丹鄉", "潮州鎮", "泰武鄉", "來義鄉", "萬巒鄉", "崁頂鄉", "新埤鄉", "南州鄉", "林邊鄉", "東港鎮", "琉球鄉", "佳冬鄉", "新園鄉", "枋寮鄉", "枋山鄉", "春日鄉", "獅子鄉", "車城鄉", "牡丹鄉", "恆春鎮", "滿州鄉"]
}, {
  "county": "臺東縣",
  "towns": ["臺東市", "綠島鄉", "蘭嶼鄉", "延平鄉", "卑南鄉", "鹿野鄉", "關山鎮", "海端鄉", "池上鄉", "東河鄉", "成功鎮", "長濱鄉", "太麻里鄉", "金峰鄉", "大武鄉", "達仁鄉"]
}, {
  "county": "花蓮縣",
  "towns": ["花蓮市", "新城鄉", "秀林鄉", "吉安鄉", "壽豐鄉", "鳳林鎮", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "玉里鎮", "卓溪鄉", "富里鄉"]
}, {
  "county": "連江縣",
  "towns": ["南竿鄉"]
}];
},{}],"F33o":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dom = exports.default = void 0;

var _locationsData = _interopRequireDefault(require("./locationsData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//dom元素
var dom = {
  sideBtn: document.querySelector('.aside-btn'),
  pharmList: document.querySelector('.pharm-list'),
  countyList: document.querySelector('.county-js'),
  townList: document.querySelector('.town-js'),
  inputsContainer: document.querySelector('.input-all-js'),
  searchAdd: document.querySelector('.search-js'),
  resultsCount: document.querySelector('.results-count-js')
}; //variables

exports.dom = dom;
var _default = {
  pharmData: '',
  locationsData: _locationsData.default,
  map: L.map('map', {
    center: [25.0522529, 121.516039],
    zoom: 14
  }),
  markers: L.markerClusterGroup()
};
exports.default = _default;
},{"./locationsData.json":"KNFQ"}],"WYXX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dayId;

function dayId(day) {
  var validId = document.querySelector('.id-js');
  var str = '';

  if (day == 1 || day == 3 || day == 5) {
    str = '身分證末碼為<span>1,3,5,7,9</span>可購買';
  } else if (day == 2 || day == 4 || day == 6) {
    str = '身分證末碼為<span>2,4,6,8,0</span>可購買';
  } else {
    str = '<span>不限身分證號碼</span>皆可購買';
  }

  validId.innerHTML = str;
}
},{}],"ugtB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderDateId;

var _dayId = _interopRequireDefault(require("./dayId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//顯示日期 星期 可購買id
function renderDateId() {
  var currDate = document.querySelector('.date-js');
  var currDay = document.querySelector('.day-js');
  var validId = document.querySelector('.id-js'); //日期

  var date = new Date();
  var fullDate = "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
  currDate.textContent = fullDate; //星期轉中文

  var day = date.getDay();
  var weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  var dayCn = weekday[day];
  currDay.textContent = dayCn; //對應id

  (0, _dayId.default)(day);
}
},{"./dayId":"WYXX"}],"MY4V":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderCounties;

var _utils = _interopRequireWildcard(require("../model/utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function renderCounties() {
  var countyStr = _utils.default.locationsData.map(function (item) {
    return "<option value=\"".concat(item.county, "\">").concat(item.county, "</option>");
  }).join("");

  _utils.dom.countyList.innerHTML = countyStr;
}
},{"../model/utils":"F33o"}],"N58o":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderTowns;

var _utils = _interopRequireWildcard(require("../model/utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function renderTowns(county) {
  var countyObj = _utils.default.locationsData.filter(function (item) {
    return item.county == county;
  })[0];

  var townStr = "<option value=\"\u6240\u6709\u5340\u57DF\">\u6240\u6709\u5340\u57DF</option>".concat(countyObj.towns.map(function (item) {
    return "<option value=\"".concat(item, "\">").concat(item, "</option>");
  }).join(""));
  _utils.dom.townList.innerHTML = townStr;
}
},{"../model/utils":"F33o"}],"UfnF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMap;

var _utils = _interopRequireDefault(require("../model/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMap() {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(_utils.default.map); //start()為locatecontrol語法 載入地圖時即定位使用者位置

  var lc = L.control.locate({
    initialZoomLevel: 18,
    keepCurrentZoomLevel: true
  }).addTo(_utils.default.map);
  lc.start();
}
},{"../model/utils":"F33o"}],"p7SU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderMarkers;

var _utils = _interopRequireDefault(require("../model/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderMarkers(ary) {
  var popupContent = '';
  ary.forEach(function (item, index) {
    //item.properties.note有資料顯示 沒資料('-')就不顯示
    var note = '';

    if (item.properties.note !== '-') {
      note = 1;
    } //單一popup內容


    popupContent = "<li class=\"pharm-item\">\n                            <div class=\"pharm-title\">\n                            <h3 class=\"pharm-name\">".concat(item.properties.name, "</h3>\n                            <div class=\"pharm-icons\">\n                                <a href=\"https://www.google.com.tw/maps/dir//").concat(item.properties.address, "\" target=\"_blank\" class=\"fas fa-location-arrow\"></a>\n                            </div>\n                            </div>\n                            <div class=\"pharm-info\">\n                                <p>").concat(item.properties.address, "</p>\n                                <p>").concat(item.properties.phone, "</p>\n                                ").concat(note && "<p>".concat(item.properties.note, "</p>"), "\n                            </div>\n                            <div class=\"mask-info\">\n                                <div class=\"").concat(item.properties.mask_adult == 0 ? "mask-gray" : "mask-adult", "\">\n                                    <span class=\"ms-name\">\u6210\u4EBA\u53E3\u7F69</span>\n                                    <span class=\"ms-quan\">").concat(item.properties.mask_adult, "</span>\n                                </div>\n                                <div class=\"").concat(item.properties.mask_child == 0 ? "mask-gray" : "mask-child", "\">\n                                    <span class=\"ms-name\">\u5152\u7AE5\u53E3\u7F69</span>\n                                    <span class=\"ms-quan\">").concat(item.properties.mask_child, "</span>\n                                </div>\n                            </div>\n                        </li>"); //將藥局座標加入圖層集合中

    _utils.default.markers.addLayer(L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]]).bindPopup(popupContent));
  });

  _utils.default.map.addLayer(_utils.default.markers);
}
},{"../model/utils":"F33o"}],"nocC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderPharmList;

var _utils = require("../model/utils");

function renderPharmList(ary) {
  _utils.dom.resultsCount.innerHTML = "\u5171 ".concat(ary.length, " \u9593\u85E5\u5C40");
  var str = '';
  ary.forEach(function (item, index) {
    //item.properties.note有資料顯示 沒資料('-')就不顯示
    var note = '';

    if (item.properties.note !== '-') {
      note = 1;
    }

    str += "<li class=\"pharm-item\">\n                            <div class=\"pharm-title\">\n                            <h3 class=\"pharm-name\">".concat(item.properties.name, "</h3>\n                            <div class=\"pharm-icons\">\n                                <a href=\"#\" class=\"fas fa-map-marker-alt\" data-lat=\"").concat(item.geometry.coordinates[1], "\" data-lng=\"").concat(item.geometry.coordinates[0], "\"></a>\n                                <a href=\"https://www.google.com.tw/maps/dir//").concat(item.properties.address, "\" target=\"_blank\" class=\"fas fa-location-arrow\"></a>\n                            </div>\n                            </div>\n                            <div class=\"pharm-info\">\n                                <p>").concat(item.properties.address, "</p>\n                                <p>").concat(item.properties.phone, "</p>\n                                ").concat(note && "<p>".concat(item.properties.note, "</p>"), "\n                            </div>\n                            <div class=\"mask-info\">\n                                <div class=\"").concat(item.properties.mask_adult == 0 ? "mask-gray" : "mask-adult", "\">\n                                    <span class=\"ms-name\">\u6210\u4EBA\u53E3\u7F69</span>\n                                    <span class=\"ms-quan\">").concat(item.properties.mask_adult, "</span>\n                                </div>\n                                <div class=\"").concat(item.properties.mask_child == 0 ? "mask-gray" : "mask-child", "\">\n                                    <span class=\"ms-name\">\u5152\u7AE5\u53E3\u7F69</span>\n                                    <span class=\"ms-quan\">").concat(item.properties.mask_child, "</span>\n                                </div>\n                            </div>\n                        </li>");
  });
  _utils.dom.pharmList.innerHTML = str;
}
},{"../model/utils":"F33o"}],"MjHY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openMarker;

function openMarker(markers, lat, lng) {
  markers.eachLayer(function (layer) {
    if (layer._latlng.lat == lat && layer._latlng.lng == lng) {
      markers.zoomToShowLayer(layer, function () {
        layer.openPopup();
      });
    }
  });
}
},{}],"sSQD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchPharm;

var _utils = _interopRequireWildcard(require("../model/utils"));

var _renderPharmList = _interopRequireDefault(require("./renderPharmList"));

var _openMarker = _interopRequireDefault(require("./openMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function searchPharm(county, town, add) {
  var dataFiltered;
  var lat;
  var lng; //有無鄉鎮

  if (town == '所有區域') {
    dataFiltered = _utils.default.pharmData.filter(function (item) {
      return item.properties.county == _utils.dom.countyList.value;
    });
  } else {
    dataFiltered = _utils.default.pharmData.filter(function (item) {
      return item.properties.county == _utils.dom.countyList.value && item.properties.town == _utils.dom.townList.value;
    });
  } //有無輸入地址


  if (add) {
    dataFiltered = dataFiltered.filter(function (item) {
      return item.properties.address.includes(add);
    });
  }

  if (dataFiltered.length == 0) {
    _utils.dom.resultsCount.innerHTML = "\u5171\u6709 ".concat(dataFiltered.length, " \u9593\u85E5\u5C40");
    _utils.dom.pharmList.innerHTML = "";
    return;
  }

  lat = dataFiltered[0].geometry.coordinates[1];
  lng = dataFiltered[0].geometry.coordinates[0];
  (0, _renderPharmList.default)(dataFiltered);
  (0, _openMarker.default)(_utils.default.markers, lat, lng); //地圖顯示列表第一間藥局資料
}
},{"../model/utils":"F33o","./renderPharmList":"nocC","./openMarker":"MjHY"}],"zTtf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onEvent;

var _utils = _interopRequireWildcard(require("../model/utils"));

var _renderTowns = _interopRequireDefault(require("../view/renderTowns"));

var _openMarker = _interopRequireDefault(require("../view/openMarker"));

var _searchPharm = _interopRequireDefault(require("../view/searchPharm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function controlMenu(e) {
  e.preventDefault;
  var container = document.querySelector('.container');
  var sideBtn = document.querySelector('.aside-btn');
  container.classList.toggle('active');
  sideBtn.classList.toggle('rotate');
}

function changeSearch(e) {
  if (e.target == _utils.dom.countyList) {
    (0, _renderTowns.default)(e.target.value);
  }

  (0, _searchPharm.default)(_utils.dom.countyList.value, _utils.dom.townList.value, _utils.dom.searchAdd.value);
}

function zoomToPharm(e) {
  if (e.target.nodeName == 'A' && e.target.hasAttribute('data-lat')) {
    e.preventDefault();
    var lat = e.target.dataset.lat;
    var lng = e.target.dataset.lng; //zoom in到所選地點 將中心訂在畫面偏左

    var targetPoint = _utils.default.map.project([lat, lng], 18).subtract([-(350 / 2), 0]);

    var targetLatLng = _utils.default.map.unproject(targetPoint, 18);

    _utils.default.map.setView(targetLatLng, 18); // 將藥局popup打開


    (0, _openMarker.default)(_utils.default.markers, lat, lng);
  }
}

function onEvent() {
  _utils.dom.sideBtn.addEventListener('click', controlMenu);

  _utils.dom.inputsContainer.addEventListener('change', changeSearch);

  _utils.dom.pharmList.addEventListener('click', zoomToPharm);
}
},{"../model/utils":"F33o","../view/renderTowns":"N58o","../view/openMarker":"MjHY","../view/searchPharm":"sSQD"}],"PfBf":[function(require,module,exports) {
"use strict";

var _utils = _interopRequireDefault(require("./model/utils"));

var _renderDateId = _interopRequireDefault(require("./view/renderDateId"));

var _renderCounties = _interopRequireDefault(require("./view/renderCounties"));

var _renderTowns = _interopRequireDefault(require("./view/renderTowns"));

var _createMap = _interopRequireDefault(require("./view/createMap"));

var _renderMarkers = _interopRequireDefault(require("./view/renderMarkers"));

var _renderPharmList = _interopRequireDefault(require("./view/renderPharmList"));

var _onEvent = _interopRequireDefault(require("./handlers/onEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _renderDateId.default)();
(0, _renderCounties.default)();
(0, _renderTowns.default)('臺北市'); //因為renderCounties()第一個為臺北市 預設顯示臺北市行政區

(0, _createMap.default)();
axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').then(function (response) {
  _utils.default.pharmData = response.data.features;
  (0, _renderMarkers.default)(_utils.default.pharmData);
  (0, _renderPharmList.default)(_utils.default.pharmData.filter(function (item) {
    return item.properties.county == '臺北市';
  }));
});
(0, _onEvent.default)();
},{"./model/utils":"F33o","./view/renderDateId":"ugtB","./view/renderCounties":"MY4V","./view/renderTowns":"N58o","./view/createMap":"UfnF","./view/renderMarkers":"p7SU","./view/renderPharmList":"nocC","./handlers/onEvent":"zTtf"}]},{},["PfBf"], null)
//# sourceMappingURL=https://ellentyyu.github.io/F2E_maskmap_parcel/all.3610e9c0.js.map