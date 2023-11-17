import ClientSide from './clientside';
import { trpc } from './trpc';

export default async function Home() {
    const response = await trpc.hello.query({ name: 'balhiboon' });

    return (
        <main>
            <ClientSide />
            <h1>Server: {response}</h1>
        </main>
    );
}
