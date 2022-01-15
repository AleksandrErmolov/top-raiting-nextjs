import Image from 'next/image';
import { Button, Htag, P, Tag } from '../components/';


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'> Текст </Htag>
      <Button appearance='primary' arrow='right' > Кнопка </Button>
      <Button appearance='ghost' arrow='down' > Кнопка </Button>
      <P size='s'> dfsfsf </P>
      <P> dfsfsf </P>
      <P size='l'> dfsfsf </P>
      <Tag size='s'>Маленький</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Зелёный</Tag>
      <Tag color="primary">Маленький</Tag>



    </div>
  );
}
