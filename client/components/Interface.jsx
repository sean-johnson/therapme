import React from 'react'
import InterfaceHeader from './InterfaceHeader'
import InterfaceMusicPad from './InterfaceMusicPad'
import InterfaceTones from './InterfaceTones'

export default (props) => {
  return (
    <div id="gradient">
        <InterfaceHeader />
        <InterfaceMusicPad />
        <InterfaceTones />
    </div>
  )
}
