import Image from 'next/image';
import Htag from '../components/Htag/Htag';
import Button from '../components/Button/Button';

export default function Home():JSX.Element {
  return (
    <div>
      <Htag tag='h1'> Текст </Htag>
      <Button appearance='primary' arrow='right'> Кнопка </Button>
      <Button appearance='ghost' > Кнопка </Button>

    </div>
  );
}
