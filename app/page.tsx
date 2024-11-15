import { Logo } from '@/components/logo';
import { AuthForm } from '@/components/auth-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-background/95">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Logo className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary">
            Welcome to BalanceBox
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Your personal finance companion
          </p>
        </div>
        <AuthForm />
      </div>
    </main>
  );
}