import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function LoginForm() {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  );
}