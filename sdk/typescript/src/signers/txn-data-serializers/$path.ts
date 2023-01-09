import type { OptionalQuery as OptionalQuery0 } from '../pages/two-factor-authentication'

export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "$500": {
    $url: (url?: { hash?: string }) => ({ pathname: '/500' as const, hash: url?.hash })
  },
  _customerCode: (customerCode: string | number) => ({
    "admin": {
      "data_report_accounts": {
        _name: (name: string | number) => ({
          $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/admin/data-report-accounts/[name]' as const, query: { customerCode, name }, hash: url?.hash })
        }),
        $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/admin/data-report-accounts' as const, query: { customerCode }, hash: url?.hash })
      },
      "groups": {
        _hashid: (hashid: string | number) => ({
          $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/admin/groups/[hashid]' as const, query: { customerCode, hashid }, hash: url?.hash })
        }),
        $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/admin/groups' as const, query: { customerCode }, hash: url?.hash })
      },
      "members": {
        _hashid: (hashid: string | number) => ({
          $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/admin/members/[hashid]' as const, query: { customerCode, hashid }, hash: url?.hash })
        }),
        $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/admin/members' as const, query: { customerCode }, hash: url?.hash })
      }
    },
    "ipoe_contracts": {
      _ipoeContractId: (ipoeContractId: string | number) => ({
        "orders": {
          _ipoeOrderId: (ipoeOrderId: string | number) => ({
            $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/ipoe-contracts/[ipoeContractId]/orders/[ipoeOrderId]' as const, query: { customerCode, ipoeContractId, ipoeOrderId }, hash: url?.hash })
          })
        },
        $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/ipoe-contracts/[ipoeContractId]' as const, query: { customerCode, ipoeContractId }, hash: url?.hash })
      }),
      $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/ipoe-contracts' as const, query: { customerCode }, hash: url?.hash })
    },
    "isps": {
      _ispCode: (ispCode: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/isps/[ispCode]' as const, query: { customerCode, ispCode }, hash: url?.hash })
      }),
      $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]/isps' as const, query: { customerCode }, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/[customerCode]' as const, query: { customerCode }, hash: url?.hash })
  }),
  "announcements": {
    _hashid: (hashid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/announcements/[hashid]' as const, query: { hashid }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/announcements' as const, hash: url?.hash })
  },
  "contact": {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "invitation": {
    $url: (url?: { hash?: string }) => ({ pathname: '/invitation' as const, hash: url?.hash })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash })
  },
  "maintenance_notifications": {
    _hashid: (hashid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/maintenance-notifications/[hashid]' as const, query: { hashid }, hash: url?.hash })
    })
  },
  "send_unlock_email": {
    $url: (url?: { hash?: string }) => ({ pathname: '/send-unlock-email' as const, hash: url?.hash })
  },
  "settings": {
    "confirm_email": {
      $url: (url?: { hash?: string }) => ({ pathname: '/settings/confirm-email' as const, hash: url?.hash })
    },
    "forgot_password": {
      $url: (url?: { hash?: string }) => ({ pathname: '/settings/forgot-password' as const, hash: url?.hash })
    },
    "reset_password": {
      $url: (url?: { hash?: string }) => ({ pathname: '/settings/reset-password' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/settings' as const, hash: url?.hash })
  },
  "trouble_notifications": {
    _hashid: (hashid: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/trouble-notifications/[hashid]' as const, query: { hashid }, hash: url?.hash })
    })
  },
  "two_factor_authentication": {
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/two-factor-authentication' as const, query: url?.query, hash: url?.hash })
  },
  "unlock_account": {
    $url: (url?: { hash?: string }) => ({ pathname: '/unlock-account' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  isp: {
    block_icon_svg: '/isp/block-icon.svg',
    graph_icon_svg: '/isp/graph-icon.svg'
  },
  locales: {
    en: {
      common_json: '/locales/en/common.json'
    },
    ja: {
      common_json: '/locales/ja/common.json'
    }
  },
  sidebar: {
    caf_icon_svg: '/sidebar/caf-icon.svg',
    cil_description_svg: '/sidebar/cil-description.svg',
    gear_icon_svg: '/sidebar/gear-icon.svg',
    info_icon_svg: '/sidebar/info-icon.svg',
    isp_icon_svg: '/sidebar/isp-icon.svg',
    survey_icon_svg: '/sidebar/survey-icon.svg',
    talk_icon_svg: '/sidebar/talk-icon.svg'
  },
  top: {
    construction_icon_svg: '/top/construction-icon.svg'
  },
  transix_logo_black_png: '/transix-logo-black.png',
  transix_logo_monochrome_svg: '/transix-logo-monochrome.svg',
  transix_logo_white_png: '/transix-logo-white.png'
} as const

export type StaticPath = typeof staticPath
