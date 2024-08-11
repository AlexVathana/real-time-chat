import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

export default function ChatsPage(props) {
    const chatProps = useMultiChatLogic('935eb097-9763-4dd7-8beb-a5817d8176db', props.user.username, props.user.secret)
  return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket{...chatProps}/>
      <MultiChatWindow{...chatProps} style={{height: '100%'}}/>
    </div>
  )
}
