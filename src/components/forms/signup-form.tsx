import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function SignupForm() {
  return (
    <form>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Signup</Button>
    </form>
  );
}