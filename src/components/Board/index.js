import React, { useState, useCallback } from 'react';
import produce from 'immer';

import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';

const data = loadLists();




export default function Board() {
  const [lists, setLists] = useState(data);
  const [isMovingCard, setIsMovingCard] = useState(false);


  const handleDrop = useCallback(
    (index, item) => {
      if(!isMovingCard){
        setLists(produce(lists, draft => {
          const dragged = draft[item.listIndex].cards[item.index];
          draft[item.listIndex].cards.splice(item.index, 1);
          draft[index].cards.push(dragged);
        }))
      }else{
        setIsMovingCard(false);
      }
    },
  )

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      setIsMovingCard(true);
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List accepts={['CARD']} onDrop={item => handleDrop(index, item)} key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  );
}
