import { ref } from 'vue'
import useImage from './img'

export default function useProject() {
  const { salesInages, dmpImages, yzImages } = useImage()
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
    },
    {
      id: '2',
      company: '弥驰祥科技有限公司',
      projects: [
        {
          id: '2-1',
          projectName: '区块驿站APP',
          description: '（2021-07 ～ 2021-09， 4人， 前端独立开发， 移动端）',
          technologys: ['uni-app', 'uViewUi'],
          projectDescription: '一款以比特币为核心内容的论坛App',
          projectResponsibility: [
            '1、负责项目的搭建（从0到1）和项目的规范化制作',
            '2、负责文章发布、评论、知识付费、实名认证、收藏点赞、会员充值等功能项20+',
            '3、封装公共的业务组件，组件化开发和公共方法抽离，减少单文件的代码量，以便于组件的维护和复用'
          ],
          projectUrl: '',
          projectImgages: yzImages
        }
      ]
    },
    {
      id: '3',
      company: '博丰物联科技有限公司',
      projects: [
        {
          id: '3-1',
          projectName: '城市智能井盖后台管理系统',
          description: '（2020-11 ～ 2021-01， 3人， 前端独立开发）',
          technologys: ['Angular', 'TypeScript', 'NG-ALAIN', 'NG-ZORRO'],
          projectDescription: '用于管理城市井盖的维护和实时监测',
          projectResponsibility: [
            '1、负责项目系统重构（从0到1），实现前后端分离开发',
            '2、负责角色、人员、机构、井盖、水位计、报警设备管理模块功能开发（完成功能项15+）',
            '3、结合高德地图完成井盖的定位和井盖的警报状态，便于维修人员及时维修',
            '4、结合webSocket实时获取水位计设备的报警通知',
            '5、对大文件进行组件拆分以及公共方法的抽取，减少重复代码及方法复用'
          ],
          projectUrl: '',
          projectImgages: []
        }
      ]
    },
    {
      id: '4',
      company: '嗨知了科技有限公司',
      projects: [
        {
          id: '4-1',
          projectName: '酒店预定后台管理系统',
          description: '（2020-04 ～ 2021-05， 9人， 前端开发负责人）',
          technologys: ['Vue系列', 'ElementUI'],
          projectDescription:
            '该系统为酒店提供了酒店预定管理和服务管理（二次开发）',
          projectResponsibility: [
            '1、规划项目功能模块的计划及模块开发的分配工作（1名实习生）',
            '2、负责产品、订单、客房等管理模块功能的开发',
            '3、封装公共的业务组件，组件化开发和公共方法抽离，减少单文件的代码量，以便于组件的维护和复用'
          ],
          projectUrl: '',
          projectImgages: []
        },
        {
          id: '4-2',
          projectName: '知了酒店管理小程序',
          description: '（2020-06 ～ 2021-07， 9人， 前端开发负责人）',
          technologys: ['微信小程序', 'VantUI'],
          projectDescription:
            '为酒店提供各方面的服务如：WIFI密码、酒店商城等（微信小程序原生开发）',
          projectResponsibility: [
            '1、规划项目功能模块的计划及模块开发的分配工作（1名实习生）',
            '2、负责扫描下单、客房服务、wifi服务等管理模块功能的开发',
            '3、封装公共的业务组件，组件化开发和公共方法抽离，减少单文件的代码量，以便于组件的维护和复用'
          ],
          projectUrl: '',
          projectImgages: []
        }
      ]
    }
  ])

  return {
    list
  }
}
