import { Button } from "../components/ui/button";

function Home() {
  return (
    <>
      <div className='bg-background text-foreground'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          The Book Club
        </h1>
        <Button>Login</Button>
      </div>
    </>
  );
}

export default Home;
