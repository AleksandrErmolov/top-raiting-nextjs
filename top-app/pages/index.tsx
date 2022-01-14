import Image from 'next/image';
import { Button, Htag, P } from '../components/';


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'> Текст </Htag>
      <Button appearance='primary' arrow='right' > Кнопка </Button>
      <Button appearance='ghost' arrow='down' > Кнопка </Button>
      <P size='s'> dfsfsf </P>
      <P> dfsfsf </P>
      <P size='l'> dfsfsf </P>
    </div>
  );
}
