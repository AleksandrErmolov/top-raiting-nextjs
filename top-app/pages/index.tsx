import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components/';


export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0)

  const [rating, setRating] = useState<number>(4);
  
  useEffect(() => {
    console.log('counter', counter)
    return function cleanup() { 
      console.log('unnoting')
    }
  }, [])

  return (
    <div>
      <Htag tag='h1'> {counter} </Htag>
      <Button appearance='primary' arrow='right' onClick={()=> setCounter(x => x+1)}> Кнопка </Button>
      <Button appearance='ghost' arrow='down' > Кнопка </Button>
      <P size='s'> dfsfsf </P>
      <P> dfsfsf </P>
      <P size='l'> dfsfsf </P>
      <Tag size='s'>Маленький</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Зелёный</Tag>
      <Tag color="primary">Маленький</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>



    </div>
  );
}
