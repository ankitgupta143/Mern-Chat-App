import Conversation from './Conversation'
import useGetConersations from '../../hooks/useGetConersations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading, conversations} =  useGetConersations();
  return (

    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation = {conversation}
          emoji = {getRandomEmoji()}
          lastIdx = {idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations


// Starter Code:-
// import React from 'react'
// import Conversation from './Conversation'
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default Conversations
