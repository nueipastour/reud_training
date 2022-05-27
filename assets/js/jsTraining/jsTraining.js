/**
 * 說明：
 * <li>1. 頁面函式只會初始化一次
 * <li>2. 如果是多頁面組合時，可能被其他頁面呼叫，因此需使用namespane:Page，以方便外部呼叫或試調
 * 
 * 執行順序：
 * 1. 註冊$(document).ready()函式，但先不執行
 * 2. $(document).ready()之外的程式碼依序執行 - 建構變數、函式obj
 * 3. 執行$(document).ready()內註冊的函式
 * 4. 確定window.Page是否存在，不存在則初始化
 * 5. 執行obj()物件，並將結果存入window.Page[name]
 * 6. obj()回傳內容為 new obj.fn.init(options);
 * 7. 實例化obj.fn.init(options);並在最後執行函式 _construct(_options);
 */

// IIFE 立即執行函式
(function(window, document, $, undefined) {
  // 使用嚴格模式
  'use strict';

  // DOM下載完後執行
  $(document).ready(function() {
    // init this page
    window.Page = window.Page || new function() {}();
    window.Page[name] = obj();
  });

  // Class Name
  var name = '{name}';
  // Version
  var version = '{version}';
  // Default options
  var defaults = {};

  /**
      * *************** Object Build ***************
      */

  // Define a local copy of Object
  var obj = function(options) {
    return new obj.fn.init(options);
  };

  // Prototype arguments
  obj.fn = obj.prototype = {
    // Object Name
    _name: name,

    // Default options
    _defaults: defaults,

    // AJAX URL
    _ajaxUrls: {
      list: '/controller_group_forder/controller/ajax',
      edit: '/controller_group_forder/controller_edit/ajax',
    },
  };

  /**
      * Javascript物件
      */
  obj.fn.init = function(options) {
    /**
        * *************** Object Argument Setting ***************
        */
    var self = this;
    var _options = options || {};
    // Ajax Response - jqXHR(s)
    var _jqXHRs;

    /**
        * *************** 屬性設定 ***************
        */

    /**
        * *************** 物件必要函式 ***************
        */

    /**
        * 建構子
        */
    var _construct = function() {
      console.log('_construct');

      _initialize();
    };

    /**
        * 解構子
        */
    var _destruct = function() {};

    /**
        * 初始化
        */
    var _initialize = function() {
      console.log('_initialize');
      // 移除按鈕
      $('.ctrl-btn').remove();
      /**
 * 建立表格
 */
      // 建立變數
      var tmp, table, thead, tbody, tr, th, td;
      // 建立暫存容器
      tmp = $('<div></div>');
      // 建立thead區塊資料，並放到tmp之中
      thead = $('<thead></thead>').appendTo(tmp);
      // 建立tr標籤，並放到thead之中
      tr = $('<tr></tr>').appendTo(thead);
      // 建立th標籤，並放到tr之中
      th = $('<th></th>').appendTo(tr);
      // 寫入th內容文字
      th.text('Count');
      th = $('<th></th>').appendTo(tr);
      th.text('Name');
      th = $('<th>Gender</th>').appendTo(tr);

      // 建立tbody區塊資料
      tbody = $('<tbody></tbody>').appendTo(tmp);
      tr = $('<tr></tr>').appendTo(tbody);
      td = $('<td></td>').appendTo(tr);
      td.text('1');
      td = $('<td></td>').appendTo(tr);
      td.text('Joe');
      td = $('<td>male</td>').appendTo(tr);

      // 取得table元件
      table = $('.ctrl-table');
      // 將暫存容器內容移至table元件
      tmp.children().appendTo(table);

      // 印出table元件HTML碼
      console.log(table.html());

      /**
          * 事件綁定
          */
      _evenBind();
    };

    /**
        * 事件綁定
        */
    var _evenBind = function() {
      console.log('_evenBind');

      /**
          * 事件 - 增加
          */

      /**
          * 事件 - 清除規
          */
    };

    /**
        * *************** 功能函式 ***************
        */

    /**
        * *************** 事件函式 ***************
        */

    /**
        * 事件 - 送出
        */
    var _submit = function(e) {
      return this;
    };

    /**
        * 事件 - 清除
        */
    var _clear = function(e) {
      return this;
    };

    /**
        * 事件 - 增加
        */
    var _add = function(e) {
      return this;
    };

    /**
        * *************** 私有函式 ***************
        */

    /**
        * *************** Run Constructor ***************
        */
    _construct();
  };

  // Give the init function the Object prototype for later instantiation
  obj.fn.init.prototype = obj.prototype;

  // Alias prototype function
  $.extend(obj, obj.fn);
})(window, document, $);
