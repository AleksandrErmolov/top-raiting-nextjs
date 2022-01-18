import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components/';
import { withLayout } from '../layout/Layout'
import axios from "axios"
import { GetStaticProps } from 'next'
import { MenuItem } from '../interfaces/menu.interface';

function Home({menu}:HomeProps): JSX.Element {

  const [counter, setCounter] = useState<number>(0)

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('counter', counter)
    return function cleanup() {
      console.log('unnoting')
    }
  }, [])

  return (
    <>
      <Htag tag='h1'> {counter} </Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}> Кнопка </Button>
      <Button appearance='ghost' arrow='down' > Кнопка </Button>
      <P size='s'> dfsfsf </P>
      <P> dfsfsf </P>
      <P size='l'> dfsfsf </P>
      <Tag size='s'>Маленький</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Зелёный</Tag>
      <Tag color="primary">Маленький</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(m => (  
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}

      </ul>
      
    </>
  );
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps = async () => {

  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory})

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> { 
  menu: MenuItem[],
  firstCategory:number,
}