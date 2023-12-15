import {prisma } from '../../lib/prisma'
import Usercard from '@/app/component/Usercard/Usercard';

export default async function User() {
    const users  = await prisma.user.findMany();
  return (
    <div>
      {
        users.map(() => {
          return <div>
            {
              users.map((users) => {
                return <Usercard key={users.id} {...users}/>
              })
            }
          </div>
        })
      }
    </div>
  );
}
