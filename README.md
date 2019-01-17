# Characters of the Three Kingdoms - 三国人物结构化数据

三国人物结构化数据

## 为什么会有这个项目

* 需求1：摆脱网上那些长篇累牍的文章；

* 需求2：只是想简单查看下人物姓甚名谁、生辰八字、家住何地、三姑六婆；

* 需求3：只是想简单查看下人物的历史简介、演义简介；

* 需求4：只是想简单查看下人物的历史评价；

* 需求5：只是想简单查看下人物的...

* 需求6：想集中查看多个人物的资料；

* 需求7：想获取完整而不累赘的结构化数据，自己开发应用尽情发挥；

* ...

* 需求N：...

## 数据来源

数据主要整理自 [维基百科](https://www.wikipedia.org/) 、[百度百科](https://baike.baidu.com/) 和其他网络资源。

## 数据展示 DEMO

1. 所有已经完成的人物数据可查看数据展示 [DEMO](http://myvin.github.io/Characters_of_the_Three_Kingdoms)。

2. DEMO 页面使用 `ajax` 获取 `characters` 文件夹的 `json` 文件，若要本地运行 DEMO 页面，需本地启动 `server`。将项目 `clone` 到本地后，执行：

```
npm run start
```

或

```
gulp
```

然后浏览器打开 `localhost:4300` 即可。

3. 图例

<img src="images/screenshots/screenshot.gif" alt="screenshot">

## Contribute

在 `/characters/` 下修改、添加相关人物的 `json` 文件即可，如果有头像，将头像文件放到 `/images/avatars/` 下即可。如果有重名的人物，可在人名后添加数字以示区别。

## 数据示例

```
{
  // 姓名
  "name": "刘备",
  // 字
  "courtesyName": "玄德",
  // 号
  "pseudonym": null,
  // 其他称谓
  "aliase": [
    {
      "name": "汉先主",
      "desc": null
    },
    {
      "name": "先主",
      "desc": "三国志、华阳国志等称为先主"
    },
    {
      "name": "汉主",
      "desc": "资治通鉴称刘备父子为汉主"
    }
  ],
  // 乳名、小名、小字
  "infantName": null,
  // 性别：1 男，2 女
  "gender": 1,
  // 头像
  "avatar": "./images/avatars/刘备.jpg",
  // 所属势力
  "faction": "蜀汉",
  // 出生日期
  "birthdate": "161年",
  // 出生地点：古时地名
  "birthplace": "幽州涿郡涿县",
  // 出生地点：现在地名
  "birthplacePresentDay": "河北省涿州市",
  // 逝世日期
  "deathdate": "223年6月10日",
  // 逝世地点：古时地名
  "deathplace": "白帝城永安宫",
  // 逝世地点：现在地名
  "deathplacePresentDay": "重庆市奉节县",
  // 在位时期
  "tenure": "汉中王：219年-221年；蜀主：221年5月15日-223年6月10日",
  // 职位
  "position": ["蜀国皇帝"],
  // 封爵
  "peerage": null,
  // 封地
  "enfeoffment": null,
  // 侍奉的帝王
  "monarch": null,
  // 谥号
  "posthumousName": ["昭烈皇帝"],
  // 庙号
  "templeName": ["烈祖"],
  // 历史上的简介
  "historicalBriefIIntroduction": "蜀汉的开国皇帝，相传是汉景帝之子中山靖王刘胜的后代...",
  // 演义上的简介
  "novelisticBriefIIntroduction": "刘备，蜀汉的开国皇帝，汉景帝之子中山靖王刘胜的后代...",
  // 家庭成员
  // 若名不详，则 name 字段为 名不详
  "family": {
    "father": {
      "character": [
        {
          "name": "刘弘",
          "desc": "东汉末年的州郡小官"
        }
      ],
      "desc": null
    },
    "mother": {
      "character": [
        {
          "name": "名不详",
          "desc": null
        }
      ],
      "desc": null
    },
    "brothers": null,
    "sisters": null,
    "spouse": {
      "character": [
        {
          "name": "甘夫人",
          "desc": "沛人，妾室，刘禅生母，曾于长阪被困，幸得赵云解救。后病死，谥皇思夫人，后再追谥昭烈皇后，与刘备合葬。"
        },
        {
          "name": "糜夫人",
          "desc": "麋竺之妹，于刘备在豫州落难时，麋竺将她嫁给刘备。"
        },
        {
          "name": "孙夫人",
          "desc": "孙权之妹，与刘备结为政治婚姻，后刘备入蜀，孙权接回她，再无记录。"
        },
        {
          "name": "穆皇后",
          "desc": "吴氏，吴懿之妹，刘瑁遗孀，刘备入蜀后纳为夫人，后为汉中王后。刘禅即位时，尊她为皇太后，称长乐宫。延熙八年病死，与刘备合葬。"
        }
      ],
      "desc": "甘夫人被刘备纳为妾室时，因他“数丧嫡室”，而主内事。数位嫡室的身份已不可考。仅知建安元年（196年），吕布曾俘虏刘备的妻儿[32]，转至广陵郡海西县时，又娶了麋夫人。次子刘永和三子刘理各自的生母亦不可考，仅知非正室且非同一人。"
    },
    "sons": {
      "character": [
        {
          "name": "刘禅",
          "desc": "字公嗣，刘备长子。后登上皇位。乳名阿斗。"
        },
        {
          "name": "刘永",
          "desc": "字公寿，刘备次子。先为鲁王，后封为甘陵王。与刘禅宠臣黄皓不和，被刘禅疏远。后东迁洛阳，拜奉车都尉，封为乡侯。"
        },
        {
          "name": "刘理",
          "desc": "字奉孝，刘备三子。先为梁王，后封为安平王。早卒，谥为悼王。"
        },
        {
          "name": "刘封",
          "desc": "刘备养子。本姓寇，刘备入蜀后委任为将，但因关羽兵败时不予救援及逼反孟达丧失上庸之责遭赐死。"
        }
      ],
      "desc": null
    },
    "daughters": {
      "character": [
        {
          "name": "名不详",
          "desc": null
        },
        {
          "name": "名不详",
          "desc": null
        }
      ],
      "desc": "有二女于刘备南逃至长坂时被曹将曹纯所俘。"
    }
  },
  // 历史评价
  "historicalEvaluations": [
    "刘元起：“吾宗中有此儿，非常人也。”（《三国志·蜀书·先主传第二》）",
    "陈登：“雄姿杰出，有王霸之略，吾敬刘玄德。”（《三国志·魏书·桓二陈徐卫卢传第二十二》）",
    "袁绍：“刘玄德弘雅有信义，今徐州乐戴之，诚副所望也。”（《三国志·蜀书·先主传第二》）"
  ]
}
```

## 已经完成的人物数据

所有已经完成的人物数据可查看 [DEMO](http://myvin.github.io/Characters_of_the_Three_Kingdoms)。

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">刘备</td>
      <td align="center" valign="middle">诸葛亮</td>
      <td align="center" valign="middle">曹操</td>
      <td align="center" valign="middle">孙权</td>
      <td align="center" valign="middle">张让</td>
      <td align="center" valign="middle">张角</td>
      <td align="center" valign="middle">张宝</td>
      <td align="center" valign="middle">张梁</td>
      <td align="center" valign="middle">张飞</td>
      <td align="center" valign="middle">张钧</td>
    </tr>
    <tr>
      <td align="center" valign="middle">张举</td>
      <td align="center" valign="middle">张纯</td>
      <td align="center" valign="middle">张济</td>
      <td align="center" valign="middle">张辽</td>
      <td align="center" valign="middle">张郃</td>
      <td align="center" valign="middle">张邈</td>
      <td align="center" valign="middle">张超</td>
      <td align="center" valign="middle">张杨</td>
      <td align="center" valign="middle">张虎</td>
      <td align="center" valign="middle">张统</td>
    </tr>
    <tr>
      <td align="center" valign="middle">张闿</td>
      <td align="center" valign="middle">张燕</td>
      <td align="center" valign="middle">张昭</td>
      <td align="center" valign="middle">张纮</td>
      <td align="center" valign="middle">张英</td>
      <td align="center" valign="middle">张勋</td>
      <td align="center" valign="middle">张绣</td>
      <td align="center" valign="middle">张鲁</td>
      <td align="center" valign="middle">张道陵</td>
      <td align="center" valign="middle">张衡</td>
    </tr>
    <tr>
      <td align="center" valign="middle">张𫖮</td>
      <td align="center" valign="middle">张南</td>
      <td align="center" valign="middle">张南</td>
      <td align="center" valign="middle">张武</td>
      <td align="center" valign="middle">张温</td>
      <td align="center" valign="middle">张温</td>
      <td align="center" valign="middle">张允</td>
      <td align="center" valign="middle">张横</td>
      <td align="center" valign="middle">张既</td>
      <td align="center" valign="middle">张卫</td>
    </tr>
    <tr>
      <td align="center" valign="middle">张松</td>
      <td align="center" valign="middle">张任</td>
      <td align="center" valign="middle">张肃</td>
      <td align="center" valign="middle">张翼</td>
      <td align="center" valign="middle">张著</td>
      <td align="center" valign="middle">张音</td>
      <td align="center" valign="middle">张爽</td>
      <td align="center" valign="middle">张裔</td>
      <td align="center" valign="middle">张达</td>
      <td align="center" valign="middle">张苞</td>
    </tr>
    <tr>
      <td align="center" valign="middle">张嶷</td>
      <td align="center" valign="middle">张休</td>
      <td align="center" valign="middle">张茂</td>
      <td align="center" valign="middle">张当</td>
      <td align="center" valign="middle">张特</td>
      <td align="center" valign="middle">张约</td>
      <td align="center" valign="middle">张缉</td>
      <td align="center" valign="middle">张布</td>
      <td align="center" valign="middle">张遵</td>
      <td align="center" valign="middle">张绍</td>
    </tr>
    <tr>
      <td align="center" valign="middle">张峻</td>
      <td align="center" valign="middle">张悌</td>
      <td align="center" valign="middle">张华</td>
      <td align="center" valign="middle">张相</td>
      <td align="center" valign="middle">张俭</td>
      <td align="center" valign="middle">张承</td>
      <td align="center" valign="middle">张承</td>
      <td align="center" valign="middle">张世平</td>
      <td align="center" valign="middle">张津</td>
      <td align="center" valign="middle">张弥</td>
    </tr>
    <tr>
      <td align="center" valign="middle">刘宏</td>
      <td align="center" valign="middle">刘焉</td>
      <td align="center" valign="middle">刘陶</td>
      <td align="center" valign="middle">刘陶</td>
      <td align="center" valign="middle">刘虞</td>
      <td align="center" valign="middle">刘岱</td>
      <td align="center" valign="middle">刘繇</td>
      <td align="center" valign="middle">刘舆</td>
      <td align="center" valign="middle">刘宠</td>
      <td align="center" valign="middle">刘表</td>
    </tr>
    <tr>
      <td align="center" valign="middle">刘琦</td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
      <td align="center" valign="middle"></td>
    </tr>
  </tbody>
</table>

## 意见建议

所有数据整理自网络，且鄙人才疏学浅，一定会有疏忽错误，欢迎指正。

如果你有好的建议或意见，欢迎提 issue 反馈。

## 联系方式

* Email: 851399101@qq.com

## 请喝咖啡

如果我的项目对你有帮助，可以请我喝杯~~咖啡~~白开水。

### 支付宝

<img src="https://raw.githubusercontent.com/myvin/miniprogram/master/9181893579988_.pic_hd.jpg" width="300" /> <img src="https://raw.githubusercontent.com/myvin/miniprogram/master/9191893579989_.pic.jpg" width="300" />

### 微信

<img src="https://raw.githubusercontent.com/myvin/miniprogram/master/9201893579990_.pic_hd.jpg" width="300" />

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, myvin
