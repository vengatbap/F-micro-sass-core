import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function InviteUserForm() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Button>Invite</Button>
    </form>
  );
}