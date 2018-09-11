import { delay } from 'roadhog-api-doc';
import { packSuccRes } from './utils';

/* eslint-disable comma-dangle */
const city = [
  {
    children: [
      {
        value: 'd0f17d91-f06e-445c-959a-0817379325ca',
        label: '钦州市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '109e4928-33c8-4949-bce1-12f00cb17984',
        label: '崇左市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '38f71a71-fa64-4489-9ff7-27476712e21f',
        label: '河池市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: 'fad6d6cf-383d-4ef4-90dd-2b020e23351b',
        label: '北海市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '06641d5b-e8a5-4847-a06d-7310188548f9',
        label: '梧州市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '798b8282-87ee-446d-8076-91517906d2cd',
        label: '南宁市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: 'dae4b8d1-1a18-422e-83aa-ae8a40e63f6d',
        label: '百色市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '62508bb3-ffe0-4207-a954-c45a47092b88',
        label: '桂林市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: 'dfd657ab-3994-4cda-8b3c-dec470c53be2',
        label: '来宾市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: 'bac46955-d379-4146-a0b3-defdaadb1a16',
        label: '贺州市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '17e7c191-4e51-4aa4-bdf7-e6f79acf827c',
        label: '玉林市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '689da1d2-951f-4b64-9208-e762be59bdc1',
        label: '柳州市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: '394d6cb1-aea1-4e4d-b547-ec192a7178ab',
        label: '防城港市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      },
      {
        value: 'b79de958-3052-4925-8d27-fbe60723362e',
        label: '贵港市',
        ProvinceId: '167ee47c-bc85-4b2e-87a0-00af5c2cd664'
      }
    ],
    value: '167ee47c-bc85-4b2e-87a0-00af5c2cd664',
    label: '广西壮族自治区'
  },
  {
    children: [
      {
        value: 'ae5ef87a-dd23-4139-bee2-6472ea8acf22',
        label: '澳门特别行政区',
        ProvinceId: 'cb3d960c-0e17-473e-b735-0b076d47c79c'
      }
    ],
    value: 'cb3d960c-0e17-473e-b735-0b076d47c79c',
    label: '澳门特别行政区'
  },
  {
    children: [
      {
        value: '245fc3c6-a77a-4bd6-8a46-35c2858c28be',
        label: '省直辖县级行政单位',
        ProvinceId: 'e4ea5edf-5390-4137-bac4-15f2db76a299'
      },
      {
        value: '49088680-af1f-4a11-8e66-3516bf6559e4',
        label: '海口市',
        ProvinceId: 'e4ea5edf-5390-4137-bac4-15f2db76a299'
      },
      {
        value: 'a7d45c49-3d3e-42a1-ad17-c3392280fe0e',
        label: '三亚市',
        ProvinceId: 'e4ea5edf-5390-4137-bac4-15f2db76a299'
      }
    ],
    value: 'e4ea5edf-5390-4137-bac4-15f2db76a299',
    label: '海南省'
  },
  {
    children: [
      {
        value: '57f9ae23-dc40-4771-b787-9d2a59e4e4d9',
        label: '银川市',
        ProvinceId: '0aea2c2e-da7c-4a98-b179-16bf4a26ee43'
      },
      {
        value: '9c6beebd-0aac-43ac-80c1-1b8d3d0bb483',
        label: '吴忠市',
        ProvinceId: '0aea2c2e-da7c-4a98-b179-16bf4a26ee43'
      },
      {
        value: '035eee51-48c3-4391-bf5c-0cbc1b93cf61',
        label: '固原市',
        ProvinceId: '0aea2c2e-da7c-4a98-b179-16bf4a26ee43'
      },
      {
        value: '3a5e236b-27ee-47a8-bf05-0dc6944c18f8',
        label: '石嘴山市',
        ProvinceId: '0aea2c2e-da7c-4a98-b179-16bf4a26ee43'
      },
      {
        value: '3cb6b6fa-f9e5-4ee1-8be7-45271a882d31',
        label: '中卫市',
        ProvinceId: '0aea2c2e-da7c-4a98-b179-16bf4a26ee43'
      }
    ],
    value: '0aea2c2e-da7c-4a98-b179-16bf4a26ee43',
    label: '宁夏回族自治区'
  },
  {
    children: [
      {
        value: '2489823e-ccfa-4a0c-a375-96d48748149d',
        label: '海北藏族自治州',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: 'ac39c604-8e38-4564-90fe-895cfa17c595',
        label: '黄南藏族自治州',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: 'd7647762-9fa9-4089-8c35-73d409059903',
        label: '果洛藏族自治州',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: '49aa2eb9-03c8-42f0-8331-766a03ba24aa',
        label: '西宁市',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: '7e94ccef-0781-46ec-81c5-7fe7c83bbcf2',
        label: '玉树藏族自治州',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: '07f3e9f8-2dd4-453d-93f6-6e6d2715c8e4',
        label: '海西蒙古族藏族自治州',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: 'b9b1fbaa-2e7d-4502-be74-c1783b624023',
        label: '海南藏族自治州',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      },
      {
        value: 'f1fb3c7b-61c8-4787-ac17-fbc6cc333e2c',
        label: '海东地区',
        ProvinceId: '6a02c31f-47e5-4e64-8213-1cf17d02f06f'
      }
    ],
    value: '6a02c31f-47e5-4e64-8213-1cf17d02f06f',
    label: '青海省'
  },
  {
    children: [
      {
        value: '035c8acb-b607-46f9-a01f-ede1aa1184c8',
        label: '舟山市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '10b76e0c-9c22-4a1c-8405-ef251b727d19',
        label: '湖州市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '1020ae0e-bdcf-4f96-9dc9-e182c120b20b',
        label: '嘉兴市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '5a6785ed-9945-482a-ae4f-bc823e84a7ca',
        label: '衢州市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '9d12babb-ffaf-488d-aa4e-95d4242e07c9',
        label: '金华市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '38ae5f8e-c5ec-48ab-b01e-c6a0baca0f55',
        label: '台州市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '6d46f05c-5059-4ec7-8aa7-cd9229244cbd',
        label: '宁波市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: 'a8fefdfa-1ff5-4b99-8493-6aea6d522597',
        label: '杭州市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '8193d0d2-5efb-4c8b-9d19-45be3b4c5116',
        label: '丽水市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '6f3549a9-cd21-4643-89a9-44e09180dfee',
        label: '温州市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      },
      {
        value: '01864ca2-65cc-4562-8b7f-04328948339c',
        label: '绍兴市',
        ProvinceId: '74d26654-0be5-43df-9a4f-20115b8d7584'
      }
    ],
    value: '74d26654-0be5-43df-9a4f-20115b8d7584',
    label: '浙江省'
  },
  {
    children: [
      {
        value: 'ae5ef87a-dd23-4139-bee2-6472ea8acf23',
        label: '香港特别行政区',
        ProvinceId: 'abf30916-9972-41cb-814e-24eac24e8ce6'
      }
    ],
    value: 'abf30916-9972-41cb-814e-24eac24e8ce6',
    label: '香港特别行政区'
  },
  {
    children: [
      {
        value: '077f1c32-c977-44dc-889f-5bc37e06cb55',
        label: '黔南布依族苗族自治州',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: 'c1e92ffd-f662-462c-93d9-4e88bad214d2',
        label: '铜仁地区',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: '6f193bc3-7bab-4ed6-ae8a-3e3e777a3c2f',
        label: '黔西南布依族苗族自治州',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: '2f662d7b-fc51-495f-8f22-065d7019517c',
        label: '黔东南苗族侗族自治州',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: '413a067a-b658-4cd4-b529-0f9d8d14e556',
        label: '安顺市',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: '74ca1cf6-3a90-450e-816d-105a5de3e094',
        label: '贵阳市',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: '3a24078c-1184-4afb-a471-711cab81f909',
        label: '毕节地区',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: 'be0c0d6f-3ce0-4067-9f20-97b0352e4982',
        label: '遵义市',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      },
      {
        value: 'be7919ae-8c59-4184-bf6a-d472396d1183',
        label: '六盘水市',
        ProvinceId: '23b3c109-452c-4b07-8d77-27349f5420ba'
      }
    ],
    value: '23b3c109-452c-4b07-8d77-27349f5420ba',
    label: '贵州省'
  },
  {
    children: [
      {
        value: 'd7f5202d-404c-411f-8ec1-ce4a6169ff68',
        label: '延安市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: '5c3365b4-7414-4d24-a21b-d72810be95f0',
        label: '渭南市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: 'ee4f7af5-4007-4009-b81c-8bf8c232b23f',
        label: '宝鸡市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: 'abe23f4d-e5b2-4cdf-bc7a-6afac7bebccf',
        label: '安康市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: '96b0ee6a-8c15-4e17-948f-6dac92cb7cae',
        label: '铜川市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: '001f31d3-4cf0-4fba-8a65-27344053f422',
        label: '西安市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: '17f58e4c-7bf4-41e0-b4c3-219c575c8a12',
        label: '榆林市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: '83416a5d-5642-4659-8b97-568cb3f79b59',
        label: '汉中市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: 'd53c7c01-05d0-4035-852e-f40a341882ef',
        label: '咸阳市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      },
      {
        value: 'd57f680b-7fc0-439c-864d-fd918f6011c6',
        label: '商洛市',
        ProvinceId: '52870c17-e12b-44a9-83e7-2a550d1171b8'
      }
    ],
    value: '52870c17-e12b-44a9-83e7-2a550d1171b8',
    label: '陕西省'
  },
  {
    children: [
      {
        value: 'a633975d-3494-40fb-afa1-5612324ce687',
        label: '昭通市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '33416fef-8cad-4921-b1e6-585f9938d47a',
        label: '怒江傈僳族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'a72a5105-a3ea-49a2-92d9-3da8fefea0d5',
        label: '临沧市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '302d0a3e-2c11-4618-a7ea-4a2beffae5af',
        label: '文山壮族苗族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'da105cd2-f200-4fe0-8bc9-472ee8a7a3b8',
        label: '西双版纳傣族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'e6df04bc-8ef6-4b58-b734-358a91a9c278',
        label: '楚雄彝族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '88aa9345-0fdd-4d55-b5db-2dc45fa1e158',
        label: '丽江市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'b21abebb-942e-4f22-b85f-151fd1431c7b',
        label: '德宏傣族景颇族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'a33036dc-e507-445e-a924-00f8287654d6',
        label: '保山市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'f3208ae7-4c1f-4a8e-a239-774c0efff470',
        label: '大理白族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '40b4b40e-b0c0-4abf-bb6a-88d4c90ae3b8',
        label: '迪庆藏族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'e5eed04e-baf0-4e77-acd6-9e3fe68fbfbf',
        label: '玉溪市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '381635c3-eb99-4270-b37a-991a1bbfc724',
        label: '红河哈尼族彝族自治州',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '5ad150e3-e732-4ef5-93e1-d66d330a2d3f',
        label: '曲靖市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: 'da21e4c6-342e-4d6a-b8e5-c9252b2b5c29',
        label: '思茅市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      },
      {
        value: '09891418-1858-4821-a77f-ad971f048801',
        label: '昆明市',
        ProvinceId: '6e807b58-07e7-40cf-8971-3756750ba62a'
      }
    ],
    value: '6e807b58-07e7-40cf-8971-3756750ba62a',
    label: '云南省'
  },
  {
    children: [
      {
        value: '7d04e3a1-ee87-431c-9aa7-ac245014c51a',
        label: '上海市',
        ProvinceId: '3abcf245-505f-4342-b4d0-3dabd8cadb7f'
      }
    ],
    value: '3abcf245-505f-4342-b4d0-3dabd8cadb7f',
    label: '上海'
  },
  {
    children: [
      {
        value: '30fab2f1-8f0d-48ae-9456-b52f7a2c7c9a',
        label: '大庆市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '9d368aa0-2152-47cc-9eea-bbfaf74919c1',
        label: '大兴安岭地区',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '338f89e5-156b-4205-9e34-8fd2879d806f',
        label: '双鸭山市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '01344f0a-3242-48fd-aad6-7140042edc0b',
        label: '鹤岗市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '773a3f4f-0c62-4024-be0f-1180e4da8551',
        label: '鸡西市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '1514839b-d838-411b-b33a-282e2e72afc6',
        label: '佳木斯市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '17a95d4a-958c-4e4d-b7b8-289a92eb5370',
        label: '七台河市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: 'aa7f5ada-0fa6-45d4-9d98-479c43ce3964',
        label: '伊春市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '28fe794f-6fdf-42f0-88fb-482b6bb57ec3',
        label: '哈尔滨市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '1841df8b-2721-4179-9a5d-4abd1c8937f7',
        label: '牡丹江市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '695bb41d-52d4-4be1-b375-438a86e7e348',
        label: '黑河市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: 'f09a3b3a-f68f-4941-a504-551a2f9d3275',
        label: '齐齐哈尔市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      },
      {
        value: '4a70ff61-9fd8-4af4-8d42-5359d5bf1a58',
        label: '绥化市',
        ProvinceId: '220c349a-b73a-426a-b250-4b27e59c45e8'
      }
    ],
    value: '220c349a-b73a-426a-b250-4b27e59c45e8',
    label: '黑龙江省'
  },
  {
    children: [
      {
        value: 'ef89b763-e04e-4b16-94b0-56be622bf862',
        label: '喀什地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: 'c7ca0469-746d-414a-977f-481104fff97d',
        label: '巴音郭楞蒙古自治州',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: 'e471d605-826b-444d-a0c0-46fe5cbac943',
        label: '吐鲁番地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '6cd445c1-ce8b-4b25-9af1-2a57a7dbc1b6',
        label: '克孜勒苏柯尔克孜自治州',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: 'f542c2be-abae-44a4-a281-13dae0c7d66d',
        label: '昌吉回族自治州',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '462a6b1f-b5a5-4350-895c-018ad47721ac',
        label: '伊犁哈萨克自治州',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '8c4cebe8-c616-4498-995a-7f7e1fa65f07',
        label: '阿勒泰地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '0f2f4670-6283-45e5-af21-94491c16b1c4',
        label: '塔城地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '5ab6df27-de2a-466a-936e-c30a0df85a7f',
        label: '阿克苏地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '4e147b7e-f721-40cc-b231-c9cf1bf67559',
        label: '哈密地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '95e02f24-b82a-44bc-926d-c66bf54678a1',
        label: '乌鲁木齐市',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '12610052-dd77-4979-aa95-ddb7934c0c99',
        label: '省直辖行政单位',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '29f008a3-f9c8-440c-810f-fdd318b2b1ec',
        label: '博尔塔拉蒙古自治州',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '6c71deb8-fb1a-44dc-88da-f8f7d54242c1',
        label: '克拉玛依市',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      },
      {
        value: '08ae5f6e-006e-4130-8417-dfe8e24a916a',
        label: '和田地区',
        ProvinceId: '07996592-1ab7-4669-996d-4efc79d5340b'
      }
    ],
    value: '07996592-1ab7-4669-996d-4efc79d5340b',
    label: '新疆维吾尔自治区'
  },
  {
    children: [
      {
        value: '9420aade-7fcb-47b3-bac1-ea204d253a40',
        label: '北京市',
        ProvinceId: '359418ff-6598-4a5a-900c-5d6ef2fb42e5'
      }
    ],
    value: '359418ff-6598-4a5a-900c-5d6ef2fb42e5',
    label: '北京'
  },
  {
    children: [
      {
        value: 'f1afba3d-170d-40b7-939c-e6687fc40ab3',
        label: '汕尾市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '6f737af5-7142-4e7f-a734-f0272c881c4e',
        label: '中山市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'e47a0e01-778e-4184-9f1c-ecd0604e1e99',
        label: '韶关市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '5cb06346-4b4b-49ff-8d49-df753ed10a22',
        label: '东莞市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '9ea06802-3ef6-411b-8af4-fdb1281335bf',
        label: '江门市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'a9df690b-4c9c-44bb-b60e-c531117dd43d',
        label: '茂名市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'c85c178d-1874-486a-89bb-c5aa4d3cd3d9',
        label: '佛山市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '99217488-d2d0-4d10-a9c5-cb2108a6daa5',
        label: '广州市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'bb917ed7-331e-4837-94bb-c8edeb61321a',
        label: '珠海市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'feed34bd-0081-4161-a6de-9ff498c1a310',
        label: '湛江市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'c42324d7-0ccc-4929-8a3f-900b699be790',
        label: '深圳市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '106a7194-3489-4a8f-92f8-0ff5ebbcffb8',
        label: '云浮市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'f82a2227-20b4-4ca2-a78d-2c74ce1a76b4',
        label: '河源市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'b7fc9f77-89a8-426b-a7a3-2d7116a5a452',
        label: '惠州市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '82636d8e-2820-4fb3-b57b-4b2d11780801',
        label: '阳江市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '9c2c6967-8f28-4f78-bc84-41523e931833',
        label: '汕头市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'a88a13bd-0d47-4623-bc6a-3d0416790838',
        label: '揭阳市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'c7b2883b-ec94-4360-b1bc-37b6f83254ef',
        label: '清远市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'a0b51a42-4f66-4ec3-a65e-51d61a89b4b8',
        label: '潮州市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: 'bdba0f6f-35cf-456e-808c-567b53be0ba6',
        label: '肇庆市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      },
      {
        value: '21c8e3c8-3a2b-4194-b4a4-68be293aa6ad',
        label: '梅州市',
        ProvinceId: '0aa32b24-b795-49d8-b37b-619c8335343a'
      }
    ],
    value: '0aa32b24-b795-49d8-b37b-619c8335343a',
    label: '广东省'
  },
  {
    children: [
      {
        value: '68771343-b675-4224-b6b3-599045ae279b',
        label: '昌都地区',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      },
      {
        value: '4745936a-32b9-4db4-9909-5b71b6c2998b',
        label: '那曲地区',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      },
      {
        value: '6ebb88b4-711b-4641-ae75-0448a55cb91d',
        label: '林芝地区',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      },
      {
        value: 'a2b82a3c-0f51-49d3-ba50-cd2e5745168f',
        label: '阿里地区',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      },
      {
        value: '1118df59-f071-4ac9-b072-db053b509ee1',
        label: '日喀则地区',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      },
      {
        value: 'de67eb5f-592f-4887-a796-b8260b714b69',
        label: '拉萨市',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      },
      {
        value: 'b3afcc88-7eb6-4631-b0f9-ab62da1d81b6',
        label: '山南地区',
        ProvinceId: '76b136e0-c072-4d6b-9049-6a0070f7f27f'
      }
    ],
    value: '76b136e0-c072-4d6b-9049-6a0070f7f27f',
    label: '西藏自治区'
  },
  {
    children: [
      {
        value: '631afada-1f81-4af4-b6fd-b45af91145d3',
        label: '诸城市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: 'e9f524ef-040e-4c38-aace-af5817737913',
        label: '聊城市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '50f0a005-db7e-40a5-a92d-d50076cd14ad',
        label: '济宁市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '1dc771c9-c07c-450f-b932-843ef0dd0c16',
        label: '临沂市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: 'dc2c5dec-fca0-4e10-ad9d-88b2e70f9e0b',
        label: '威海市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '9ba4d576-ffb8-482b-8036-9a091606076d',
        label: '德州市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '52a71753-7068-401c-a332-97d3284e1a70',
        label: '东营市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '8071d483-4845-474f-ba0f-703885dc0886',
        label: '济南市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: 'f50dab6d-c95b-4b3c-87b4-0571f02b80e2',
        label: '潍坊市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: 'eba6bee6-5fe5-4a0d-bde8-0f373cea9ccd',
        label: '烟台市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: 'c5155eed-38cb-4acb-a503-1371ad8a1739',
        label: '荷泽市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '09013e76-4561-4de5-b431-5e1cf75228a0',
        label: '枣庄市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '78956740-b4f1-4120-aabb-39f6abb0f0f7',
        label: '淄博市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '8e211b85-20ec-47dd-9776-36919a586c20',
        label: '滨州市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '0deae1d7-d490-4cf7-a5c4-fe39e5823584',
        label: '日照市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: 'bcaa135c-d1ad-415d-8d43-e6fed4ec545e',
        label: '青岛市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '261cf8a2-9cbf-4cf5-875c-e101e60d99ed',
        label: '泰安市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      },
      {
        value: '89c30809-c6d3-49a0-9edb-ee9525fdc9ff',
        label: '莱芜市',
        ProvinceId: '422c27f5-518f-4621-a787-7425c5296d60'
      }
    ],
    value: '422c27f5-518f-4621-a787-7425c5296d60',
    label: '山东省'
  },
  {
    children: [
      {
        value: '9f7a8666-cbc7-491d-9155-e99af7f812ca',
        label: '九江市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '94fc4746-af21-4099-b414-feec114b7dfb',
        label: '鹰潭市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '738b9cd6-19af-4f85-a566-4b4ecf6a78b9',
        label: '上饶市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '5c90ed55-a88b-4ce9-8709-50750346ba69',
        label: '南昌市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: 'a4430752-1b2a-4410-9c3d-025b04deea4b',
        label: '抚州市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: 'd911bb0e-f9ae-4494-910e-1c2c45e906f2',
        label: '宜春市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '06d61439-88dc-4823-8778-6e78607f2692',
        label: '吉安市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '9e8e439d-8b91-4cda-904b-68f2232e8d35',
        label: '景德镇市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '6059a82d-7f9d-4863-b013-cfc723ef8411',
        label: '赣州市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: 'ecbd783c-4a22-4270-a94d-d95fec7ebc8d',
        label: '萍乡市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      },
      {
        value: '64516a4d-864d-4075-b331-b036afe2084c',
        label: '新余市',
        ProvinceId: '33361fe8-7bf7-4697-a5a7-79d5a61fe269'
      }
    ],
    value: '33361fe8-7bf7-4697-a5a7-79d5a61fe269',
    label: '江西省'
  },
  {
    children: [
      {
        value: '6bef71a6-b05e-42a4-aec3-bd3712ae117c',
        label: '漯河市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '04c60821-4682-4d78-a290-da8a2c0acd9a',
        label: '新乡市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '8075dd62-b2b8-4dc7-b2ac-ced0ee7d7618',
        label: '许昌市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '5d1b9efb-c41a-4178-b693-7ab5889057ca',
        label: '信阳市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '3c377d19-2eca-4be9-a1f1-77a8177090d0',
        label: '安阳市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '4ab3f1d8-1aa5-491b-b5f2-93097858cbfb',
        label: '洛阳市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '26fa03cc-20a7-4eec-b9b2-9b0509f7a0b7',
        label: '三门峡市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: 'd9e45a5a-40eb-4f4b-a2b2-230612fbd559',
        label: '平顶山市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '9fa69e67-59ed-420b-8532-243b6eab9dce',
        label: '焦作市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: 'ee4776d0-2ac0-46f4-89ca-29e2aa73a16b',
        label: '周口市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: 'ec8d15e5-43fb-412d-9074-1c06bf4110cc',
        label: '濮阳市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '8d7a76b8-f490-48a1-a8ac-5258864ebe47',
        label: '南阳市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '8be92b40-e74f-48ea-8161-5c3c70468ab7',
        label: '驻马店市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '325ec6fe-92c2-488c-8194-35dd0d301491',
        label: '郑州市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '6e2a045c-0033-4353-836e-363449127a42',
        label: '鹤壁市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: '6cfca218-3815-4d08-a36e-e61a663e13ed',
        label: '开封市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      },
      {
        value: 'd6957be9-f7e0-46f4-9c68-e33185803898',
        label: '商丘市',
        ProvinceId: 'd6044f33-a608-4838-b330-8872a2aca9e5'
      }
    ],
    value: 'd6044f33-a608-4838-b330-8872a2aca9e5',
    label: '河南省'
  },
  {
    children: [
      {
        value: 'd6d2424e-a086-4e79-ba61-68dafaa1ea6d',
        label: '沧州市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: 'db3c573e-db36-4513-b5ca-56fc3fbd0d7a',
        label: '石家庄市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: 'e3ce1dfe-25ba-40d2-96eb-174916297f35',
        label: '唐山市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: '6fd237e0-3887-478f-952c-07d35fe8f07c',
        label: '邢台市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: '1e5586d9-dfe4-4848-bd05-201c2b2dbd91',
        label: '邯郸市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: '5bd6eccb-4dc9-4602-937a-a00d3d779df3',
        label: '衡水市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: '163540e0-190f-4b12-8f9a-9e4ea4dcfb81',
        label: '承德市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: '25b9e80d-fc8a-4cfb-b306-93b73768bb37',
        label: '保定市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: 'aa4ea828-9694-4a0e-ada4-94278586204e',
        label: '张家口市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: 'f0cba361-5604-418f-a388-c0aa5b04651f',
        label: '秦皇岛市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      },
      {
        value: '574a224c-5de1-4ccf-9064-ab339b00ddc0',
        label: '廊坊市',
        ProvinceId: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541'
      }
    ],
    value: 'cf7ab7e5-9f70-44a2-ad03-8a1d500b4541',
    label: '河北省'
  },
  {
    children: [],
    value: '4a725e57-33e8-46ce-8a4a-8b7ad10f3a72',
    label: '台湾省'
  },
  {
    children: [
      {
        value: '2629ca47-5db0-4549-9654-aa704d6a04b8',
        label: '襄樊市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: 'd2b033ac-b8a4-4c44-aec7-ac4c7988cc65',
        label: '省直辖行政单位',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '0b8e8d8f-08d8-4fef-b226-c20823c16696',
        label: '黄冈市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: 'f2da9bf7-27dc-4f84-a776-b99d2dad71f5',
        label: '武汉市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: 'c1457a45-41e3-4ecc-a157-b7bd8bf4f4f4',
        label: '随州市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: 'e9ca6cc6-31d9-44b6-bfb1-d000453992b3',
        label: '孝感市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '82398c13-a372-437d-92ff-c4398bc4d27c',
        label: '恩施土家族苗族自治州',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '2083bd22-10ff-4b8f-93c5-cb41287130c3',
        label: '鄂州市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: 'ea0913ed-50aa-448a-8370-9109c7351715',
        label: '十堰市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '7beaee16-f71a-4b85-a9ea-7cc4a4e6d77c',
        label: '荆门市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '803a43a3-cbe7-4f92-978a-115df72c0c15',
        label: '黄石市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '788a3c5e-d63d-40c2-8d19-3fdb26514a16',
        label: '宜昌市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '1df75cb6-88c5-4969-86b9-e94fb00b4995',
        label: '荆州市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      },
      {
        value: '6fdf8a3d-7f1b-442d-a66a-eae7e892e4e3',
        label: '咸宁市',
        ProvinceId: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829'
      }
    ],
    value: 'c42a984d-fb78-4b5f-a31d-8f3a7ea6c829',
    label: '湖北省'
  },
  {
    children: [
      {
        value: '8b21688b-b79b-4bf7-be0f-6dc2c42d2a7d',
        label: '重庆市',
        ProvinceId: '27559624-3add-4f81-a899-8fa7d281a47f'
      }
    ],
    value: '27559624-3add-4f81-a899-8fa7d281a47f',
    label: '重庆'
  },
  {
    children: [
      {
        value: 'a7fc0fa2-4982-47ca-8fee-6cc4cae22fe6',
        label: '乌海市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: '0d97a16b-4683-4f83-8beb-746497b51da4',
        label: '乌兰察布市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: 'eb22903c-ca4e-42cb-8854-9c8e0bc1e8e7',
        label: '呼和浩特市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: 'f311239c-790d-49fd-88ec-dac0f3acf762',
        label: '鄂尔多斯市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: '43028025-6c98-4edd-8385-b0604cb5e145',
        label: '锡林郭勒盟',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: '596c467b-fdb7-40a0-b2c3-0cba73bea688',
        label: '呼伦贝尔市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: 'd9f61d3d-f5d5-4679-9d13-093f2dd6fd47',
        label: '巴彦淖尔市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: '12cdebac-fb01-49dc-8ef8-03527bcd4fde',
        label: '阿拉善盟',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: '41721a69-40bf-4f82-bb96-2dd3c03b9707',
        label: '包头市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: 'e57e376c-8aa3-42cf-915e-3334497d4975',
        label: '赤峰市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: 'eca70a5c-547d-41fd-8a22-e7cd2886b04b',
        label: '通辽市',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      },
      {
        value: '05f3a1fb-263a-47b5-bc41-e7ea70919573',
        label: '兴安盟',
        ProvinceId: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5'
      }
    ],
    value: 'e68ffd4c-600a-477d-86f9-99b73e9c52f5',
    label: '内蒙古自治区'
  },
  {
    children: [
      {
        value: '7203523b-01b4-4052-82bb-775d5d04952f',
        label: '天津市',
        ProvinceId: '21af3a35-cb78-47b3-ac79-9b9bb3bacfff'
      }
    ],
    value: '21af3a35-cb78-47b3-ac79-9b9bb3bacfff',
    label: '天津'
  },
  {
    children: [
      {
        value: '3e972ebb-7340-42ff-b25a-7b3e1b38b280',
        label: '酒泉市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: 'be57a30e-88e9-45d5-9f43-7fabf7b6615f',
        label: '临夏回族自治州',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '68e27db2-8928-46f1-b50b-6bbafcd5a41d',
        label: '天水市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '0ac0c66b-3c57-4b35-b964-6e73c240c4b9',
        label: '白银市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '792104f9-a26a-45b6-9405-93595f267d7e',
        label: '定西市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: 'ab9a38b2-8537-437f-ba29-87a0baeeb64d',
        label: '兰州市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: 'a615e89f-bab5-458e-a697-be2cec8f20c1',
        label: '甘南藏族自治州',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '5803e1a6-079b-424d-b930-c8f0e1f63738',
        label: '张掖市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '4478ea57-28ea-47f7-a783-4ee899ee4283',
        label: '陇南市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: 'eeeff971-9b59-4610-baab-557035c74623',
        label: '嘉峪关市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: 'cf4bcf15-163b-4786-93b3-eb71b6591549',
        label: '庆阳市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '7fcda938-803c-4528-9c6d-dfc1bd233689',
        label: '武威市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '234b16ea-20f4-41ac-a1f9-e0ccee283ca7',
        label: '金昌市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      },
      {
        value: '68cc49c9-f2f1-43c2-812b-fb4702326c0b',
        label: '平凉市',
        ProvinceId: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909'
      }
    ],
    value: '7d7c42ad-7de5-4c18-813c-9c1d97c7c909',
    label: '甘肃省'
  },
  {
    children: [
      {
        value: '23d6f24a-a0df-44e6-bde9-f923aa5bc907',
        label: '铜陵市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '7e1bdb1f-bd6d-44d1-8ab7-f437242decfb',
        label: '亳州市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '306da6ba-a233-4bb5-854d-e3350170275d',
        label: '巢湖市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '9ddae24c-c6d8-4f13-ba69-31c32b50df43',
        label: '黄山市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'c51d9ee4-2a92-410f-97ed-1027fb4cf7b5',
        label: '安庆市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '4a864e7e-5fa4-48a1-b840-19707301197e',
        label: '宿州市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'f63bf98c-1597-4fda-aaf4-171296d17866',
        label: '六安市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'c9a3d30a-eaec-4184-977f-c6709a07ab8a',
        label: '蚌埠市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'd4107a05-c17e-47c1-af35-c3eb19956306',
        label: '合肥市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'fe74b0e9-ad83-4855-8583-c49193d04daa',
        label: '池州市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '6e451140-b303-4aa1-a20b-d507c855cbd2',
        label: '芜湖市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '86275ac2-cb68-4607-8f41-c09956c3bab6',
        label: '宣城市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'bfe6feef-7b8c-4301-9810-b2ad8adb88d4',
        label: '淮南市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'df8eacb2-78e6-4867-af8f-90671182a896',
        label: '阜阳市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: 'f6a9689a-b970-4ae0-b1c7-a047a3ff33a1',
        label: '滁州市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '9907d78b-7042-451e-9a1d-6e5639af1aa7',
        label: '马鞍山市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      },
      {
        value: '5e04f04a-a6df-4dcf-8e3b-5fd10442cb61',
        label: '淮北市',
        ProvinceId: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4'
      }
    ],
    value: '1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4',
    label: '安徽省'
  },
  {
    children: [
      {
        value: 'a3521055-25db-4106-8cb3-6ef1e3bde788',
        label: '厦门市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: '2feab6a4-25b6-43ee-b46f-77bca6152336',
        label: '南平市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: 'b1e7c5e9-a8bc-4145-b426-ad2e3703d73f',
        label: '三明市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: '75e8a1c2-8835-4642-bfb8-d7e58351409a',
        label: '宁德市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: '18b1ccf4-f2b0-4b91-aab9-4f6d2b081a08',
        label: '莆田市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: '869d2a60-ca89-43d7-84b6-5514b0f02f66',
        label: '福州市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: 'e480f44e-9692-4a11-b9b8-5f4cbc21682b',
        label: '漳州市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: 'd6ebb4b5-1cb4-4271-b666-f52c1e3383f0',
        label: '龙岩市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      },
      {
        value: '995084b3-5206-4c09-a9ee-f7cfcb43f9c2',
        label: '泉州市',
        ProvinceId: '3a7270c6-bcda-4374-a931-c1850f977053'
      }
    ],
    value: '3a7270c6-bcda-4374-a931-c1850f977053',
    label: '福建省'
  },
  {
    children: [
      {
        value: '7cca8dc8-be02-4f7e-84a2-fdf9e7988e32',
        label: '广安市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '26b77110-4feb-4172-b9fe-f39c66410547',
        label: '阿坝藏族羌族自治州',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '6f0ce905-93a1-4fbd-8e7c-503896d3b882',
        label: '广元市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '37048ec1-dc9f-4323-9a7d-505e2ed35b4f',
        label: '遂宁市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'c174bb33-a116-4c36-945c-55922b1b8a8f',
        label: '乐山市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'ac9c9bf5-b8bd-429f-a3c2-4934413e2ae3',
        label: '凉山彝族自治州',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'bda897ba-01e2-474e-b5cb-49f678a8cb86',
        label: '泸州市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '43a371ca-0ec6-405d-b590-472dee86b150',
        label: '南充市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'a0cfdf55-4393-467c-bb7c-0ba97f5bd7af',
        label: '内江市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '7eb8fa5e-ccae-45a6-b341-027c6b9fa469',
        label: '宜宾市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '67cef868-7299-407f-9e38-1df737c5ad61',
        label: '资阳市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '66710c65-0bdf-4840-b055-267a3592233d',
        label: '巴中市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'b082e7eb-6d93-4de5-ba66-2904f14fe8fd',
        label: '攀枝花市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'ecd6ec22-b762-4464-a04c-de4171ad595d',
        label: '自贡市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '0562106a-4304-45e7-84af-ba6fd8fa8fc6',
        label: '雅安市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'e09d55e2-02d9-4603-b9a8-c1c1627aa871',
        label: '眉山市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'fbca6643-a831-4a86-aa6d-b48f34734383',
        label: '绵阳市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'bb79feeb-04f0-4843-ae2f-73e23db2a4d2',
        label: '德阳市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: '2cf23cca-a7b9-4826-a8ef-6dd900ffae3b',
        label: '成都市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'd49eba1b-eab0-4322-a8aa-8b16f7466c63',
        label: '甘孜藏族自治州',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      },
      {
        value: 'e4894567-4364-40ad-afed-85e04f156f8d',
        label: '达州市',
        ProvinceId: 'd2237310-ad42-49f9-bd20-c4705ee8c260'
      }
    ],
    value: 'd2237310-ad42-49f9-bd20-c4705ee8c260',
    label: '四川省'
  },
  {
    children: [
      {
        value: '950c8ea4-103e-48c3-834b-88e3c2abc402',
        label: '无锡市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: 'c63f0ef9-0c98-45a0-8cb1-b5c36bc96b83',
        label: '常州市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '551c7d77-ebfc-47cd-bcfa-bc888187a82d',
        label: '盐城市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '32ed1176-5960-4749-a034-d07dbe314ca6',
        label: '苏州市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '224d3443-baea-4965-bbec-d0b4bc0b0a8d',
        label: '宿迁市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '74c98897-6588-4e2b-9edf-1de7aa18bef9',
        label: '徐州市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: 'cc861651-6672-49d4-945e-347931a744f1',
        label: '淮安市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '2f50ff12-6a10-4b8c-9d6a-167240c8e4d3',
        label: '连云港市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '6f14e5e3-bcf1-4e56-b844-51f83f90b7b7',
        label: '南京市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '74cfa48a-8fc2-47c0-a443-5222c832000c',
        label: '镇江市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '8406cf80-f252-4bf8-9e71-64af14ee2bae',
        label: '南通市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '6f15ab2f-4132-4a31-9e95-ee7920d39290',
        label: '扬州市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      },
      {
        value: '18f38636-c894-44cb-97c8-e45142993b0a',
        label: '泰州市',
        ProvinceId: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16'
      }
    ],
    value: 'c11221f4-59a9-4b51-97a7-ca30bcfa9b16',
    label: '江苏省'
  },
  {
    children: [
      {
        value: 'dc1f42ce-1740-417d-92d8-e4d7e82919d2',
        label: '吉林市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: '74e886bb-ec2d-47cd-8596-5e2b9a41607a',
        label: '松原市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: '0b8e19df-3f55-4b22-9c93-5c471239f7d0',
        label: '四平市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: '00d4a630-f0ed-4f6b-a03e-492af4e16ef5',
        label: '延边朝鲜族自治州',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: '844dc883-0d02-4acc-b44c-4ef8c441ff17',
        label: '长春市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: 'f00ad8a7-be37-483d-b665-373c8c030d33',
        label: '白城市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: '381cc1d0-0bdf-4992-af36-0ad7dab609bc',
        label: '白山市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: 'e8699bfb-8ad9-42a0-b3e7-2b0f97e2598c',
        label: '辽源市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      },
      {
        value: 'cd711677-4415-4c98-b925-95393c2bf436',
        label: '通化市',
        ProvinceId: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b'
      }
    ],
    value: '7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b',
    label: '吉林省'
  },
  {
    children: [
      {
        value: 'b7a67c05-0447-459e-ba0b-83bc1c1dd786',
        label: '本溪市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '3ed6a8d1-9052-4502-9cbb-d8463593fb4e',
        label: '丹东市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '93170404-dcc4-4321-9275-bc973484a7f7',
        label: '大连市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '9deb1a40-5240-43f0-b588-ac62c4a7df00',
        label: '阜新市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: 'f2aa8698-9333-4c82-b9da-2f9d5e63d92e',
        label: '抚顺市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: 'b4fe6a75-0689-4c21-aa42-3134b2010e99',
        label: '铁岭市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: 'ba82f6f7-294f-4b31-8e48-018c663e851f',
        label: '锦州市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '04061f5a-3190-4b61-bdc6-12c77d276b89',
        label: '沈阳市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '9f8a938a-aee1-4c0f-ba37-37b378fce03a',
        label: '葫芦岛市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '72fb1f97-c187-49fa-9c5d-3f24cc61c299',
        label: '鞍山市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '03b873a1-a8c8-4c87-add7-5667952c7a0a',
        label: '朝阳市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '02b5dfeb-8e1d-4786-9969-e3a5564816f0',
        label: '盘锦市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: '697cceab-09d6-4ee9-bbbf-ea8f14365b54',
        label: '辽阳市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      },
      {
        value: 'b5d085d6-cf5f-4067-a4af-fbffe4ad3074',
        label: '营口市',
        ProvinceId: 'ecb21b7a-4dae-4af9-b9af-d54259223821'
      }
    ],
    value: 'ecb21b7a-4dae-4af9-b9af-d54259223821',
    label: '辽宁省'
  },
  {
    children: [
      {
        value: 'afada3a8-67b3-416d-9d64-57f00b9d3512',
        label: '阳泉市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: 'c9dd0c1f-8dc2-4fe0-b9c6-5f8717ef8066',
        label: '晋城市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '6788ef60-1076-423c-9090-3f874f856fb8',
        label: '晋中市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '143f8bf0-82e1-4768-89fd-3ffa103cfb74',
        label: '太原市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '7c1ce91d-566f-4942-bbf8-123622542150',
        label: '大同市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: 'ed6af995-d759-44f4-b5db-1e678b01f5bb',
        label: '忻州市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '437237fb-73ad-4d92-b385-20c19c25ba33',
        label: '吕梁市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: 'bcc48e96-12b1-4d19-850b-c155d3407b4d',
        label: '长治市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '0ccc7d65-da6e-41da-bbd9-69ce8cedebdc',
        label: '临汾市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '403c0130-b016-4ea5-acc7-9a5a68a31653',
        label: '运城市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      },
      {
        value: '666d89b3-9f6d-4fb4-9baf-8a893998e7c9',
        label: '朔州市',
        ProvinceId: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1'
      }
    ],
    value: 'f8941f33-06e1-4edc-bf2d-d96daf10efc1',
    label: '山西省'
  },
  {
    children: [
      {
        value: '0ef9d878-f247-495d-b157-8b58b80e56af',
        label: '株洲市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '1a8de372-716b-4d83-b065-9138b22f1798',
        label: '张家界市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '3908d33d-49d5-4b0d-9662-6db67069625b',
        label: '湘西土家族苗族自治州',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '4bee87dd-4a0c-4253-86e0-c0b42e5fb7fe',
        label: '益阳市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: 'f86fc5c4-839c-4b55-8d21-ae72e932fbbe',
        label: '怀化市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '0c7ab447-6b19-4b83-9af2-22959dcaa0f2',
        label: '郴州市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: 'e67edccb-baef-49d3-8aaf-29065726afcd',
        label: '娄底市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: 'a88d1e25-1403-453a-b33d-247c7775b067',
        label: '邵阳市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: 'f5d9dd69-bad2-47ee-bd7c-31c6dcddc9e8',
        label: '衡阳市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: 'cafda78f-f7b9-4049-a1c0-2f1a23037998',
        label: '常德市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: 'e0bedbbe-47ee-486a-8b66-1287b93d0a2b',
        label: '湘潭市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '2f1747e4-f079-4aed-87f2-3fcfe47f901a',
        label: '永州市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '2057b61e-6726-4544-99de-454be56ad9e8',
        label: '长沙市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      },
      {
        value: '29de749c-e03d-4530-8fd3-5d82fb936e94',
        label: '岳阳市',
        ProvinceId: '360c371c-c675-4957-827e-e0a74344459f'
      }
    ],
    value: '360c371c-c675-4957-827e-e0a74344459f',
    label: '湖南省'
  }
];

const cityMock = {
  'GET /api/city': (_, res) => {
    res.json(packSuccRes(city, city.length));
  },
};

export default delay(cityMock, Math.random() * 3000);
