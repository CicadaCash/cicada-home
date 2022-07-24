import { KCC } from './index'
import NodeStakingLink from '../components/NodeStakingLink'

export interface NavItemType {
  name: any
  hasChildren?: boolean
  hasGroup?: boolean
  route?: string
  childrens?: NavItemChildrenType[] | NavItemGroupType[]
}

export interface NavItemChildrenType {
  title: string
  subTitle: string
  route: string
  icon: string
  setOpenKeys?: any
}

export interface NavItemGroupType {
  groupName: string
  groupMember: NavItemChildrenType[]
}

export const HOME_MENU_LIST = [
  {
    title: 'Whitepaper',
    subTitle: 'Start building on KuCoin Community Chain',
    route: KCC.DOCS_URL,
    icon: require('../assets/images/Icons/menu/docs@2x.png').default,
  },
]

export const MENU_LIST = [
  {
    name: 'Home',
    route: '/',
    hasChildren: false,
  },
  {
    name: 'Developers',
    hasChildren: true,
    childrens: [
      {
        title: 'Developer Docs',
        subTitle: 'Start building on KuCoin Community Chain',
        route: KCC.DOCS_URL,
        icon: require('../assets/images/Icons/menu/docs@2x.png').default,
      },
      {
        title: 'Github',
        subTitle: 'Visit our Github community',
        route: KCC.GITHUB_URL,
        icon: require('../assets/images/Icons/menu/github@2x.png').default,
      },
      {
        title: 'Cicada Testnet faucet',
        subTitle: 'Get Cicada testnet tokens',
        route: KCC.FAUCET,
        icon: require('../assets/images/Icons/menu/faucet@2x.png').default,
      },
    ],
  },
  {
    name: 'Ecosystem',
    hasChildren: true,
    hasGroup: true,
    childrens: [
      {
        groupName: 'Explorer',
        groupMember: [
          {
            title: 'Cicada Explorer (testnet)',
            subTitle: 'View information on the KCC public chain',
            route: KCC.EXPLORER,
            icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
          },
        ],
      },
      {
        groupName: 'Dapp',
        groupMember: [
          // {
          //   title: 'Discover',
          //   subTitle: 'Discover Desc',
          //   route: KCC.DISCOVER,
          //   icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
          // },
          {
            title: 'CICA Bridge',
            subTitle: 'KCC BRIDGE DESC',
            route: '/bridge/transfer',
            icon: require('../assets/images/Icons/menu/bridge.png').default,
          },
          {
            title: 'CICA Swap',
            subTitle: 'Protect asset security',
            route: KCC.SAFE_GNOSIS,
            icon: require('../assets/images/Icons/menu/defi@2x.png').default,
          },

          // {
          //   title: 'Submit a Dapp',
          //   subTitle: 'Submit your dapp to the community',
          //   route: KCC.DAPP_URL,
          //   icon: require('../assets/images/Icons/menu/submit@2x.png').default,
          // },
        ],
      },
      {
        groupName: 'Wallet',
        groupMember: [
          {
            title: 'Metamask',
            subTitle: 'Visit and link to metamask',
            route: 'https://metamask.io',
            icon: require('../assets/images/Icons/menu/metamask@2x.png').default,
          },
        ],
      },
    ],
  },
  {
    name: 'Community',
    hasChildren: true,
    childrens: [
      {
        title: 'CI-DAO',
        subTitle: 'Dao Desc',
        route: KCC.DAO,
        icon: require('../assets/images/Icons/menu/dao@2x.png').default,
      },
      {
        title: 'Grant Program',
        subTitle: `support for community development and research`,
        route: '/',
        icon: require('../assets/images/Icons/menu/grant@2x.png').default,
      },
      {
        title: 'Ambassador Program',
        subTitle: `support for community development and research`,
        route: '/',
        icon: require('../assets/images/Icons/menu/grant@2x.png').default,
      },
      {
        title: 'Funding Program',
        subTitle: `support for community development and research`,
        route: '/',
        icon: require('../assets/images/Icons/menu/grant@2x.png').default,
      },
    ],
  },
  {
    name: NodeStakingLink,
    subTitle: '',
    route: KCC.STAKING,
    icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
    hasChildren: false,
  },
  {
    name: 'Discover',
    subTitle: 'Discover Desc',
    route: KCC.DISCOVER,
    icon: require('../assets/images/Icons/menu/chrome@2x.png').default,
    hasChildren: false,
  },
  {
    name: 'News',
    route: '/',
    hasChildren: false,
  },
  {
    name: 'Activites',
    subTitle: 'View the exciting activites information, Includes hackathons,meetups,and more',
    route: '/activity',
    // route: '',
    // subTitle: 'Coming Soon...',
    icon: require('../assets/images/Icons/menu/activity@2x.png').default,
    hasChildren: false,
  },
  {
    name: 'Jobs',
    subTitle: 'View the exciting activites information, Includes hackathons,meetups,and more',
    route: '/jobs',
    // route: '',
    // subTitle: 'Coming Soon...',
    icon: require('../assets/images/Icons/menu/activity@2x.png').default,
    hasChildren: false,
  },

]
