import { ref } from 'vue'
import useImage from './img'

export default function useProject() {
  const { salesInages, dmpImages } = useImage()
  const list = ref([
    {
      id: '1',
      company: '桔子信息科技有限公司',
      projects: [
        {
          id: '1-1',
          projectName: '销售管理系统',
          description: '（2021-12 ~ 2022-08, 5人， 前端独立开发，移动端）',
          technologys: ['Vue 全家桶'],
          projectDescription:
            '是一个钢铁行业的中后台管理系统，用于管理订单、财务、产品、授信等模块的内容（该项目基于公司内部提供的框架上开发）',
          projectResponsibility: [
            '1、负责产品、订单、汇款、退款、授信、结算、收盘等管理模块功能的开发（完成功能项30+)',
            '2、封装公共的业务组件，如：搜索组件（带多条件内容筛选），组件化开发和公共方法抽离，减少单文件的代码量，以便于组件的维护和复用',
            '3、对不同角色的一二级菜单数据进行处理分配，完成菜单的权限的控制'
          ],
          projectUrl: 'http://jinjiangadmin.oranllc.com/m/#/',
          projectImgages: salesInages
        },
        {
          id: '1-2',
          projectName: '数字化经营决策和业绩管理系统',
          description: '（2022-10 ～ 2022-11， 5人， 前端独立开发， 移动端）',
          technologys: ['Vue 全家桶', 'Pinia', 'Vant UI'],
          projectDescription:
            '该系统提供了企业的当下的销售数据，为经营者和决策者更精准的数据，从而实现更好的数据化管理',
          projectResponsibility: [
            '1、负责项目的搭建（从0到1）和项目的规范化制作',
            '2、封装公共的hooks 3+，如：页面水印、倒计时、ECharts等',
            '3、对大文件进行组件拆分以及公共方法的抽取，减少重复代码',
            '4、对不同角色的一二级菜单数据进行处理分配，完成菜单的权限的控制',
            '5、完成不同图表的展示，如：柱状图、地图等个性化图表10+'
          ],
          projectUrl: '',
          projectImgages: dmpImages
        }
      ]
    }
  ])

  return {
    list
  }
}
