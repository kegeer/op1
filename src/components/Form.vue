<template lang="html">
  <div>
    <h3>公益性行业专项 OPMD 患者登记表(初诊)</h3>
    <p>记录者:</p>
    <p>记录时间:</p>
    <table border="1">
      <tbody>
        <tr>
          <td rowspan="8">基本信息</td>
          <td>患者编号</td>
          <td></td>
          <td>患者姓名</td>
          <td></td>
          <td>性别</td>
          <td></td>
        </tr>
        <tr>
          <td>身份证号</td>
          <td colspan="2"></td>
          <td>就诊病历号</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>手机号</td>
          <td></td>
          <td>固话(加区号)</td>
          <td></td>
          <td>Email</td>
          <td></td>
        </tr>
        <tr>
          <td>住址</td>
          <td colspan="3"></td>
          <td>QQ/微信号</td>
          <td></td>
        </tr>
        <tr>
          <td>就业状态</td>
          <td colspan="3"></td>
          <td>(原)主要职业</td>
          <td></td>
        </tr>
        <tr>
          <td>教育程度</td>
          <td colspan="5"></td>
        </tr>
        <tr>
          <td>居住地区</td>
          <td colspan="5"></td>
        </tr>
        <tr>
          <td>居住状态</td>
          <td colspan="5"></td>
        </tr>

      </tbody>
    </table>
  <br><br>
    <table>
      <!-- 流行病学 -->
      <tr>
        <td rowspan="8">流行病学调查</td>
        <td rowspan="4">吸烟</td>
        <td>吸烟</td>
        <td></td>
        <td>始吸年龄</td>
        <td>()岁</td>
      </tr>
      <tr>
        <td>是否戒烟</td>
        <td></td>
        <td>平均烟量</td>
        <td>支/天</td>
      </tr>
      <tr>
        <td>吸烟类型</td>
        <td></td>
        <td>戒烟时长</td>
        <td></td>
      </tr>
      <tr>
        <td>备注</td>
        <td></td>
        <td>被动吸烟</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="4">饮酒</td>
        <td>饮酒</td>
        <td></td>
        <td>开始年龄</td>
        <td></td>
      </tr>
      <tr>
        <td>是否戒酒</td>
        <td></td>
        <td>平均酒量</td>
        <td>毫升/天</td>
      </tr>
      <tr>
        <td>主要类型</td>
        <td></td>
        <td>戒酒时长</td>
        <td></td>
      </tr>
      <tr>
        <td>备注</td>
        <td colspan="3" height="60px"></td>
      </tr>
    </table>
    <br><br>
    <table>
      <tbody>
        <tr>
          <td>诊断</td>
          <td colspan="3">
            <input type="checkbox">OLK 或其癌变患者
            <input type="checkbox">OLP 或其癌变患者
          </td>
        </tr>
        <tr>
          <td>病程</td>
          <td></td>
          <td>主观症状</td>
          <td></td>
        </tr>
      </tbody>
    </table>


<br><br>
<!-- 动态绑定行数 -->
    <table>
      <tbody>
        <tr>
          <td rowspan="5">OLK临床表现</td>
          <td rowspan="5">部位及面积</td>
          <td>部位(详述具体部位)</td>
          <td>最长径(mm) x 与最长径垂直的最长径(mm)</td>
          <td>分型</td>
          <td>分型说明</td>
        </tr>
        <tr>
          <td height="30px"></td>
          <td></td>
          <td></td>
          <td rowspan="5">
            <p>
              A 斑块状<br>
              B 皱纸状<br>
              C 颗粒状<br>
              D 疣状<br>
              E 溃疡状<br>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <br><br>
    <table>
      <tbody>
        <tr>
          <td rowspan="5">OLP临床表现</td>
          <td>部位</td>
          <td>双唇</td>
          <td>右颊</td>
          <td>左颊</td>
          <td>舌背</td>
          <td>舌腹</td>
          <td>口底</td>
          <td>硬腭</td>
          <td>软腭</td>
          <td>上颌牙龈</td>
          <td>下颌牙龈</td>
        </tr>
        <tr>
          <td>白纹累及(四分法)*</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>充血面积(四分法)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">糜烂面积</td>
          <td colspan="10">填写格式:最长径(mm) x 与最长径垂直的最长径(mm)</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <br><br>

    <table>
      <tbody>
        <tr>
          <td rowspan="12">检查</td>
          <td rowspan="5">
            目测最具癌变潜能部位(除初诊时检查的部位以外,复诊时可增加其他部位)
          </td>
          <td rowspan="2"></td>
          <td>部位(详述具体部位)</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>Velscope</td>
          <td></td>
        </tr>
        <tr>
          <td>甲苯胺蓝染色</td>
          <td></td>
        </tr>
        <tr>
          <td>组织病理结果(异常增生程度)</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="3">口腔局部刺激因素</td>
          <td>尖锐牙尖</td>
          <td></td>
        </tr>
        <tr>
          <td>不良修复体</td>
          <td></td>
        </tr>
        <tr>
          <td>牙结石</td>
          <td></td>
        </tr>
        <tr>
          <td>全身检查报告</td>
          <td>血常规</td>
          <td></td>
          <td>血糖</td>
          <td></td>
          <td>肝肾功</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <br><br>

    <table>
      <tbody>
        <tr>
          <td rowspan="2">处理措施</td>
          <td>全身用药</td>
          <td></td>
        </tr>
        <tr>
          <td>局部用药</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <table>
      <tbody>
        <tr>
          <td>备注(上述表格未包含的其他内容)</td>
          <td></td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  table{border-collapse:collapse;width: 100%;}
  td{border:1px solid #aaa;width: 10%;padding: 3px 6px;min-width: 50px;}
</style>
