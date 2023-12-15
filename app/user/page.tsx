import { prisma } from '../../lib/prisma';
import Usercard from '@/app/component/Usercard/Usercard';

export default async function User() {
  const users = await prisma.user.findMany();
  
  return (
    <div>
      {
        users.map((user) => {
          return <div key={user.id}>
            <Usercard {...user} />
          </div>;
        })
      }
    </div>
  );
}
