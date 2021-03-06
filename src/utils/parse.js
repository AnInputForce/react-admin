import moment from 'moment';
import { getPropsValue, digitUppercase, thousandBitSeparator } from './utils';

/**
 * @description 将性别的值转换为性别描述
 * @param value： 性别的值
 * @returns 性别的描述
 */
export function parseSexValue(value) {
  if (value === '1') {
    return '男';
  }
  if (value === '2') {
    return '女';
  }
  return '';
}

/**
 * @description 通过字典将值转换为描述
 * @param params: 字典路径
 * @param value: 值
 * @returns 值对应的描述
 */
export function parseValueByDicts(props, params, value) {
  let dsc = '';
  const dicts = getPropsValue(props, params, []);
  dicts.every(dict => {
    if (dicts.value === value) {
      const { findDsc } = dict;
      dsc = findDsc;
      return false;
    }
    return true;
  });
  return dsc;
}

/**
 * @description 将moment对象转换为指定格式的字符串
 * @param value: moment对象
 * @param parseFormat: 指定的格式
 * @example parseDateTimeString(object, 'YYYY-MM-DD') 假定moment对象的时间为2017年11月30日
 *          返回: 2017-11-30
 * @example parseDateTimeString(object, 'DD-MM-YYYY HH:mm:ss') 假定moment对象的时间为2017年11月30日 23时50分39秒
 *          返回：30-11-2017 23:50:39
 * @return 转换后的日期时间字符串
 */
export function parseMomentObject(object, parseFormat) {
  if (object == null) {
    return null;
  }
  return moment(object).format(parseFormat);
}

/**
 * @description 将日期时间字符串转换为指定格式的字符串
 * @param value: 日期时间字符串
 * @param valueFormat: 日期时间字符串格式
 * @param parseFormat: 指定的格式
 * @example parseDateTimeString('30-11-2017', 'DD-MM-YYYY', 'YYYY年MM月DD日')
 *          返回：2017年11月30日
 * @example parseDateTimeString('30-11-2017 23:50:39', 'DD-MM-YYYY HH:mm:ss',
 *          'YYYY年MM月DD日 HH时mm分ss秒')
 *          返回：2017年11月30日 23时50分39秒
 * @return 转换后的日期时间字符串
 */
export function parseDateTimeString(value, valueFormat, parseFormat) {
  if (value == null || value === '') {
    return '';
  }
  return moment(value, valueFormat).format(parseFormat);
}

/**
 * @description 通过级联选择框的值(values)获取级联选择框的描述(labels)
 * @param options：级联选择框所有的数据集合(json格式)
 * @param values： 级联选择框选择的值
 * @return 级联选择框对应值的描述，如果存在多个，以/分割
 */
export function parseCascaderValues(options, values) {
  let labels = '';
  let datas = options;
  if (values == null) return labels;
  values.every(value => {
    let exist = false;
    datas.every(data => {
      if (data.value === value) {
        exist = true;
        labels = labels === '' ? data.label : `${labels} / ${data.label}`;
        datas = data.children;
        return false;
      }
      return true;
    });
    if (!exist) {
      return false;
    }
    return true;
  });
  return labels;
}

/**
 * @description 将金额转换为大写
 * @param value: 数字金额
 * @returns 大写金额
 */
export function parseAmtUppercase(value) {
  if (value == null || value === '') {
    return undefined;
  }
  return `${thousandBitSeparator(value)} (${digitUppercase(value)})`;
}
