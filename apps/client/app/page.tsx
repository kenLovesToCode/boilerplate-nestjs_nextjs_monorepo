import ClientSide from './clientside';
import { trpc } from './trpc';

export default async function Home() {
    const response = await trpc.hello.query({ name: 'new kid' });

    return (
        <main>
            <ClientSide />
            <h1>Server: {response}</h1>
            <h1>REAL BACKEND: {process.env.BACKEND}</h1>
        </main>
    );
}
